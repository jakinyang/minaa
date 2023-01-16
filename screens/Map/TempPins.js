//It will be rendered when onLongPress, when submit is clicked on newReportScreen, it will get cancelled

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

export default function TempPins({ tempCoords }) {
  console.log("tempPin received tempCoords",tempCoords);
  return (
    <Marker
      coordinate={{latitude: tempCoords.latitude, longitude: tempCoords.longitude}}
      image={require("../../assets/pinRed200.png")}
    >
    </Marker>
  )
}