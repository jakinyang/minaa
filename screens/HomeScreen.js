// Imports
import React, { useState, useRef, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { BottomSheetModal } from "@gorhom/bottom-sheet";

// Component Screens
import Map from './MapViewScreen';
import MapPins from './MapPins';
import ResourceIndex from './ResourceIndexScreen';
import CarouselCards from './Carousel';
import mockReportData from './MockReportData.js';
import FabGroup from './FabGroup';
import BottomSheet from './BottomSheet';

// Main Home Screen Component
export default function HomeScreen({ navigation, route }) {
  // Map Helpers
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

  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };

  
  const [tempMarker, setTempMarker] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }

  return (
    <View style={styles.container}>
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
        <Marker
          draggable
          coordinate={tempMarker}
          onDragEnd={(e) => {
            setTriggerReport(true)
          }}
        >
        </Marker>
        <MapPins
          mockReportData={mockReportData}
          navigation={navigation}
          route={route}
        />
      </MapView>
      <CarouselCards />
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
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1,
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
