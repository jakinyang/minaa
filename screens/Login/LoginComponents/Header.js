// RN imports
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
// Component and theme imports
// import { theme } from '../core/theme'

export default function Header(props) {

  // console.log("login componenets header props: ", props);

  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    // color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})