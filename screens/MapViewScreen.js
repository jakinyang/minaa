import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Callout,
  tooltip,
} from "react-native-maps";
import { set } from "react-native-reanimated";
import mockReportData from "./MockReportData.js";

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
        console.log(`Long Press Event Coordinate Data => latitude: ${e.nativeEvent.coordinate.latitude}, longitude: ${e.nativeEvent.coordinate.longitude}`)
        setTempCoords({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        });
        console.log("Long press event transferred => tempCoords.current: ", tempCoords.current);
        const tempReport = {
          id: null,
          coords: {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          },
          img: null,
          reportStatus: null,
          reportCategory: null,
          description: null,
          userId: userInfo.id
        };
        setPinData([...pinData, tempReport]);
        console.log("New pinData status:", pinData);
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
