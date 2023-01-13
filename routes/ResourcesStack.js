// Imports
import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

// Components Screens
import ResourceIndex from '../screens/Resources/ResourceIndexScreen';
import ResourceCard from '../screens/Resources/ResourceCard';
import ResourceArticleOne from '../screens/Resources/ResourceArticleOne';

const Stack = createStackNavigator();

export default function ResourceStack() {
  return (
    <Stack.Navigator
      initialRouteName="ResourceIndex"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ResourceIndex"
        component={ResourceIndex}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={'ResourceArticleOne'}
        component={ResourceArticleOne}
        options={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>

  );
}