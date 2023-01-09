import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Geojson } from 'react-native-maps';
import * as Location from 'expo-location';

import { ScrollView } from 'react-native-gesture-handler';
import { Chip, Card } from 'react-native-paper';

export default function MapMarkers({mockReportData}) {
    return (
      mockReportData.map((item, i) => {
        return (
          <Marker
          coordinate={item.coords}
          key={item.id}
          > 
          <Callout tooltip>
            <View>
              {/* <Text>{item.content}</Text> */}
            
      <Card style={styles.card}>
      <Card.Cover source={require("../assets/landmine1.jpg")}/>
      <Card.Title title="Report n"/>
      <Card.Content>
       <Text variant="bodyMedium">{item.content} </Text>
      </Card.Content>
      </Card>

            </View>

          </Callout>
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
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: 4,
    },
    preference: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
    },
    chip: {
      margin: 4,
    },
    card: {
      margin: 4,
    }
  })