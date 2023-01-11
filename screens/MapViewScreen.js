import React, { useState, useRef } from 'react';

export default function Map({children}) {
  const [region, setRegion] = useState(initialRegion);
  const [markerRegion, setMarkerRegion] = useState(initialMarkerRegion);
  const [triggerReport, setTriggerReport] = useState(false);
  const mapRef = useRef(null);

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
          setTimeout(() => {
            if (triggerReport) {
              // navigation.navigate("ToReportScreen")
              setModalVisible(true)
            }
          }, 500)
        }
        }
        onMarkerPress={(e) => console.log("Marker is pressed")}
      >
        {children}
      </MapView>
  )
}