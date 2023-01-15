import { Raleway_400Regular, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Card, Chip, DefaultTheme } from 'react-native-paper'
import { formatDate } from '../../shared/helpers/dateFormatter';
import { PaperThemeColorsLight, lightColor } from '../../assets/ColorPalette';

export const SLIDER_WIDTH = Dimensions.get('window').width - 50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export const CarouselCardItem = ({ item, index }) => {

  const ChipTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      primary: lightColor.otherGold[400]
    }
  }
  const time = "Reported: " + formatDate(item.createdAt)
  return (
    <View style={styles.container} key={index}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title} >
            {time}
          </Text>
          <Text style={styles.title} >
            {(item.distance / 1000).toFixed(2)} km away
          </Text>
          <View style={styles.chipContainer}>
            <Chip
              icon="alert-decagram"
              theme={ChipTheme}
              textStyle={styles.text}
            >{item.statusCategory}</Chip>
            <Chip
              icon="smoke-detector-variant-alert"
              theme={ChipTheme}
              textStyle={styles.text}
            >{item.reportCategory}</Chip>
          </View>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    margin: 5,
  },
  chipContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  text: {
    fontFamily: 'OpenSans_600SemiBold',
  },
  title: {
    fontFamily: 'Montserrat_400Regular',
    marginVertical: 2,
  }
})