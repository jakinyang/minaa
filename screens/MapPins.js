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