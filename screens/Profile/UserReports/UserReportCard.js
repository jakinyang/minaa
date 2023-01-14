import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from "react-native"
import { Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';
import { getTimeElapsed } from '../../../shared/helpers/timeCalculator';

export const SLIDER_WIDTH = Dimensions.get('window').width - 50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export const UserReportCard = ({ item, index }) => {
  let time = getTimeElapsed(item.createdAt)

  return (
    <Card
      style={styles.container}
      key={index}
    >
      <Card.Title
        title={item.reportCategory}
        left={(props) => <Avatar.Icon {...props} icon="mine" />}
      // right={(props) => <IconButton {...props} icon={saved ? "bookmark" : "bookmark-outline"} onPress={() => { setSaved(!saved) }} />}
      />
      <Card.Content>
        <Chip
          style={styles.chip} icon="alert-decagram"
        >
          Status: {item.statusCategory}
        </Chip>
        <Chip
          icon="map-marker-alert-outline" style={styles.chip}
        >
          Latitude: {item.latitude}
        </Chip>
        <Chip
          icon="map-marker-alert-outline" style={styles.chip}
        >
          Longitude: {item.longitude}
        </Chip>
        <Chip
          style={styles.chip}
          icon="information"
        >
          Report ID: {item.id}
        </Chip>
        <Chip
          style={styles.chip}
          icon="radar"
        >
          Reported Area: {item.radius}m
        </Chip>
        <Text style={styles.description}>
          Reported: {time} ago
        </Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: ITEM_WIDTH,
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 9,
  },
  image: {
    width: ITEM_WIDTH,
    height: 100,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  body: {
    color: "#222",
    fontSize: 18,
    height: 150,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  chip: {
    marginBottom: 10,
  },
})