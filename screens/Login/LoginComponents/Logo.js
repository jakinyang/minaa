// RN imports
import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

// source={require('/assets/landmine1.jpg')}