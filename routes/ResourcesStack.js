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
      {/* <Stack.Screen
        name={'Article1'}
        component={ArticleCard}
        options={{
          headerTransparent: true,
        }}
        initialParams={{ 
          titleText: articleData[0].titleText,
          subTitleText: articleData[0].subTitleText,
          bodyText1: articleData[0].bodyText1,
          bodyText2: articleData[0].bodyText2,
          bodyText3: articleData[0].bodyText3,
          imageSource: articleData[0].imageSource,
        }}
      />
      <Stack.Screen
        name={'Article2'}
        component={ArticleCard}
        options={{
          headerTransparent: true,
        }}
        initialParams={{ 
          titleText: articleData[1].titleText,
          subTitleText: articleData[1].subTitleText,
          bodyText1: articleData[1].bodyText1,
          bodyText2: articleData[1].bodyText2,
          bodyText3: articleData[1].bodyText3,
          imageSource: articleData[1].imageSource,
        }}
      />
      <Stack.Screen
        name={'Article3'}
        component={ArticleCard}
        options={{
          headerTransparent: true,
        }}
        initialParams={{ 
          titleText: articleData[2].titleText,
          subTitleText: articleData[2].subTitleText,
          bodyText1: articleData[2].bodyText1,
          bodyText2: articleData[2].bodyText2,
          bodyText3: articleData[2].bodyText3,
          imageSource: articleData[2].imageSource,
        }}
      />
      <Stack.Screen
        name={'Article4'}
        component={ArticleCard}
        options={{
          headerTransparent: true,
        }}
        initialParams={{ 
          titleText: articleData[3].titleText,
          subTitleText: articleData[3].subTitleText,
          bodyText1: articleData[3].bodyText1,
          bodyText2: articleData[3].bodyText2,
          bodyText3: articleData[3].bodyText3,
          imageSource: articleData[3].imageSource,
        }}
      />
      <Stack.Screen
        name={'Article5'}
        component={ArticleCard}
        options={{
          headerTransparent: true,
        }}
        initialParams={{ 
          titleText: articleData[4].titleText,
          subTitleText: articleData[4].subTitleText,
          bodyText1: articleData[4].bodyText1,
          bodyText2: articleData[4].bodyText2,
          bodyText3: articleData[4].bodyText3,
          imageSource: articleData[4].imageSource,
        }}
      /> */}
    </Stack.Navigator>

  );
}