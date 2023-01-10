import * as React from 'react';
import { useState } from 'react';
import { View, Button,StyleSheet, ScrollView } from 'react-native';
import { Dialog, Portal, Text, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


export default function NewReportScreen() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("")
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

  return (
    <ScrollView style={{ flex: 1, width: "100%", height: "100%"}}>
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
          open={open}
          value={reportSizeValue}
          items={reportSizeItem}
          setOpen={setOpen}
          setItems={setReportSizeItem}
          setValue={setReportSizeValue}
          zIndex={1000}
          zIndexInverse={3000}
        />
      </View>
    </ScrollView>
  )
}