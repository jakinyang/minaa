// RN imports
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Header({ font, children }) {
  
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
    fontSize: 40,
    paddingVertical: 12,
  },
})