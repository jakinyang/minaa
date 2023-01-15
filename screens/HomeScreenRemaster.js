import React, { useState, useRef, useMemo, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, IconButton } from 'react-native-paper'

// Apollo Client
import {
  useQuery,
} from "@apollo/client";

// Components
import Map from './Map/MapViewScreen';
import MapPins from './Map/MapPins';
import TempPins from './Map/TempPins';
import DialoguePopup from './DialoguePopup';
import CarouselCards from './carousel/Carousel';
import { FETCH_ALL_REPORTS } from '../src/Queries/FetchAllReports';
import FabGroup from './FabGroup';

export default function HomeScreenRemaster({ navigation, route }) {
  // Map Helpers
  const mapRef = useRef(null);

  //Helper functions
  function useFreshState(value) {
    const data = useRef(value);
    const setData = (newState) => {
      console.log("Use Fresh State Setting the data value");
      data.current = newState;
    }
    return [data, setData];
  }

  // State Helpers
  const [pinData, setPinData] = useFreshState([]);
  const [tempCoords, setTempCoords] = useFreshState({ latitude: 0, longitude: 0 })
  const [temporaryPinData, setTemporaryPinData] = useFreshState();
  const [userInfo, setUserInfo] = useState({ id: 1, token: 'abc123' });
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRadius, setCurrentRadius] = useState(2000);
  
  // State for managinng the map view region
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  const [location, setLocation] = useState({ latitude: region.latitude, longitude: region.longitude });

  // Reset Region for FabGroup button
  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };

  const refreshHandler = () => {
    setLocation({latitude: region.latitude, longitude: region.longitude})
  };

  const { loading, error, data, refetch } = useQuery(FETCH_ALL_REPORTS,
    {
      fetchPolicy: "cache-and-network",
      onCompleted: (data) => {
        console.log("Datafetch from database completed");
        setPinData(data.reports)
        console.log("Pindata Second Time: \n")
        console.log(pinData.current.slice(-1))
        setLocation({ latitude: region.latitude, longitude: region.longitude });
      },
    }
  );

  if (loading) return <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 400 }}>Loading...</Text>;
  if (error) console.log("fetching error", error.message);

  return (
    <View style={styles.container}>
      <Map
        mapRef={mapRef}
        userInfo={userInfo}
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
        <TempPins
          navigation={navigation}
          route={route}
          tempCoords={tempCoords.current}
        />
      </Map>
      <DialoguePopup
        navigation={navigation}
        userInfo={userInfo}
        pinData={pinData.current}
        setPinData={setPinData}
        tempCoords={tempCoords.current}
        setTempCoords={setTempCoords}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        refetch={refetch}
      />
      <CarouselCards
        data={pinData.current}
        location={location}
        currentRadius={currentRadius}
      />
    </View>
  )
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
  },
  refresh: {
    position: 'absolute',
    margin: 16,
    left: 10,
    bottom: 100,
  }
})