import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, tooltip } from 'react-native-maps';
import { set } from 'react-native-reanimated';
import mockReportData from './MockReportData.js';


export default function Map({ children, mapRef, setTriggerReport, tempPinData, setTempPinData, pinData, setPinData, newPin, setNewPin, setModalVisible, setTempCoords }) {
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
        setTempCoords({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
        // console.log(`latitude: ${e.nativeEvent.coordinate.latitude}, longitude: ${e.nativeEvent.coordinate.longitude}`) 
        // console.log("tem pin data: ", tempPinData);
        const tempReport = {
          id: null,
          coords:{
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          },
          img: null,
          status: null,
          title:null,
          content:null
        };  
          setPinData([...pinData, tempReport]);
          console.log("long pressed, pin data:", pinData);
          console.log(" temp data", tempPinData);
          setModalVisible(true)
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