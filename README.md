# Minaa

github repo url: https://github.com/jakinyang/minaa

Project contributors: Russel Mueller @Bohjaangles, Jae Chun Yang @jakinyang, Benjamin Meng @Benjamin0203

Minaa is an app that was made as a school final project for proof of concept and demonstation purposes.

With Minaa, users can view a map with map pins that identify possible landmine locations and make reports of possible landmine locations if they come across or suspect one. Minaa is primarily a mobile application that has a supporting browser webpage for admin users to view meta data about Minaa users and reports made throught he app. 

# Before installing Minaa, you need:
 - node v16.18.1
 - once the project is cloned, run npm i to install the following dependencies
 - There are some node modules that need to be fixed before the project can run as well, see below for the heading: "node-modules-fix"
 - create a .env file and add: 
 LOCALHOST="http://<YOUR_IP_ADDRESS>:4000" to it.

# Instructions
- To start the application with expo run:
```
npx expo start
```
- To open up an emulator follow instructions with expo or press 'i'

# Media and Screenshots

[Video](file:///Users/jakinbacon/Downloads/Replay%20-%20January%2019,%202023%20at%2012_03%20PM.webm) presentation from January 19, 2023

### Node-modules-fix:
  - go into node_modules/react-native/index.js
  - Go to line 436, where it should display "// Deprecated Prop Types"
  - Replace line 437 - 464 with the following code:
```
    get ColorPropType(): $FlowFixMe {
    console.warn('');
    return require('deprecated-react-native-prop-types').ColorPropType;
  },

  get EdgeInsetsPropType(): $FlowFixMe {
    console.warn('');
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
  },

  get PointPropType(): $FlowFixMe {
    console.warn('');
    return require('deprecated-react-native-prop-types').PointPropType;
  },

  get ViewPropTypes(): $FlowFixMe {
    console.warn('');
    return require('deprecated-react-native-prop-types').ViewPropTypes;
  },
```

### Minaa dependencies:
 - @apollo/client: ^3.7.3
 - @expo-google-fonts/barlow: ^0.2.2
 - @expo-google-fonts/montserrat: ^0.2.2
 - @expo-google-fonts/open-sans: ^0.2.2
 - @expo-google-fonts/raleway: ^0.2.2
 - @gorhom/bottom-sheet: ^4.4.5
 - @react-native-async-storage/async-storage: ^1.17.11
 - @react-navigation/drawer: ^6.5.6
 - @react-navigation/material-bottom-tabs: ^6.2.11
 - @react-navigation/native: ^6.1.1
 - @react-navigation/stack: ^6.3.10
 - apollo3-cache-persist: ^0.14.1
 - cross-fetch: ^3.1.5
 - deprecated-react-native-prop-types: ^4.0.0
 - expo: ~47.0.12
 - expo-app-loading: ~2.1.1
 - expo-font: ~11.0.1
 - expo-image-picker: ~14.0.2
 - expo-location: ~15.0.1
 - expo-media-library: ~15.0.0
 - expo-splash-screen: ~0.17.5
 - expo-status-bar: ~1.4.2
 - graphql: ^15.8.0
 - jest: ^26.6.3
 - jest-expo: ^47.0.1
 - react: 18.1.0
 - react-native: 0.70.5
 - react-native-dropdown-picker: ^5.4.4
 - react-native-gesture-handler: ~2.8.0
 - react-native-maps: ^1.3.2
 - react-native-paper: ^5.1.3
 - react-native-reanimated: ~2.12.0
 - react-native-safe-area-context: ^4.4.1
 - react-native-snap-carousel: ^3.9.1
 - react-native-status-bar-height: ^2.6.0
 - react-native-vector-icons: ^9.2.0
 - reanimated-bottom-sheet: ^1.0.0-alpha.22  
