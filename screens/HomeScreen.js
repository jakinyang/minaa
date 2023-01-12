// Imports
import React, { useState, useRef, useMemo, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

// Component Screens
import Map from "./MapViewScreen";
import MapPins from "./MapPins";
import ResourceIndex from "./ResourceIndexScreen";
import CarouselCards from "./Carousel";
import mockReportData from "./MockReportData.js";
import FabGroup from "./FabGroup";
import BottomSheet from "./BottomSheet";
import DialoguePopup from "./DialoguePopup";

// Main Home Screen Component
export default function HomeScreen({ navigation, route }) {

  console.log("returned new report: ", route.params?.newReport);
  // Map Data
  const initialMarkerRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
  };


  //Helper functions
  function useFreshState(value) {
    console.log("function pindata result:",value);
    const pinData = useRef(value);
    const setPinData = (newState) => {
      pinData.current = newState;
    }
    // console.log("pin data:", pinData);
    return [pinData, setPinData];
  }

  // Map Helpers
  const mapRef = useRef(null);

  // Reset Region for FabGroup button
  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };

  // States for Home Screen

  // Mock User State
  const [userInfo, setUserInfo] = useState({
    id: 1,
    token: "abc123",
  });

  // State for managing new report popup
  const [modalVisible, setModalVisible] = useState(false);

  // State for managing global pin data
  const [pinData, setPinData] = useFreshState(mockReportData);

  // State for managing new pin data
  const [tempCoords, setTempCoords] = useFreshState()

  // Use Effect for refreshing on new pin placed (i.e. MapViewScreen onLongPress())
  useEffect(()=> {
    console.log("test pin data",pinData);
  }, [pinData])

  // State for managinng the map view region
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%"], []);
  const openModal = () => {
    bottomSheetModalRef.current.present();
  };

  return (
    <View style={styles.container}>
      <Map
        mapRef={mapRef}
        userInfo={userInfo}
        pinData={pinData.current}
        setPinData={setPinData}
        tempCoords={tempCoords}
        setTempCoords={setTempCoords}
        region={region}
        setRegion={setRegion}
        setModalVisible={setModalVisible}
      >
        <MapPins
          navigation={navigation}
          route={route}
          pinData={pinData.current}
          setModalVisible={setModalVisible}
        />
      </Map>
      <DialoguePopup
        navigation={navigation}
        userInfo={userInfo}
        pinData={pinData.current}
        setPinData={setPinData}
        tempCoords={tempCoords.current}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* <CarouselCards /> */}
      {/* <FabGroup
        navigation={navigation}
        openModal={openModal}
        resetRegionHandler={resetRegionHandler}
      /> */}
      <BottomSheet
        navigation={navigation}
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});