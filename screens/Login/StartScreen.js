// RN imports
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// component imports
import Background from './LoginComponents/Background.js';
import Logo from './LoginComponents/Logo.js';
import Header from './LoginComponents/Header.js';
import Button from './LoginComponents/Button.js';
import Paragraph from './LoginComponents/Paragraph.js';
import { PreferencesContext } from '../../shared/preferencesContext.js';
import { lightColor } from '../../assets/ColorPalette.js';

export default function StartScreen({ navigation }) {
  const inset = useSafeAreaInsets();
  const { isThemeDark } = useContext(PreferencesContext);
  let loginTextColor = isThemeDark ? "#cfab58" : null
  let signUpButtonColor = isThemeDark ? "#cfab58" : null
  let signUpTextColor = isThemeDark ? lightColor.lapizLazuli[300] : null
  
  return (
    <View style={{ ...styles.container, inset }}>
      <Logo />
      <Header>MINAA</Header>
      <Button
        mode="contained"
        style={{ paddingHorizontal: 8 }}
        onPress={() => navigation.navigate('LoginScreen')}
        textColor={loginTextColor}
      >
       LOGIN
      </Button>
      <Button
        mode="elevated"
        onPress={() => navigation.navigate('RegisterScreen')}
        buttonColor = {signUpButtonColor}
        textColor = {signUpTextColor}
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