import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { Dialog, Portal, Text, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { CREATE_A_REPORT } from "../../src/Mutations/CreateAReport"
import { FETCH_ALL_REPORTS } from "../../src/Queries/FetchAllReports";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextInput from '../Login/LoginComponents/TextInput';

export default function NewReportScreen({ navigation, route }) {
  //Mutation
  const [createReport, { data, loading, error }] = useMutation(CREATE_A_REPORT);
  if (loading) {
    console.log("Submitting report data");
  }
  if (error) {
    console.log("Error when submitting: ", error.message);
  }
  if (data) {
    console.log("Report submitted successfully");
  }
  //New report state
  const [radiusDropDown, setRadiusDropDown] = useState(false);
  const [reportDropDown, setReportDropDown] = useState(false);
  const [description, setDescription] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [radius, setRadius] = useState(5);
  const [radiusValue, setRadiusValue] = useState([
    { label: "5 Meters", value: 5 },
    { label: "10 Meters", value: 10 },
    { label: "15 Meters", value: 15 },
    { label: "30 Meters", value: 30 },
    { label: "50 Meters", value: 50 },
  ]);
  const [reportCategory, setReportCategory] = useState("UNCLEAR");
  const [reportTypes, setReportTypes] = useState([
    { label: "Unclear", value: "UNCLEAR" },
    { label: "Obscured", value: "OBSCURED" },
    { label: "Multiple", value: "MULTIPLE" },
    { label: "Large", value: "LARGE" },
    { label: "Small", value: "SMALL" },
  ]);
  const [reportStatus, setStatusStatus] = useState("REPORTED")
  const [reportStatusTypes, setStatusTypes] = useState([
    { label: "Reported", value: "REPORTED" },
    { label: "Reviewed", value: "REVIEWED" },
    { label: "Neutralized", value: "NEUTRALIZED" },
    { label: "Dismissed", value: "DISMISSED" },
    { label: "Verified", value: "VERIFIED" },
    { label: "Uncertain", value: "UNCERTAIN" },
  ]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('pickImage return value: ', result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const insets = useSafeAreaInsets()

  // Extract Route Params
  const { userInfo, pinData, tempCoords, setTempCoords, setPinData, refetch } = route.params

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <Text
        variant='displaySmall'
        style={styles.title}
      >
        New Report
      </Text>
      <View style={styles.inputContainer}>
        <Text
          style={styles.labels}
        > Report type </Text>
        <DropDownPicker
          open={reportDropDown}
          value={reportCategory}
          items={reportTypes}
          setOpen={setReportDropDown}
          setItems={setReportTypes}
          setValue={setReportCategory}
          zIndex={3000}
          zIndexInverse={1000}

        />
        <Text style={styles.labels} > Area of concern in meters </Text>
        <DropDownPicker
          open={radiusDropDown}
          value={radius}
          items={radiusValue}
          setOpen={setRadiusDropDown}
          setItems={setRadiusValue}
          setValue={setRadius}
          zIndex={1000}
          zIndexInverse={3000}
          style={styles.picker}
        />
        <TextInput
          label="Descriptoion"
          placeholder='what do you see?'
          defaultValue=' '
          onChangeText={(text) => setDescription({ value: text })}
          multiline={true}
          returnKeyType='next'
          style={styles.textInput}
        />
      </View>
      <View
        style={styles.buttonContainer}
      >
        <Button
          title="Pick an image from camera roll"
          style={styles.buttonStyle}
          onPress={pickImage}
          mode="contained">
          Select Photo
        </Button>
        <Button
          mode='outlined'
          style={styles.buttonStyle}
          onPress={() => {
            setTempCoords({ latitude: 0, longitude: 0 })
            const newReport = {
              longitude: tempCoords.longitude,
              latitude: tempCoords.latitude,
              description: description.value,
              radius: radius,
              statusCategory: reportStatus,
              reportCategory: reportCategory,
              imageUrl: imageUrl,
              createdAt: "2023-01-09T21:44:08.923Z",
              updatedAt: "2023-01-09T21:44:08.923Z",
              userId: userInfo.id
            };
            console.log("New Report Data - after-submission: ", newReport);

            createReport({
              variables: {
                data: {
                  latitude: newReport.latitude,
                  longitude: newReport.longitude,
                  description: newReport.description,
                  radius: newReport.radius,
                  reportCategory: newReport.reportCategory,
                  statusCategory: newReport.statusCategory,
                  imageUrl: "https://www.google.com",
                  userId: newReport.userId
                }
              },
              refetchQueries:
                [
                  { query: FETCH_ALL_REPORTS },
                  'Query'
                ],
              fetchPolicy: "network-only",
              onCompleted: (data) => {
                let report = data.createReport;
                const newReport = {
                  id: report.id,
                  latitude: report.latitude,
                  longitude: report.longitude,
                  description: report.description,
                  radius: report.radius,
                  statusCategory: report.statusCategory,
                  reportCategory: report.reportCategory,
                  imageUrl: report.imageUrl,
                  userId: report.userId
                };
                // setPinData([...pinData, newReport]);
                refetch();
                console.log("Refetch Data Completed: ")
                console.log(data.createReport);
                setPinData([...pinData, newReport]);
              },
            })

            navigation.navigate({
              name: "Map",
              // params: {newReport: newReport},
              merge: true
            })
          }} >Submit Report</Button>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignContent: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    padding: 20,
    margin: 20
  },
  buttonContainer: {
    width: "50%",
    alignSelf: 'center'
  },
  buttonStyle: {
    margin: 10,
    padding: 5
  },
  title: {
    alignSelf: 'center',
  },
  labels: {
    marginVertical: 10,
  },
  textInput: {
    marginTop: 10,
  },
  picker: {
    marginVertical: 10
  }
})