// RN Imports
import * as React from 'react';
import { TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stack Imports: Map Stack for map "homescreen" & Login Stack for login screen
import MapStack from './MapStack';
import LoginStack from './LoginStack';

const Drawer = createDrawerNavigator();

export default function HomeStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MapStack} 

        options={{
          title: 'Home',
          cardStyle: {
            ...TransitionPresets.ModalSlideFromBottomIOS
          }
        }}

        />
      <Drawer.Screen
        name="Login"
        component={LoginStack}
        options={{
          title: 'Login',
          cardStyle: {
            ...TransitionPresets.ModalSlideFromBottomIOS
          },
        }}
      />
    </Drawer.Navigator>
  );
}