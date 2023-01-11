// Imports
import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

// Components Screens
import ResourceIndex from '../screens/resources/ResourceIndexScreen';
import ResourceCard from '../screens/resources/ResourceCard';

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
      {
        articles.map(({ id, imageSource, titleText, bodyText }, index) => {
          return (
            <Stack.Screen
              key={index}
              name={`Article${id}`}
              component={ResourceCard}
              initialParams={{
                id,
                imageSource,
                titleText,
                bodyText,
              }}
            // options={{
            //   headerShown: false,
            // }}
            />
          )
        })
      }
    </Stack.Navigator>

  );
}