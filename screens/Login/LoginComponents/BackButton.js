import React from 'react'
import { IconButton, Text, View } from 'react-native-paper'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function BackButton({ goBack }) {
  return (
    <View
      style={styles.container}
    >
      <IconButton
        icon="arrow-left"
        size={30}
        onPress={goBack}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 4,
  },
})