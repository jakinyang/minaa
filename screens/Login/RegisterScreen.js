// RN imports
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { Text } from 'react-native-paper'

// component imports
import Background from './LoginComponents/Background.js'
import Logo from './LoginComponents/Logo.js'
import Header from './LoginComponents/Header.js'
import Button from './LoginComponents/Button.js'
import TextInput from './LoginComponents/TextInput.js'
import BackButton from './LoginComponents/BackButton.js'
// import { theme } from '../core/theme'

// helper function imports
import { emailValidator } from './LoginHelpers/emailValidator.js'
import { passwordValidator } from './LoginHelpers/passwordValidator.js'
import { nameValidator } from './LoginHelpers/nameValidator.js'
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState({ value: '', error: '' })
  const [lastName, setLastName] = useState({ value: '', error: '' })
  const [phoneNumber, setPhoneNumber] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [DOB, setDOB] = useState({ value: '' })

  const onSignUpPressed = () => {
    const firstNameError = nameValidator(firstName.value)
    const lastNameError = nameValidator(lastName.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    setDOB({ ...DOB })

    if (emailError || passwordError || firstNameError || lastNameError) {
      setFirstName({ ...firstName, error: firstNameError })
      setLastName({ ...lastName, error: lastNameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],
    })
  }

  return (
    <ScrollView style={{ flex: 1, width: "100%", height: "100%" }}>
      <SafeAreaView />
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="First name"
          returnKeyType="next"
          value={firstName.value}
          onChangeText={(text) => setFirstName({ value: text, error: '' })}
          error={!!firstName.error}
          errorText={firstName.error}
        />
        <TextInput
          label="Last name"
          returnKeyType="next"
          value={lastName.value}
          onChangeText={(text) => setLastName({ value: text, error: '' })}
          error={!!lastName.error}
          errorText={lastName.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <TextInput
          label="Phone number"
          returnKeyType="next"
          keyboardType='numeric'
          value={phoneNumber.value}
          onChangeText={(text) => setPhoneNumber({ value: text, error: '' })}
        // error={!!phoneNumber.error}
        // errorText={phoneNumber.error}
        />
        <TextInput
          // currently no validation for DOB - needs implementation
          label="Date of Birth YYYY-MM-DD"
          returnKeyType="next"
          keyboardType='numeric'
          value={phoneNumber.value}
          onChangeText={(text) => setPhoneNumber({ value: text, error: '' })}
        // error={!!phoneNumber.error}
        // errorText={phoneNumber.error}
        />
        <TextInput
          label="Qualification"
          returnKeyType="next"
        // possibly use this: https://www.npmjs.com/package/react-native-paper-dropdown
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontFamily: 'OpenSans_700Bold'
  },
  text: {
    fontFamily: 'OpenSans_400Regular'
  },
})