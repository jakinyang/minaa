import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { Chip, Card } from 'react-native-paper';
import { faker } from '@faker-js/faker';

export default function MapPins({ 
  navigation, 
  pinData, 
}) {

return (pinData.map((item, i) => {
  return (
<<<<<<< HEAD:screens/MapPins.js
    <Marker
      coordinate={item.coords}
      key={i}
    >
      <Callout
        tooltip
        onPress={() => { console.log("Callout pressed"); navigation.navigate('ReportDetailScreen', item) }}
      >
        <View>
          <Card style={styles.card}>
            <Card.Cover source={{uri: faker.image.nature()}} />
            <Card.Title title={item.title} />
            <Card.Content>
              <Chip icon="information">{item.status}</Chip>
            </Card.Content>
          </Card>
        </View>
      </Callout>
    </Marker>
=======
    mockReportData.map((item, i) => {
      return (
        <Marker
          coordinate={{
            longitude: item.coords.longitude ? item.coords.longitude : 0,
            latitude: item.coords.latitude ? item.coords.latitude : 0
          }}
          key={item.id}
        >
          <Callout
            tooltip
            onPress={() => { console.log("Callout pressed"); navigation.navigate('ReportDetailScreen', item) }}
          >
            <View>
              <Card style={styles.card}>
                <Card.Cover source={{uri: item.img}} />
                <Card.Title title={item.title} />
                <Card.Content>
                  <Chip icon="information">{item.status}</Chip>
                </Card.Content>
              </Card>
            </View>
          </Callout>
        </Marker>
      )
    })
>>>>>>> main:screens/Map/MapPins.js
  )
}))
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  chip: {
    margin: 4,
  },
  card: {
    margin: 4,
  }
})