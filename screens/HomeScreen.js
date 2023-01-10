// Imports
import React, { useState, useRef, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import MapMarkers from './MapMarkers';
import ResourceIndex from './ResourceIndexScreen';
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from 'reanimated-bottom-sheet';
import { FAB, Portal } from 'react-native-paper';
import CarouselCards from './TestCarousel';
import mockReportData from './TestMarkerData';
import TestMapMarkers from './TestMapMarkers';
// Main Home Screen Component
export default function HomeScreen({ navigation }) {
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

  const [region, setRegion] = useState(initialRegion);

  const [markerRegion, setMarkerRegion] = useState(initialMarkerRegion);

  const mapRef = useRef(null);

  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };

  // Markers Array with mock data
  const markers = TestMapMarkers(mockReportData);

  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }

  // Fab Group Helpers
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={(region) => setRegion(region)}
        ref={mapRef}
      >
        <Marker
          draggable
          coordinate={initialMarkerRegion}
          onDragEnd={
            (e) => setMarkerRegion({
              ...markerRegion,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })}
        >
        </Marker>
        {markers}
      </MapView>
      <CarouselCards />
      <Text>Current lat and lon:</Text>
      <Text>{region.latitude}, {region.longitude}</Text>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            // { icon: 'plus', onPress: openModal },
            { icon: 'account-box-outline', label: 'Profile', onPress: () => navigation.navigate('ProfileTab') },
            { icon: 'book', label: 'Resources', onPress: openModal },
            { icon: 'crosshairs', label: 'Return', onPress: resetRegionHandler },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <ResourceIndex />
      </BottomSheetModal>
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
