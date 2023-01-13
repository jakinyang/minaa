// Imports
import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

// Apollo Client
import {
  gql,
  useQuery,
} from "@apollo/client";

// Component Screens
import Map from './Map/MapViewScreen';
import MapPins from './Map/MapPins';
import CarouselCards from './carousel/Carousel';
import mockReportData from './mock_data/MockReportData.js';
import FabGroup from './FabGroup';
import BottomSheet from './BottomSheet';
import DialoguePopup from './DialoguePopup';

import allReportsData from '../src/Queries/allReportsData';
import TestMarkers from './Map/TestMarkers';

// Main Home Screen Component
export default function HomeScreen({ navigation, route }) {
  // Use Effect for refreshing on new pin placed (i.e. MapViewScreen onLongPress())
  useEffect(() => {
    console.log("Pin data on pinData update: \n", pinData[0]);
  }, [pinData])

  useEffect(() => {
    if (data) {
      console.log("Direct Fetch data: \n");
      console.table(data.reports.slice(1, 5))
    };
  }, [data])

  //Helper functions
  function useFreshState(value) {
    const pinData = useRef(value);
    const setPinData = (newState) => {
      pinData.current = newState;
    }
    // console.log("pin data:", pinData);
    return [pinData, setPinData];
  }

  // Map Helpers
  const mapRef = useRef(null);

  //Fetch reports data from database
  const FETCH_ALL_REPORTS = gql`
    query Query {
      reports {
        id
        latitude
        longitude
        description
        radius
        statusCategory
        reportCategory
        imageUrl
        createdAt
        updatedAt
      }
    }
  `;
  const { loading, error, data } = useQuery(FETCH_ALL_REPORTS);

  if (loading) {
    console.log("report data lodaing from Apollo");
  }
  if (error) {
    console.log("Apollo error:", error.message);
  }
  if (data) {
    console.log("Initial data fetch result: \n");
    console.table(data.reports.slice(1, 5))
  }
  // Map Data
  const initialMarkerRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

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
  const [pinData, setPinData] = useFreshState(data?.reports);

  // State for managing new pin data
  const [tempCoords, setTempCoords] = useFreshState()

  //Test: new
  const [temporaryPinData, setTemporaryPinData] = useFreshState(null)

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
        {/* <TestMarkers 
        reportsData={reportsData}
        /> */}
        {/*single pin .current */}
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
