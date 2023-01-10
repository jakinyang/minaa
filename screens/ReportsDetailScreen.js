import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';


export default function ReportDetailScreen({navigation, route}) {
  console.log(route.params);
  return (
    <View>
      <Card>
        <Card.Title 
        title={route.params.title}
        left={(props) => <Avatar.Icon {...props} icon="mail" />}
        right={(props) => <IconButton {...props} icon="heart" onPress={() => {console.log("use me for save button")}} />}
        />
      <Card.Content>
      <Chip icon="information">{route.params.status}</Chip>
      <Text variant='bodyMedium'>Content: {route.params.content}</Text>

      </Card.Content>
      <Text>lat: {route.params.coords.latitude}</Text>
      <Text>lon: {route.params.coords.longitude}</Text>

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
 
})