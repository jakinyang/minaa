import React, { useState, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, tooltip } from 'react-native-maps';
import mockReportData from './MockReportData.js';


export default function Map({ children, mapRef, setTriggerReport, tempPinData, setTempPinData, pinData, setPinData }) {
  const [region, setRegion] = useState(initialRegion);
  const [markerRegion, setMarkerRegion] = useState(initialMarkerRegion);


  //Helper Function

  // Mock Data
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const initialMarkerRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      provider={PROVIDER_GOOGLE}
      onRegionChangeComplete={(region) => setRegion(region)}
      ref={mapRef}
      onPress={(e) => {
        // setTempMarker(e.nativeEvent.coordinate);
        console.log(e.nativeEvent.coordinate);

        setTempPinData({...tempPinData, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})
        console.log("on click temp pin data: ",tempPinData);
        const newReport = {
          id: 9999,
          coords:{
            latitude: tempPinData.latitude,
            longitude: tempPinData.longitude
          },
          img: "",
          status: "Reviewed",
          title: "report n",
          content: "report n content  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quo aperiam beatae culpa recusandae obcaecati eligendi sed ex corporis fugit similique perspiciatis, accusantium quia soluta rerum itaque, quaerat quibusdam nulla! " 
        };

        pinData.push(newReport);
        setPinData(pinData)
        console.log(" updated temp  pin data: ", pinData);
        // setNewPin(!newPin)
      }
    }
      onLongPress={(e) => {
        console.log(e.nativeEvent.coordinate);
        setMarkerRegion({ ...markerRegion, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
        setTriggerReport(true)
      }
      }
      onMarkerPress={(e) => console.log("Marker is pressed")}
    >
      {children}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});