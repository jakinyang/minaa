import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTimeElapsed } from '../../shared/helpers/timeCalculator';

export default function ReportDetailScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  let time = getTimeElapsed(route.params.createdAt)
  const [saved, setSaved] = useState(false)
  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <Card>
        <Card.Title
          title={route.params.reportCategory}
          left={(props) => <Avatar.Icon {...props} icon="mine" />}
          right={(props) => <IconButton {...props} icon={saved ? "bookmark" : "bookmark-outline"} onPress={() => { setSaved(!saved) }} />}
        />
        <Card.Content>
          <Chip
            style={styles.chip} icon="alert-decagram"
          >
            Report Status: {route.params.statusCategory}
          </Chip>
          <Chip
            icon="map-marker-alert-outline" style={styles.chip}
          >
            Latitude: {route.params.latitude}   Longitude: {route.params.longitude}
          </Chip>
          <View style={styles.chipContainer}>
            <Chip
              style={styles.chip}
              icon="information"
            >
              Report ID: {route.params.id}
            </Chip>
            <Chip
              style={styles.chip}
              icon="radar"
            >
              Reported Area: {route.params.radius}m
            </Chip>
          </View>
          <Text style={styles.description}>
            Reported: {time} ago
          </Text>
          <Text
            style={styles.description}
            variant='bodyLarge'>Notes:</Text>
          <ScrollView>
            <Text
              style={styles.description}
              variant='bodyLarge'
            >
              {route.params.description}
            </Text>
          </ScrollView>

        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  chip: {
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 5,
  }
})