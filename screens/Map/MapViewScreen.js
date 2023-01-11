import React, { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Map({ children, setTempMarker, mapRef, setTriggerReport, markerRegion, setMarkerRegion, initialRegion }) {
  const [region, setRegion] = useState(initialRegion);

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      provider={PROVIDER_GOOGLE}
      onRegionChangeComplete={(region) => setRegion(region)}
      ref={mapRef}
      onPress={(e) => setTempMarker(e.nativeEvent.coordinate)}
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