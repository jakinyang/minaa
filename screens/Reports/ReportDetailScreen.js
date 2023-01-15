import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip, DefaultTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTimeElapsed } from '../../shared/helpers/timeCalculator';
import { lightColor, PaperThemeColorsLight } from '../../assets/ColorPalette'

export default function ReportDetailScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  let time = getTimeElapsed(route.params.createdAt)
  const [saved, setSaved] = useState(false)

  const ChipTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      primary: lightColor.otherGold[400]
    }
  }

  const IconTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      primary: lightColor.lapizLazuli[300]
    }
  }

  const ContrastTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      onSurfaceVariant: lightColor.otherGold[400]
    }
  }

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <Card>
        <Card.Title
          title={route.params.reportCategory}
          left={(props) => <Avatar.Icon {...props} icon="mine" theme={IconTheme}/>}
          right={(props) => <IconButton {...props} icon={saved ? "bookmark" : "bookmark-outline"} theme={ContrastTheme}
          onPress={() => { setSaved(!saved) }}/>}
        />
        <Card.Content>
          <Chip
            style={styles.chip} icon="alert-decagram"
            theme={ChipTheme}
          >
            Report Status: {route.params.statusCategory}
          </Chip>
          <Chip
            icon="map-marker-alert-outline"
            style={styles.chip}
            theme={ChipTheme}
          >
          Latitude: {route.params.latitude}   Longitude: {route.params.longitude}
        </Chip>
        <View style={styles.chipContainer}>
          <Chip
            style={styles.chip}
            icon="information"
            theme={ChipTheme}
          >
            Report ID: {route.params.id}
          </Chip>
          <Chip
            style={styles.chip}
            icon="radar"
            theme={ChipTheme}
          >
            Reported Area: {route.params.radius}m
          </Chip>
        </View>
        <Text style={styles.description}>
          Reported: {time} ago
        </Text>
        <Text
          style={styles.description}
          variant='bodyLarge'>Notes:</Text>
        <ScrollView>
          <Text
            style={styles.description}
            variant='bodyLarge'
          >
            {route.params.description}
          </Text>
        </ScrollView>

      </Card.Content>
    </Card>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  chip: {
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 5,
  }
})