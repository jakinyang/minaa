import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Geojson, CalloutSubview } from 'react-native-maps';
import { Chip, Card } from 'react-native-paper';

export default function MapPins({ navigation, pinData, newPin, setNewPin, tempMarker, markerRegion, setMarkerRegion, initialMarkerRegion }) {

  return (
    <View>
    {!newPin ?
      (<Marker
          draggable
          coordinate={markerRegion}
        // onDragEnd={
        //   (e) => {
        //     setMarkerRegion({ ...markerRegion, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude });
        //     setTimeout(() => {
        //       if (triggerReport) {
        //         // navigation.navigate("ToReportScreen")
        //         setModalVisible(true)
        //       }
        //     }, 500)
        //   }
        // }
        >
        </Marker>)
        : null
     }
      {pinData.map((item, i) => {
        return (

          <Marker
            coordinate={item.coords}
            key={item.id}
            onDragEnd={
              (e) => {

              }
            }
          >
            <Callout
              tooltip
              onPress={() => { console.log("Callout pressed"); navigation.navigate('ReportDetailScreen', item) }}
            >
              <View>
                <Card style={styles.card}>
                  <Card.Cover source={require("../assets/landmine1.jpg")} />
                  <Card.Title title={item.title} />
                  <Card.Content>
                    <Chip icon="information">{item.status}</Chip>
                  </Card.Content>
                </Card>
              </View>
            </Callout>
          </Marker>
        )
      })}
    </View>
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