import * as React from 'react';
import { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { Dialog, Portal, Text, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import CreateAReport from '../../src/Mutations/CreateAReport';


export default function NewReportScreen({ navigation, route }) {
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
    { label: "Multiple", value: "MULTPLE" },
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

  //Test
  console.log("route.params.newPinData:", route.params.pinData);
  console.log("route.params.tempCoords:", route.params.tempCoords);

  // Extract Route Params
  const {pinData, tempCoords, setPinData} = route.params
  const { userId } = route.params.pinData;

  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <SafeAreaView />
      <View>
        <Text> New Report </Text>
        <TextInput
          mode='outlined'
          label="description"
          placeholder='what do you see?'
          onChangeText={(text) => setDescription({ value: text })}
          multiline="true"
          returnKeyType='next'
        />
        <Text> Report type </Text>
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
        <Text> Area of concern in meters </Text>
        <DropDownPicker
          open={radiusDropDown}
          value={radius}
          items={radiusValue}
          setOpen={setRadiusDropDown}
          setItems={setRadiusValue}
          setValue={setRadius}
          zIndex={1000}
          zIndexInverse={3000}
        />
        <Button title='Submit' onPress={() => {
          const newReport = {
              longitude: tempCoords.longitude,
              latitude: tempCoords.latitude,
              description: description,
              radius: radius,
              statusCategory: reportStatus,
              reportCategory: reportCategory,
            imageUrl: imageUrl,
          };
          console.log("New Report Data - pre-submission: ", newReport);
          let tempData = pinData.slice(0, -1);
          setPinData([...tempData, newReport]);
          /* 
          
          Apollo Client Query
          mutation => create new report
          useQuery(gql`
            muation(foo) {
              report(baz) {
                id,
                ...
              }
            }
          `) 
          */

          navigation.navigate({
            name: "Map",
            params: {newReport: newReport},
            merge: true
          })
        }} />
        <Button 
          title="Pick an image from camera roll" 
          onPress={pickImage} 
        />
        {imageUrl && <View><Image source={{ uri: imageUrl }} /></View>}
  
      </View>
    </View>
  )
}