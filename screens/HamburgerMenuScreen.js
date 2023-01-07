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
            - styleing
            - change color to match minaa theme
            - Takes you to the given resouce associated with that drawer
              - login.js // logout.js < -- Requires if else logic to display one or the other
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
            style={{ backgroundColor: '#64ffda' }}
            label="Login/Logout"
            onPress={() => alert('clicked on login/logout')}
          />
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            label="Reports"
            onPress={() => alert('clicked on reports')}
          />
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            label="Resources"
            onPress={() => alert('clicked on resources')}
          />
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            label="Settings"
            onPress={() => alert('clicked on settings')}
          />
          <Drawer.Item
            style={{ backgroundColor: '#64ffda' }}
            label="User Profile"
            onPress={() => alert('clicked on profile')}
          />
        </Drawer.Section>
    </View>
  );
}