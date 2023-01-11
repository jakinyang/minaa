import React from 'react';
import { View, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

export default function MapMarkers({ mockReportData }) {
  return (
    mockReportData.map((item, i) => {
      return (
        <Marker
          coordinate={item.coords}
          key={item.id}
        >
          <Callout tooltip>
            <View>
              <Card style={styles.card}>
                <Card.Cover source={require("../assets/landmine1.jpg")} />
                <Card.Title title="Report n" />
                <Card.Content>
                  <Text variant="bodyMedium">{item.content} </Text>
                </Card.Content>
              </Card>

            </View>

          </Callout>
        </Marker>
      )
    })
  )
};