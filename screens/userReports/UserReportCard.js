import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width -50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export const UserReportCardItem = ({ item, index }) => {
  // returns a carousel card item in UserReportCards.js
  console.log("user report card item: ", item);
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imageSource }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.titleText}</Text>
      <Text style={styles.body}>{item.bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 100,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})