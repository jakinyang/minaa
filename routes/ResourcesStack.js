// Imports
import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

// Components Screens
import ResourceIndex from '../screens/Resources/ResourceIndexScreen';
import ResourceCard from '../screens/Resources/ResourceCard';

// Mock Data
import { mockArticleData } from '../screens/mock_data/MockArticleData';

const Stack = createStackNavigator();

export default function ResourceStack() {
  const articles = mockArticleData;
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
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
        name={`ArticleOne`}
        component={ResourceArticleOne}
        options={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>

  );
}