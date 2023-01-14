// RN imports
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

// Component and theme imports
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
} from '@expo-google-fonts/raleway';
export default function Header({ font, children }) {
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
    <Text
      style={ styles.header }
    >
      {children}
    </Text>)
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Raleway_600SemiBold',
    color: '#000000',
    fontSize: 32,
    paddingVertical: 12,
  },
})