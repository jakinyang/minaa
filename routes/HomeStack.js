//Imports
import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Stack Imports
import MapStack from './MapStack';
import LoginStack from './LoginStack';
import ResourceStack from './ResourcesStack';
import ProfileStack from './ProfileStack';

import { lightColor, darkColor } from '../assets/ColorPalette';

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: lightColor.lapizLazuli[400] }}
      backBehavior="initialRoute"
      labeled={false}
      activeColor={lightColor.otherGold[400]}
      inactiveColor={lightColor.blackOff[900]}
    >
      <Tab.Screen
        name="Home"
        component={MapStack}
        options={{
          tabBarIconStyle: {
            backgroundColor: lightColor.bluePrimary[900]
          },
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="map" color={color} backgroundColor={lightColor.bluePrimary[900]} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginStack}
        headerShown={false}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="check" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourceStack}
        headerShown={false}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alert" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        headerShown={false}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
