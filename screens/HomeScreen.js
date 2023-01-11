// Imports
import React, { useState, useRef, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

// Component Screens
import Map from './MapViewScreen';
import MapPins from './MapPins';
import ResourceIndex from './ResourceIndexScreen';
import CarouselCards from './Carousel';
import mockReportData from './MockReportData.js';
import FabGroup from './FabGroup';
import BottomSheet from './BottomSheet';
import DialoguePopup from './DialoguePopup';

// Main Home Screen Component
export default function HomeScreen({ navigation, route }) {
  // Map Data
  const initialMarkerRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  
  // Map Helpers
  const mapRef = useRef(null);
  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };
  const [triggerReport, setTriggerReport] = useState(false);
  const [tempMarker, setTempMarker] = useState({longitude: 0, latitude: 0});
  const [markerRegion, setMarkerRegion] = useState(initialMarkerRegion);
  const [modalVisible, setModalVisible] = useState(false);
  const [newReport, setNewReport] = useState([]);
  const [newPin, setNewPin] = useState(false);


  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%"], []);
  const openModal = () => {
    bottomSheetModalRef.current.present();
  }
  return (
    <View style={styles.container}>
      <Map
        tempMarker={tempMarker}
        setTempMarker={setTempMarker}
        mapRef={mapRef}
        setTriggerReport={setTriggerReport}
        markerRegion={markerRegion}
        setMarkerRegion={setMarkerRegion}
        triggerReport={triggerReport}
        setModalVisible={setModalVisible}
        newReport={newReport}
        newPin={newPin}
        setNewPin={setNewPin}
      >
        <MapPins
          mockReportData={mockReportData}
          navigation={navigation}
          route={route}
        />
      </Map>
      <DialoguePopup 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        setNewPin={setNewPin}
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
 
})