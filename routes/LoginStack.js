// RN imports
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// screens imports from Login folder
import StartScreen from '../screens/Login/StartScreen'
import LoginScreen from '../screens/Login/LoginScreen'
import RegisterScreen from '../screens/Login/RegisterScreen'
import Dashboard from '../screens/Login/Dashboard'
import ResetPasswordScreen from '../screens/Login/ResetPasswordScreen'

const Stack = createStackNavigator()

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        // setUser={setUser}
        // setUserSelected={setUserSelected}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  )
}