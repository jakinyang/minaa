// RN imports
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {

  console.log("login component Paragraph props: ", props);

  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'OpenSans_400Regular',
  },
})