import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function BackButton({ goBack }) {
  return (
    <IconButton
      icon="arrow-left"
      size={30}
      style={styles.container}
      onPress={goBack}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 4,
  },
})