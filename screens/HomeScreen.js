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
    console.log("pin data:", pinData);
    return [pinData, setPinData];
  }

  // Map Helpers
  const mapRef = useRef(null);
  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };
  const [triggerReport, setTriggerReport] = useState(false);
  const [tempMarker, setTempMarker] = useState({ longitude: 0, latitude: 0 });
  const [markerRegion, setMarkerRegion] = useState(initialMarkerRegion);
  const [modalVisible, setModalVisible] = useState(false);
  const [pinData, setPinData] = useFreshState(mockReportData);
  const [tempPinData, setTempPinData] = useState({latitude: 0, longitude: 0})
  const [newReport, setNewReport] = useState(mockReportData);
  const [newPin, setNewPin] = useState(false);
  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%"], []);
  const openModal = () => {
    bottomSheetModalRef.current.present();
  };

  useEffect(()=> {
    console.log("test pin data",pinData);
  }, [pinData])

  return (
    <View style={styles.container}>
      <Map
        tempMarker={tempMarker}
        setTempMarker={setTempMarker}
        mapRef={mapRef}
        setTriggerReport={setTriggerReport}
        setTempPinData={setTempPinData}
        tempPinData={tempPinData}
        pinData={pinData.current}
        setPinData={setPinData}
        newPin={newPin}
        setNewPin={setNewPin}
      >
        <MapPins
          navigation={navigation}
          route={route}
          pinData={pinData.current}
          newPin={newPin}
          triggerReport={triggerReport}
          setModalVisible={setModalVisible}
          tempPinData={tempPinData}
        />
      </Map>
      <DialoguePopup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        setNewPin={setNewPin}
        tempPinData={tempPinData}
        pinData={pinData.current}
        setPinData={setPinData}
      />
      {/* <CarouselCards /> */}
      <FabGroup
        navigation={navigation}
        openModal={openModal}
        resetRegionHandler={resetRegionHandler}
      />
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

/* 
// State to manage the new pins being made
const [pinData, setPinData] = useState(mockReportData);
const [newReport, setNewReport] = useState(false);
const [newReportData, setNewReportData] = useState(null);

// Map component registers a long press
// Captures the event data and uses it to set the "newReport" to true
// Captures the event data and stores it in the "newReportData" 
<Map
  setTempMarker={setTempMarker}
  mapRef={mapRef}
  setTriggerReport={setTriggerReport}
  markerRegion={markerRegion}
  setMarkerRegion={setMarkerRegion}
  onLongPress={(e) => {
    setNewReport(true)
    setNewReportData({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude, title: "New Report", description: "This is a new report", isNewReport: true });
  }}
>

  {
    if (newReport) {
      // give temporary pin data with only coordinates
      setPinData([...pinData, newReportData] )
      // some logic to trigger the newReport Modal
      // some logic to handle rendering the new report form
      // some logic to update pinData after the new report is finalized
      (pop the temporary data, replace with permanent data)
      return (
        <Marker />
      )
    }
  }

  // Map pins on the map are generated via the state (pinData)
  // Whenever pin data is updated, the component (all the pins on the map) refresh and render the pins
  <MapPins
    mockReportData={pinData}
    navigation={navigation}
    route={route}
  />
</Map>
 */