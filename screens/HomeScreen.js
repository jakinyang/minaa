// Imports
import * as React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';


// Main Home Screen Component
export default function HomeScreen({ navigation }) {
  
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
    <MapView 
    style={styles.map}
    initialRegion={initialRegion}
    >

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