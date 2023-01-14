import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { Chip, Card, Text } from 'react-native-paper';
import { getTimeElapsed } from '../../shared/helpers/timeCalculator';
import { formatDate } from '../../shared/helpers/dateFormatter';

export default function MapPins({
  navigation,
  pinData,
}) {

  return (pinData?.map((item, i) => {
    const time = "Reported: " + formatDate(item.createdAt)
    return (
      <Marker
        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
        key={i}
      >
        <Callout
          tooltip
          onPress={() => { navigation.navigate('ReportDetailScreen', item) }}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="labelMedium" >
                {time}
              </Text>
              <View style={styles.chipContainer}>
              <Chip icon="information">{item.statusCategory}</Chip>
              <Chip icon="information">{item.reportCategory}</Chip>
              </View>
            </Card.Content>
          </Card>
        </Callout>
      </Marker>
    )
  }))
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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