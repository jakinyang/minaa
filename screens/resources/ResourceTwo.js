// Imports
import * as React from 'react';
import { View, Button, Text } from 'react-native';

export default function ResourceTwo({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightblue", height: "90%" }}>
      <Text>Resource 2</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
