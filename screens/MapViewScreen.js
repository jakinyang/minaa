import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, tooltip } from 'react-native-maps';
import { set } from 'react-native-reanimated';
import mockReportData from './MockReportData.js';


export default function Map({ children, mapRef, setTriggerReport, tempPinData, setTempPinData, pinData, setPinData, newPin, setNewPin }) {
  const [region, setRegion] = useState(initialRegion);
  const [markerRegion, setMarkerRegion] = useState(initialMarkerRegion);
  //Test
  // const ref = useRef();
  // useEffect(() => {
  //   ref.current = pinData
  // }, [ref])
  
  //Helper Function
//   function customSaveStateHook(value) 
// {   const ref = useRef(value);    
//     const updateState = (newState) => 
//     {
//      ref.current = newState;   
//     }    
//     return [ref, updateState]; 
// }

// ...

// const [savedData, setSavedData] = customSaveStateHook(null)

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
      onLongPress={(e) => {
        setTriggerReport(true)
        setTempPinData({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
        console.log(`latitude: ${e.nativeEvent.coordinate.latitude}, longitude: ${e.nativeEvent.coordinate.longitude}`) 
        console.log("tem pin data: ", tempPinData);
        const newReport = {
          id: 9999,
          coords:{
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          },
          img: "",
          status: "********",
          title: "TEST PIN",
          content: "THIS IS THE TEST PIN DATA" 
        };  
          setPinData([...pinData, newReport]);
          console.log("long pressed, pin data:", pinData);
      }
      }
      
    >
      {
       children
       }
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