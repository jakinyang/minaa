import React from "react";
import { StyleSheet } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
} from "react-native-maps";

export default function Map({
  children,
  mapRef,
  userInfo,
  setTempCoords,
  region,
  setRegion,
  setModalVisible,
}) {

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      provider={PROVIDER_GOOGLE}
      onRegionChangeComplete={(region) => setRegion(region)}
      ref={mapRef}
      onLongPress={(e) => {
        const longitude = Number((e.nativeEvent.coordinate.longitude).toFixed(6));
        const latitude = Number((e.nativeEvent.coordinate.latitude).toFixed(6));
        console.log(`Long Press Event Coordinate Data => latitude: ${latitude}, longitude: ${longitude}`)
        setTempCoords({
          latitude,
          longitude,
        });
        const tempReport = {
          id: null,
          latitude: latitude,
          longitude: longitude,
          description: null,
          radius: null,
          statusCategory: null,
          reportCategory: null,
          imageUrl: null,
          userId: userInfo.id
        };
        setModalVisible(true);
      }}
    >
      {children}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
});