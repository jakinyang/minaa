// RN imports
import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useFonts,
  Barlow_100Thin,
  Barlow_100Thin_Italic,
  Barlow_200ExtraLight,
  Barlow_200ExtraLight_Italic,
  Barlow_300Light,
  Barlow_300Light_Italic,
  Barlow_400Regular,
  Barlow_400Regular_Italic,
  Barlow_500Medium,
  Barlow_500Medium_Italic,
  Barlow_600SemiBold,
  Barlow_600SemiBold_Italic,
  Barlow_700Bold,
  Barlow_700Bold_Italic,
  Barlow_800ExtraBold,
  Barlow_800ExtraBold_Italic,
  Barlow_900Black,
  Barlow_900Black_Italic,
} from '@expo-google-fonts/barlow';

// component imports
import Background from './LoginComponents/Background.js';
import Logo from './LoginComponents/Logo.js';
import Header from './LoginComponents/Header.js';
import Button from './LoginComponents/Button.js';

import Paragraph from './LoginComponents/Paragraph.js';

export default function StartScreen({ navigation }) {
  const insets = useSafeAreaInsets().top;
  const [fontsLoaded] = useFonts({
    Barlow_100Thin,
    Barlow_100Thin_Italic,
    Barlow_200ExtraLight,
    Barlow_200ExtraLight_Italic,
    Barlow_300Light,
    Barlow_300Light_Italic,
    Barlow_400Regular,
    Barlow_400Regular_Italic,
    Barlow_500Medium,
    Barlow_500Medium_Italic,
    Barlow_600SemiBold,
    Barlow_600SemiBold_Italic,
    Barlow_700Bold,
    Barlow_700Bold_Italic,
    Barlow_800ExtraBold,
    Barlow_800ExtraBold_Italic,
    Barlow_900Black,
    Barlow_900Black_Italic,
  });

  return (
    <Background>
      <View style={styles.container}>
        <Logo />
        <Text
          style={styles.title}
        >Minaa</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          Sign Up
        </Button>
      </View>
    </Background>
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
  title: {
    fontFamily: 'Barlow_700Bold',
    fontSize: 32,
    color: '#000000',
  }
})