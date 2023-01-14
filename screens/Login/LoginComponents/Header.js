// RN imports
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
// Component and theme imports
// import { theme } from '../core/theme'

export default function Header({ font, children }) {

  return (
    <Text
      style={{ ...styles.header, fontFamily: font }}
    >
      {children}
    </Text>)
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    // color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})