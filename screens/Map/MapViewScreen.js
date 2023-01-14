import React from "react";
import { StyleSheet } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
} from "react-native-maps";

export default function Map({
  children,
  mapRef,
  userInfo,
  pinData,
  setPinData,
  tempCoords,
  setTempCoords,
  region,
  setRegion,
  setModalVisible,
}) {

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
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
        // setPinData([...pinData, tempReport]);
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