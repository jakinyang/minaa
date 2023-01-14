import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';


export default function ReportDetailScreen({ navigation, route }) {
  // console.log(route.params);
  return (
    <View>
      <Card>
        <Card.Title
          title={route.params.reportCategory}
          left={(props) => <Avatar.Icon {...props} icon="mail" />}
          right={(props) => <IconButton {...props} icon="heart" onPress={() => { console.log("use me for save button") }} />}
        />
        <Card.Content>
          <Chip icon="information">{route.params.statusCategory}</Chip>
          <Chip icon="information" style={styles.chipLocation}>lat: {route.params.latitude} lon: {route.params.longitude}</Chip>
          <Chip icon="information">
            report id: {route.params.id}
          </Chip>
          <Text variant='bodyMedium'>Description: {route.params.description} </Text>

        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  chipLocation: {
    marginTop: 4,
  }
})