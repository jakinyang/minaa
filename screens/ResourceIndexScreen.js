// Imports
import * as React from 'react';
import { View, Button, Text } from 'react-native';

// Main Home Screen Component
export default function ResourceIndexScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* 
        Resource Cards
          - Three cards
            - Takes you to the given resouce associated with that
            - ResourceScreen.js
        Reference:
          - https://callstack.github.io/react-native-paper/card.html
      */}
      <Text>Resource Index Screen</Text>
      <Button
        title="Go to Resource Index"
        onPress={() => navigation.navigate('ResourceIndex')}
      />
      <Button
        title="Go to Profile Tab"
        onPress={() => navigation.navigate('ProfileTab')}
      />
    </View>
  );
}