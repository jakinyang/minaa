// RN imports
import React, { useEffect, useState, useContext } from 'react'
import { TouchableOpacity, StyleSheet, View, SafeAreaView } from 'react-native'
import { Text } from 'react-native-paper'

//backend imports
import { useLazyQuery } from '@apollo/client';
import { CURRENT_USER } from '../../src/Queries/GetCurrentUser.js'

// Component, route and theme imports
import Background from './LoginComponents/Background.js'
import Logo from './LoginComponents/Logo.js'
import Header from './LoginComponents/Header.js'
import Button from './LoginComponents/Button.js'
import TextInput from './LoginComponents/TextInput.js'
import BackButton from './LoginComponents/BackButton.js'

// Helper function imports
import { emailValidator } from './LoginHelpers/emailValidator.js'
import { passwordValidator } from './LoginHelpers/passwordValidator.js'
import { UserContext } from '../../shared/userContext.js';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const { user, setUser} = useContext(UserContext)

    // "Janessa.Witting@gmail.com" "2bRUK1aPe0vj2wf"
  const[getCurrentUser, { data, loading, error }] = useLazyQuery(CURRENT_USER, {
    variables: {"search": {
      "email": email.value
    }},
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      console.log('oncompleted triggered');
      if (data.usersSearch[0].email !== email.value || data.usersSearch[0].password !== password.value) {
        alert("Invalid email or password, please try again")
        return
      }
  
      alert("Login successful")
      setUser(data.usersSearch[0].id)

      navigation.navigate('Home', {
        screen: 'HomeScreen',
      })
    }
  })
  if (error) console.log(`Error ${error.message}`);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    getCurrentUser()
  }

  return (
    <>
      <SafeAreaView />
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Welcome back.</Header>
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
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    fontFamily: 'OpenSans_400Regular'
  },
  link: {
    fontFamily: 'OpenSans_700Bold'
  },
  text: {
    fontFamily: 'OpenSans_400Regular'
  }
})