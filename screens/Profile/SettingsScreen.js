import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import { Button, IconButton, MD3Colors } from 'react-native-paper';
// import FetchAllReports from '../../src/Queries/FetchAllReports';


export default function SettingsScreen({ navigation }) {
  // const {loading, error, data} = FetchAllReports();
  // if(loading) {
  //   return <Text>Loading</Text>
  // }
  // if(error) {
  //   <Text>Error</Text>
  // }
  // console.log("reports data: ", data.reports);
  /*data.reports
  {"__typename": "Report", "createdAt": "2023-01-09T21:44:09.306Z", "description": "Enim dolore modi laudantium officiis animi nulla eligendi labore possimus.", "id": "200", "imageUrl": "https://loremflickr.com/640/480", "latitude": 89.210466, "longitude": -61.886658, "radius": 5, "reportCategory": "UNCLEAR", "statusCategory": "REPORTED", "updatedAt": "2023-01-09T21:44:09.306Z"},
   */
  return (
    <>
      <SafeAreaView />
      <View
        style={styles.container}
      >
        <IconButton
          icon="arrow-left"
          iconColor={MD3Colors.primary0}
          style={styles.goBack}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text>This is the Settings Page</Text>
        {/* <FlatList 
        data={data.reports}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item1}>
              id: {item.id}
            </Text>
            <Text style={styles.item2}>
              description: {item.description}
            </Text>
            <Text style={styles.item1}>
              createdAt: {item.createdAt}
            </Text>
            <Text style={styles.item2}>
              radius: {item.radius}
            </Text>
          </View>
        )}
        /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 15
  },
  item1: {
    margin: 5,
    padding: 2,
    backgroundColor: 'lightseagreen'
  },
  item2: {
    margin: 5,
    padding: 2,
    backgroundColor: 'red'
  },
  item3: {
    margin: 5,
    padding: 2,
    backgroundColor: 'lightslategray'
  },
  item4: {
    margin: 5,
    padding: 2,
    backgroundColor: 'lightblue'
  }
});