// RN Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MD3Colors } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Stack Imports: Map Stack for map "homescreen" & Login Stack for login screen
import MapStack from './MapStack';
import LoginStack from './LoginStack';
import ProfileTab from '../screens/ProfileScreen';
import ResourceIndex from '../screens/ResourceIndexScreen';
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={styles.navigator}
      backBehavior="initialRoute"
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={MapStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen
        name="Login"
        component={LoginStack}
        options={{
          title: 'Login',
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ResourceIndex"
        component={ResourceIndex}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alert" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
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
  navigator: {

  },
  screen: {

  },
})
