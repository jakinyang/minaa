import React, { useState, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, tooltip } from 'react-native-maps';


export default function Map({ children, setTempMarker, mapRef, setTriggerReport,tempMarker, triggerReport, setModalVisible, newReport, newPin, setNewPin }) {
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
        setTempMarker(e.nativeEvent.coordinate);
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

     {/* {!newPin ? (<Marker
        draggable
        coordinate={tempMarker}
        onDragEnd={
          (e) => {
            setMarkerRegion({ ...markerRegion, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
            setTimeout(() => {
              if (triggerReport) {
                // navigation.navigate("ToReportScreen")
                setModalVisible(true)
              }
            }, 500)
          }
        }
      >
      </Marker>) : setNewPin(false)} */}
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