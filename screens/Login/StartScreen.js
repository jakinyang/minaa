// RN imports
import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// component imports
import Background from './LoginComponents/Background.js';
import Logo from './LoginComponents/Logo.js';
import Header from './LoginComponents/Header.js';
import Button from './LoginComponents/Button.js';

import Paragraph from './LoginComponents/Paragraph.js';

export default function StartScreen({ navigation }) {
  const inset = useSafeAreaInsets();
  
  return (
    <View style={{ ...styles.container, inset }}>
      <Logo />
      <Header>MINNA</Header>
      <Button
        mode="contained"
        style={{ paddingHorizontal: 8 }}
        onPress={() => navigation.navigate('LoginScreen')}
      >
       LOGIN
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        SIGN UP
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 4,
  },
})