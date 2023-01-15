// RN imports
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { PreferencesContext } from '../../../shared/preferencesContext'

export default function Header({ font, children }) {
  const { isThemeDark } = useContext(PreferencesContext);
  
  return (
    <Text
      style={ isThemeDark ?  styles.headerDark : styles.header }
    >
      {children}
    </Text>)
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Raleway_600SemiBold',
    color: '#000000',
    fontSize: 40,
    paddingVertical: 12,
  },
  headerDark: {
    fontFamily: 'Raleway_600SemiBold',
    color: "#cfab58",
    fontSize: 40,
    paddingVertical: 12,
  }
})

// let headerStyle = isThemeDark 
//   ? {
//     fontFamily: 'Raleway_600SemiBold',
//     color: "#cfab58",
//     fontSize: 40,
//     paddingVertical: 12,
//   } 
//   : {
//     fontFamily: 'Raleway_600SemiBold',
//     color: '#000000',
//     fontSize: 40,
//     paddingVertical: 12,
//   };