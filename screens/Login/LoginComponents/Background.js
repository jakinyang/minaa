// RN imports
import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'

// Component and them imports
// import { theme } from '../core/theme'

export default function Background({ children }) {

  return (
    <ScrollView style={{ flex: 1, width: "100%", height: "100%" }}>
      <ImageBackground
        // source={require('assets/icon.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>  
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    // backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})