import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, SafeAreaView, Platform } from 'react-native';
import { Dialog, Portal, Text, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { CREATE_A_REPORT } from "../../src/Mutations/CreateAReport"
import { FETCH_ALL_REPORTS } from "../../src/Queries/FetchAllReports";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextInput from '../Login/LoginComponents/TextInput';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

// import { captureRef } from 'react-native-view-shot';
import ImageViewer from '../../shared/ImageViewer';
const PlaceholderImage = require("../../assets/landmine-warning.png");
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BackButton from '../Login/LoginComponents/BackButton';


export default function NewReportScreen({ navigation, route }) {
  //Add Photo Function
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [status, requestPermission] = MediaLibrary.usePermissions();

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
  const [distanceDropDown, setDistanceDropDown] = useState(false);
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
    { label: "I'm not sure.", value: "UNCLEAR" },
    { label: "The incident is obscured.", value: "OBSCURED" },
    { label: "It's a small sized object. (smaller than a soccerball)", value: "SMALL" },
    { label: "It's a medium sized object. (close in size to a soccerball)", value: "MEDIUM" },
    { label: "It's a large object. (larger than a soccerball", value: "LARGE" },
    { label: "There are many objects.", value: "MULTIPLE" },
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
  const [reportDistance, setReportDistance] = useState("unknown")
  const [reportDistanceTypes, setReportDistanceTypes] = useState([
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "30", value: "30" },
    { label: "50", value: "50" },
    { label: "+100", value: "+100" },
  ]);

  const imageRef = useRef();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result);
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
      console.log(assets[0].uri);
    } else {
      alert('You did not select any image.')
    }
  };

  const onRest = () => {
    setShowAppOptions(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      domtoimage
      .toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        })
      .then(dataUrl => {
        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(e => {
        console.log(e);
      });
    }
   
  };

  if (status === null) {
    requestPermission();
  const goBack = () => {
    navigation.goBack();
    setTempCoords({latitude: 0, longitude: 0});
  }
  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <BackButton 
        goBack={goBack}
      />
      <Text
        variant='displaySmall'
        style={styles.title}
      >
        New Report
      </Text>
      <View style={styles.inputContainer}>
        <Text
          style={styles.labels}
        > What do you see? </Text>
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
        <Text style={styles.labels} > How wide an area does the incident affect? </Text>
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
        <Text style={styles.labels} > How far are you from the incident? </Text>
        <DropDownPicker
          open={distanceDropDown}
          value={reportDistance}
          items={reportDistanceTypes}
          setOpen={setDistanceDropDown}
          setItems={setReportDistanceTypes}
          setValue={setReportDistance}
          zIndex={1000}
          zIndexInverse={3000}
          style={styles.picker}
        />
        <Text style={styles.labels} > Tell us what you can observe. </Text>
        <TextInput
          label="Description"
          placeholder='what do you see?'
          defaultValue=' '
          onChangeText={(text) => setDescription({ value: text })}
          multiline={true}
          style={styles.textInput}
          returnKeyType='next'
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
            let reportString = `The reporter is ${reportDistance}m from the incident. The reporter says "${reportCategory}" about the incident. The incident may cover an area of ${radius}m. The reporter offered the description of the incident as following: ${description.value}`
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
                  description: reportString,
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
                  description: reportString,
                  radius: report.radius,
                  statusCategory: report.statusCategory,
                  reportCategory: report.reportCategory,
                  imageUrl: report.imageUrl,
                  userId: report.userId
                };
                refetch();
                console.log("Refetch Data Completed: ")
                console.log(data.createReport);
                setPinData([...pinData, newReport]);
              },
            })

            navigation.navigate({
              name: "Map",
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
  textInput: {
    height: 75,
  },
  title: {
    alignSelf: 'center',
  },
  labels: {
    marginVertical: 10,
  },
  picker: {
    marginVertical: 10
  }



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
      { label: "I'm not sure", value: "UNCLEAR" },
      { label: "The incident is obscured", value: "OBSCURED" },
      { label: "It's a small object", value: "SMALL" },
      { label: "It's a large object", value: "LARGE" },
      { label: "There are many objects", value: "MULTIPLE" },
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

    // const pickImage = async () => {
    //   // No permissions request is necessary for launching the image library
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });
    //   console.log('pickImage return value: ', result);
    //   if (!result.canceled) {
    //     setImage(result.assets[0].uri);
    //   }
    // };

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
          > What do you see? </Text>
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
          <Text style={styles.labels} > How far are you from the incident? </Text>
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
          <Text style={styles.labels} > Tell us what you can observe. </Text>
          <TextInput
            label="Description"
            placeholder='what do you see?'
            defaultValue=' '
            onChangeText={(text) => setDescription({ value: text })}
            multiline={true}
            returnKeyType='next'
          />
        </View>
        <View
          style={styles.buttonContainer}
        >
          <GestureHandlerRootView style={styles.photoContainer}>
            <View style={styles.imageContainer}>
              <View ref={imageRef} collapsable={false}>
              < ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
              </View>
            </View>
          </GestureHandlerRootView>

          <Button
            title="Pick an image from camera roll"
            style={styles.buttonStyle}
            onPress={pickImageAsync}
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
    picker: {
      marginVertical: 10
    },
    photoContainer: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
  })