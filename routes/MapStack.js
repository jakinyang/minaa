import * as React from 'react';
import { View, Button, Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileTab from '../screens/ProfileScreen';
import ResourceIndex from '../screens/ResourceIndexScreen';
import ResourceOne from '../screens/resources/ResourceOne';
import ResourceTwo from '../screens/resources/ResourceTwo';
import ResourceThree from '../screens/resources/ResourceThree';
import ReportDetailScreen from '../screens/ReportDetailScreen';
import NewReportScreen from '../screens/NewReportScreen';

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Map"
        component={HomeScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          headerShown: false,
          cardStyle: {
            ...TransitionPresets.SlideFromRightIOS
          },
        }}
      />
      <Stack.Screen 
           name='NewReportScreen'
           component={NewReportScreen}
           options={{
            title: "New Report",
            cardStyle: {
              ...TransitionPresets.ModalSlideFromBottomIOS
            },
           }}
         />
   
         <Stack.Screen 
           name='ReportDetailScreen'
           component={ReportDetailScreen}
           options={{
            title: "ReportDetailScreen",
            cardStyle: {
              ...TransitionPresets.ModalSlideFromBottomIOS
            },
           }}
         />
      <Stack.Screen
        name="ResourceOne"
        component={ResourceOne}
        options={
          {
            cardStyle: {
              alignSelf: 'center',
              height: "90%",
              width: "90%",
              top: "10%",
              borderRadius: 20
            },
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name="ResourceTwo"
        component={ResourceTwo}
        options={
          {
            cardStyle: {
              alignSelf: 'center',
              height: "90%",
              width: "90%",
              top: "10%",
              borderRadius: 20
            },
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name="ResourceThree"
        component={ResourceThree}
        options={
          {
            cardStyle: {
              alignSelf: 'center',
              height: "90%",
              width: "90%",
              top: "10%",
              borderRadius: 20
            },
            headerShown: false
          }
        }
      />
    </Stack.Navigator>

  );
}