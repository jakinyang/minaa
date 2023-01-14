// RN imports
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
} from '@expo-google-fonts/raleway';


export default function Button({ mode, style, ...props }) {
const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: 'rgb(242, 242, 242)' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: 'Raleway_600SemiBold',
  },
})