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
      primary: lightColor.redAccent[500]
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
    <View style={styles.container} key={index}>
      <Card>
        <Card.Title
          title={item.reportCategory}
          titleVariant='headlineSmall'
          titleStyle={styles.title}
          // FIX THIS
          left={(props) => <Avatar.Icon {...props} icon="map-marker-alert-outline"
            theme={IconTheme}
          />}
        />
        <Card.Content>
          <Chip
            style={styles.chip} icon="alert-decagram"
            theme={ChipTheme}
            textStyle={styles.chipText}
          >
            STATUS: {item.statusCategory}
          </Chip>
          <Chip
            icon="map-marker-alert" style={styles.chip}
            theme={ChipTheme}
            textStyle={styles.chipText}
          >
            LATITUDE: {item.latitude}
          </Chip>
          <Chip
            icon="map-marker-alert" style={styles.chip}
            theme={ChipTheme}
            textStyle={styles.chipText}
          >
            LONGITUDE: {item.longitude}
          </Chip>
          {/* <Chip
            style={styles.chip}
            icon="information"
            theme={ChipTheme}
            textStyle={styles.chipText}
          >
            REPORT ID: {item.id}
          </Chip> */}
          <Chip
            style={styles.chip}
            icon="radar"
            theme={ChipTheme}
            textStyle={styles.chipText}
          >
            REPORTED AREA: {item.radius}m
          </Chip>
          <Text style={styles.description}>
            Reported: {time} ago
          </Text>
        </Card.Content>
      </Card>
    </View>
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
  chip: {
    marginBottom: 10,
  },
  chipText: {
    fontFamily: 'OpenSans_600SemiBold',
  },
  title: {
    fontFamily: 'OpenSans_600SemiBold',
  },
  description: {
    fontFamily: 'Montserrat_400Regular',
  }
})