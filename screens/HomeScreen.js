// Imports
import * as React from 'react';
<<<<<<< HEAD
import { View, Button, Text, StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
=======
import { View, Button, Text } from 'react-native';
>>>>>>> main


// Main Home Screen Component
export default function HomeScreen({ navigation }) {
<<<<<<< HEAD
  
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

  const mockReportData = [
    {
      id: 0,
      coords:{
        latitude: 37.7130,
        longitude: -122.4102
      },
      img: ""
    },
    {
      id: 1,
      coords: {
        latitude: 37.7684,
        longitude: -122.4102
      },
      img:""
    },
    {
      id: 2,
      coords: {
        latitude: 37.7345,
        longitude: -122.5128
      },
      img:""
    },
  ]

  function MapMarkers() {
    return (
      mockReportData.map((item, i) => {
        return (
          <Marker
          coordinate={item.coords}
          key={item.id}
          > 
          </Marker>
        )
      })
      // <Marker
      // draggable
      // coordinate={initialMarkerRegion}
      // onDragEnd={
      //   (e) => setMarkerRegion({...markerRegion, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})}

      // >
      // </Marker>
    )
  }


  const [region, setRegion] = React.useState(initialRegion);
  const [markerRegion, setMarkerRegion] = React.useState(initialMarkerRegion);
  const mapRef = React.useRef(null);

  const resetRegionHandler = () => {
    mapRef.current.animateToRegion(initialRegion, 1 * 1000);
  };

  

  return (
    <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
  title="Go to Resource Index"
  onPress={() => navigation.navigate('ResourceIndexScreen')}
/>
<Button
  title="Go to Profile Tab"
  onPress={() => navigation.navigate('ProfileTab')}
/>

<Button title='reset location' onPress={resetRegionHandler}/>

<Text>Current lat and lon:</Text>
 <Text>{region.latitude}, {region.longitude}</Text>
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
        (e) => setMarkerRegion({...markerRegion, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})}

      >
      </Marker>

      <MapMarkers />

    </MapView>
    

  </View>
    //   {/* 
    //     Map Component 
    //       - Queries to the database to get back marker data
    //         - Markers:
    //           - Callouts to display marker data
    //             - Takes you to the Report Screen
    //         - Present Location:
    //           - GPS Location
    //             - showUserLocation Prop
    //           - Permissions Component
    //       - Queries to API for map data
    //       - Long Press
    //         - Takes you to the Make Report Dialogue
    //           - Takes you to the Report Form Screen
    //     Reference:
    //       - https://github.com/react-native-maps/react-native-maps
    //       - https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md#events
    //       - https://github.com/zoontek/react-native-permissions
    //       - https://github.com/zoontek/react-native-permissions
    //   */}
    //   {/* 
    //     Bottom Navigation
    //       - Buttons:
    //         - Hamburger Menu trigger
    //           - Toggles the Hamburger Menu
    //           - HamburgerMenuScreen.js
    //         - Resources
    //           - Takes you to the Resources Index
    //           - ResourceIndexScreen.js
    //         - Your Reports
    //           - Takes you to Reports Index
    //           - ReportIndexScreen.js
    //         - User Profile
    //           - If logged in:
    //             - Takes you to Profile Page
    //             - ProfilePageScreen.js
    //           - If not logged in:
    //             - Takes you to Login Page
    //             - LoginFormScreen.js
    //     Reference:
    //       - https://callstack.github.io/react-native-paper/bottom-navigation.html
    //   */}
     
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
=======
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* 
        Map Component 
          - Queries to the database to get back marker data
            - Markers:
              - Callouts to display marker data
                - Takes you to the Report Screen
            - Present Location:
              - GPS Location
                - showUserLocation Prop
              - Permissions Component
          - Queries to API for map data
          - Long Press
            - Takes you to the Make Report Dialogue
              - Takes you to the Report Form Screen
        Reference:
          - https://github.com/react-native-maps/react-native-maps
          - https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md#events
          - https://github.com/zoontek/react-native-permissions
          - https://github.com/zoontek/react-native-permissions
      */}
      {/* 
        Bottom Navigation
          - Buttons:
            - Hamburger Menu trigger
              - Toggles the Hamburger Menu
              - HamburgerMenuScreen.js
            - Resources
              - Takes you to the Resources Index
              - ResourceIndexScreen.js
            - Your Reports
              - Takes you to Reports Index
              - ReportIndexScreen.js
            - User Profile
              - If logged in:
                - Takes you to Profile Page
                - ProfilePageScreen.js
              - If not logged in:
                - Takes you to Login Page
                - LoginFormScreen.js
        Reference:
          - https://callstack.github.io/react-native-paper/bottom-navigation.html
      */}
      <Text>Home Screen</Text>
      <Button
        title="Go to Resource Index"
        onPress={() => navigation.navigate('ResourceIndexScreen')}
      />
      <Button
        title="Go to Profile Tab"
        onPress={() => navigation.navigate('ProfileTab')}
      />
    </View>
  );
}
>>>>>>> main