import * as React from 'react';
import { useState } from 'react';
import { View, Button,StyleSheet, ScrollView, Image } from 'react-native';
import { Dialog, Portal, Text, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';


export default function NewReportScreen() {

  //New report state
  const [open, setOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null);
  const [reportSizeValue, setReportSizeValue] = useState(5)
  const [reportSizeItem, setReportSizeItem] = useState([
    { label: "5 Meters", value: 5 },
    { label: "10 Meters", value: 10 },
    { label: "15 Meters", value: 15 },
    { label: "30 Meters", value: 30 },
    { label: "50 Meters", value: 50 },
  ])
  const [reportValue, setReportValue] = useState(null)
  const [reportItems, setReportItems] = useState([
    { label: "Unclear", value: "unclear"},
    { label: "Obscured", value: "obscured"},
    { label: "Multiple", value: "multiple"},
    { label: "Large", value: "large"},
    { label: "Small", value: "small"},
  ])

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

  return (
    <View style={{ flex: 1, width: "100%", height: "100%"}}>
      <View>
        <Text> New Report </Text>
        <TextInput 
          mode='outlined'
          label="description"
          placeholder='what do you see?'
          onChangeText={(text) => setDescription({value: text})}
          multiline="true"
          returnKeyType='next'
        />
        <Text> Report type </Text>
        <DropDownPicker 
          open={open}
          value={reportValue}
          items={reportItems}
          setOpen={setOpen}
          setItems={setReportItems}
          setValue={setReportValue}
          zIndex={3000}
          zIndexInverse={1000}

        />
        <Text> Area of concern in meters </Text>
        <DropDownPicker 
          open={reportOpen}
          value={reportSizeValue}
          items={reportSizeItem}
          setOpen={setReportOpen}
          setItems={setReportSizeItem}
          setValue={setReportSizeValue}
          zIndex={1000}
          zIndexInverse={3000}
        />
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <View><Image source={{ uri: image }} /></View>}
      </View>
    </View>
  )
}