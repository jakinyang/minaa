// RN imports
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

// Component and theme imports
// import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  description: {
    fontSize: 13,
    paddingTop: 8,
    fontFamily: 'OpenSans_400Regular',
  },
  error: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 13,
    paddingTop: 8,
  },
})