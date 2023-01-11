import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import ProfileTab from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Profile"
        component={ProfileTab}
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