//Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Stack Imports
import MapStack from './MapStack';
import LoginStack from './LoginStack';
import ResourceStack from './ResourcesStack';
import ProfileStack from './ProfileStack';

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={styles.navigator}
      backBehavior="initialRoute"
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={MapStack}
        headerShown={false}
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
        headerShown={false}
        options={{
          tabBarLabel: 'Updates',
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
  navigator: {
    backgroundColor: '#694fad',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
