import * as React from 'react';
import { View, Button, Text } from 'react-native';


export default function ReportDetailScreen({navigation, route}) {
  console.log(route.params);
  return (
    <View>
      <Text>This is a reports detail screen</Text>
      <Text>Content: {route.params.content}</Text>
      <Text>lat: {route.params.coords.latitude}</Text>
      <Text>lon: {route.params.coords.longitude}</Text>
    </View>
  )
}