// RN imports
import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native'

// component imports
import Background from './LoginComponents/Background.js';
import Logo from './LoginComponents/Logo.js';
import Header from './LoginComponents/Header.js';
import Button from './LoginComponents/Button.js';
import Paragraph from './LoginComponents/Paragraph.js';
import ScreenHeader from '../../shared/ScreenHeader';


export default function StartScreen({ navigation }) {
 
  return (
    <>
      <SafeAreaView />
        <Background>
        <ScreenHeader navigation={navigation} />
          <View>
            <Logo />
            <Header>Minaa App</Header>
            <Paragraph>
              Welcome to the Login start Screen. Success!
            </Paragraph>
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
    </>
  )
}