import React from 'react';
import Background from './LoginComponents/Background.js';
import Logo from './LoginComponents/Logo.js';
import Header from './LoginComponents/Header.js';
import Button from './LoginComponents/Button.js';
import Paragraph from './LoginComponents/Paragraph.js';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      {/* <Logo />
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
      </Button> */}
    </Background>
  )
}

/**
 * 
 *  <Background> removed cause caused crash
 */