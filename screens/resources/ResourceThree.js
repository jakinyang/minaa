// Imports
import * as React from 'react';
import { View, Button, Text } from 'react-native';

export default function ResourceThree({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightgreen", height: "90%" }}>
      <Text>Resource 3</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};