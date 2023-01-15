import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from "react-native"
import { Avatar, Card, IconButton, Text, Chip, DefaultTheme } from 'react-native-paper';
import { getTimeElapsed } from '../../../shared/helpers/timeCalculator';
import { lightColor, PaperThemeColorsLight } from '../../../assets/ColorPalette';

export const SLIDER_WIDTH = Dimensions.get('window').width - 50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export const UserReportCard = ({ item, index }) => {
  let time = getTimeElapsed(item.createdAt)

  const ChipTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      primary: lightColor.otherGold[400]
    }
  }

  const IconTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      primary: lightColor.lapizLazuli[300]
    }
  }

  const ContrastTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      onSurfaceVariant: lightColor.otherGold[400]
    }
  }

  return (
    <Card
      style={styles.container}
      key={index}
    >
      <Card.Title
        title={item.reportCategory}
        titleVariant='headlineSmall'
        // FIX THIS
        left={(props) => <Avatar.Icon {...props} icon="mine" 
        theme={IconTheme}
        />}
      />
      {/* MAKE SURE REPORT CATEGORY FONT IS CONSISTENT */}
      <Card.Content>
        <Chip
          style={styles.chip} icon="alert-decagram"
          theme={ChipTheme}
        >
          STATUS: {item.statusCategory}
        </Chip>
        <Chip
          icon="map-marker-alert-outline" style={styles.chip}
          theme={ChipTheme}
        >
          LATITUDE: {item.latitude}
        </Chip>
        <Chip
          icon="map-marker-alert-outline" style={styles.chip}
          theme={ChipTheme}
        >
          LONGITUDE: {item.longitude}
        </Chip>
        <Chip
          style={styles.chip}
          icon="information"
          theme={ChipTheme}
        >
          REPORT ID: {item.id}
        </Chip>
        <Chip
          style={styles.chip}
          icon="radar"
          theme={ChipTheme}
        >
          REPORTED AREA: {item.radius}m
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