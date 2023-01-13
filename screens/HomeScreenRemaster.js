import React, { useState, useRef, useMemo, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

// Apollo Client
import {
  useQuery,
} from "@apollo/client";

// Components
import Map from './Map/MapViewScreen'
import MapPins from './Map/MapPins'
import DialoguePopup from './DialoguePopup'
import { FETCH_ALL_REPORTS } from '../src/Queries/FetchAllReports'

export default function HomeScreenRemaster({ navigation, route }) {
  // Rerendering Helpers
  useEffect(() => { }, [pinData])
  // Map Helpers
  const mapRef = useRef(null);

  //Helper functions
  function useFreshState(value) {
    const pinData = useRef(value);
    const setPinData = (newState) => {
      pinData.current = newState;
    }
    // console.log("pin data:", pinData);
    return [pinData, setPinData];
  }

  // State Helpers
  const [pinData, setPinData] = useFreshState([]);
  const [tempCoords, setTempCoords] = useFreshState()
  const [temporaryPinData, setTemporaryPinData] = useFreshState();
  const [userInfo, setUserInfo] = useState({ id: 1, token: 'abc123' });
  const [modalVisible, setModalVisible] = useState(false);

  // State for managinng the map view region
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Map Data
  const initialMarkerRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  // Reset Region for FabGroup button
  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };

  const { loading, error, data } = useQuery(FETCH_ALL_REPORTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  if (data) {
    setPinData(data?.reports)
  }

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
  }
})