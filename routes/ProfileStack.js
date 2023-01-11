import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HistoryScreen from '../screens/Profile/HistoryScreen';
import SettingsScreen from '../screens/Profile/SettingsScreen';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          cardStyle: {
            ...TransitionPresets.SlideFromRightIOS
          },
        }}
      />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          cardStyle: {
            ...TransitionPresets.SlideFromRightIOS
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          cardStyle: {
            ...TransitionPresets.SlideFromRightIOS
          },
        }}
      />
    </Stack.Navigator>
  );
}