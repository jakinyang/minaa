// RN imports
import React, {useContext} from 'react'
import { Image, StyleSheet } from 'react-native'
import { PreferencesContext } from '../../../shared/preferencesContext'

export default function Logo() {
  const { isThemeDark } = useContext(PreferencesContext);
  return <Image style={ isThemeDark ? styles.imageDark : styles.image }source={require('../../../assets/MinaaLogo1.png')}/>
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  imageDark: {
    tintColor: "#cfab58",
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

// source={require('/assets/landmine1.jpg')}

//login text: yellow
//sing up button: yellow bg, blue text