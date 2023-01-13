// Imports
import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

// Data
import { articleData } from '../screens/Resources/ResourceArticlesData';
// Components Screens
import ResourceIndex from '../screens/Resources/ResourceIndexScreen';
import ResourceArticleOne from '../screens/Resources/ResourceArticleOne';
import ArticleCard from '../screens/Resources/ArticleCard';

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
      {
        articleData.map(({ id, imageSource, titleText, subTitleText, bodyText1, bodyText2, bodyText3 }, index) => {
          return (
            <Stack.Screen
              key={index}
              name={`Article${id}`}
              component={ArticleCard}
              initialParams={{
                titleText: titleText,
                subTitleText: subTitleText,
                bodyText1: bodyText1,
                bodyText2: bodyText2,
                bodyText3: bodyText3,
                imageSource: imageSource,
              }}
            />
          )
        })
      }
    </Stack.Navigator>

  );
}