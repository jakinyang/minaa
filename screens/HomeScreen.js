// Imports
import React, { 
  useState, 
  useRef, 
  useMemo, 
} from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

// Component Screens
import Map from './Map/MapViewScreen';
import MapPins from './Map/MapPins';
import CarouselCards from './carousel/Carousel';
import mockReportData from './mock_data/MockReportData.js';
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

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
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

  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%"], []);
  const openModal = () => {
    bottomSheetModalRef.current.present();
  }

  return (
    
    <View style={styles.container}>
      <Map
        setTempMarker={setTempMarker}
        mapRef={mapRef}
        setTriggerReport={setTriggerReport}
        markerRegion={markerRegion}
        setMarkerRegion={setMarkerRegion}
      >
        <Marker
          draggable
          coordinate={tempMarker}
          onDragEnd={(e) => {
            setMarkerRegion({ ...markerRegion, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
            setTimeout(() => {
              if (triggerReport) {
                // navigation.navigate("ToReportScreen")
                setModalVisible(true)
              }
            }, 500)
          }}
        >
        </Marker>
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
      />
      <CarouselCards />
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

  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
  },
  bottomSheet: {
    paddingVertical: 10,
  }
});
