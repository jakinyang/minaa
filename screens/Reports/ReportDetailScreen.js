import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip, DefaultTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTimeElapsed } from '../../shared/helpers/timeCalculator';
import { lightColor, PaperThemeColorsLight } from '../../assets/ColorPalette'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';

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
      primary: lightColor.redAccent[500]
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
      <ScrollView>
        <Card>
          <Card.Title
            title={route.params.reportCategory}
            left={(props) => <Avatar.Icon {...props} icon="map-marker-alert-outline" theme={IconTheme} />}
            right={(props) => <IconButton {...props} icon={saved ? "bookmark" : "bookmark-outline"} theme={ContrastTheme}
              onPress={() => { setSaved(!saved) }} />}
            titleStyle={styles.title}
          />
          <Card.Content>
            <Chip
              style={styles.chip} icon="alert-decagram"
              theme={ChipTheme}
              textStyle={styles.chipText}
            >
              REPORT STATUS: {route.params.statusCategory}
            </Chip>
            <Chip
              icon="map-marker-alert"
              style={styles.chip}
              theme={ChipTheme}
              textStyle={styles.chipText}
            >
              LATITUDE: {route.params.latitude}
            </Chip>
            <Chip
              icon="map-marker-alert"
              style={styles.chip}
              theme={ChipTheme}
              textStyle={styles.chipText}
            >
              LONGITUDE: {route.params.longitude}
            </Chip>
            <View style={styles.chipContainer}>
              <Chip
                style={styles.chip}
                icon="information"
                theme={ChipTheme}
                textStyle={styles.chipText}
              >
                REPORT ID: {route.params.id}
              </Chip>
              <Chip
                style={styles.chip}
                icon="radar"
                theme={ChipTheme}
                textStyle={styles.chipText}
              >
                REPORTED AREA: {route.params.radius}m
              </Chip>
            </View>
            <Text style={styles.description}>
              Reported: {time} ago
            </Text>
            <Text
              style={styles.text}
              variant='bodyLarge'>Notes:</Text>

            <Text
              style={styles.text}
              variant='bodyLarge'
            >
              {route.params.description}
            </Text>

          </Card.Content>
        </Card>
      </ScrollView>
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
    fontFamily: 'Montserrat_400Regular',
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 10
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 5,
    lineHeight: 24,
  },
  title: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 20,
    lineHeight: 30
  },
  chipText: {
    fontFamily: 'OpenSans_600SemiBold',
  }
})