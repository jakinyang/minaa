// Imports
import * as React from 'react';
import { View, Button, Text, Drawer } from 'react-native';

// Main Home Screen Component
export default function HamburgerMenuScreen({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* 
      exists in Drawer section - see reference(1)
        Hamburger menu drawer section
          - five drawer items
            - icon for drawer items see reference (3)

            - Takes you to the given resouce associated with that drawer
              - login.js // logout.js
              - reports.js
              - resources.js
              - settings.js
              - userProfile.js
            - when clicked, close the drawer, then go to resource after brief timeout
        Reference:
        - (1) https://callstack.github.io/react-native-paper/drawer-section.html
        - (2) https://callstack.github.io/react-native-paper/drawer-item.html
        - (3) https://callstack.github.io/react-native-paper/icons.html
      */}
      <Text>Hamburger Menu Screen</Text>
        <Drawer.Section title="Hamburger menu - DEV TITLE">
          <Drawer.Item
            label="Login/Logout  - REQUIRES IF ELSE LOGIC TO DISPLAY ONE OR OTHER"
            onPress={() => alert('clicked on login/logout')}
          />
          <Drawer.Item
            label="Reports"
            onPress={() => alert('clicked on reports')}
          />
          <Drawer.Item
            label="Resources"
            onPress={() => alert('clicked on resources')}
          />
          <Drawer.Item
            label="Settings"
            onPress={() => alert('clicked on settings')}
          />
          <Drawer.Item
            label="User Profile"
            onPress={() => alert('clicked on profile')}
          />
        </Drawer.Section>
    </View>
  );
}