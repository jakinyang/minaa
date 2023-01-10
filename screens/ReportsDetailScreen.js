import * as React from 'react';
import { View, Button } from 'react-native';
import {Avatar, Card, IconButton, Text } from 'react-native-paper';


export default function ReportDetailScreen({navigation, route}) {
  console.log(route.params);
  return (
    <View>
      <Card>
        <Card.Title 
        title="Report title"
        left={(props) => <Avatar.Icon {...props} icon="mail" />}
        right={(props) => <IconButton {...props} icon="heart" onPress={() => {console.log("use me for save button")}} />}
        />
      <Card.Content>
      <Text variant='bodyMedium'>Content: {route.params.content}</Text>

      </Card.Content>
      <Text>lat: {route.params.coords.latitude}</Text>
      <Text>lon: {route.params.coords.longitude}</Text>

      </Card>
    </View>
  )
}