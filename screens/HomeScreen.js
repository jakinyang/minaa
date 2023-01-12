// Imports
import React, { 
  useState, 
  useRef, 
  useMemo,
  useEffect,
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
// import FetchAllReports from '../src/Queries/FetchAllReports';


// Main Home Screen Component
export default function HomeScreen({ navigation, route }) {
 
  console.log("returned new report: ", route.params?.newReport);
  //Fetch all reports
  // const {loading, error, data} = FetchAllReports();

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

  //Test: new
  const [temporaryPinData, setTemporaryPinData] = useFreshState({longitude: 0, latitude: 0})

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
