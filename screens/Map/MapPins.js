import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { Chip, Card, Text } from 'react-native-paper';
import { getTimeElapsed } from '../../shared/helpers/timeCalculator';
import { formatDate } from '../../shared/helpers/dateFormatter';
import { DefaultTheme } from 'react-native-paper';
import { lightColor, PaperThemeColorsLight } from '../../assets/ColorPalette';
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
export default function MapPins({
  navigation,
  pinData,
}) {
  const [selected, setSelected] = useState(false);

  const ChipTheme = {
    ...DefaultTheme,
    colors: {
      ...PaperThemeColorsLight,
      primary: lightColor.otherGold[400]
    }
  }

  return (pinData?.map((item, i) => {
    const time = "Reported: " + formatDate(item.createdAt)
    return (
      <Marker
        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
        key={i}
        pinColor={lightColor.redAccent[400]}
      >
        <Callout
          tooltip
          onPress={() => { navigation.navigate('ReportDetailScreen', item) }}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title} >
                {time}
              </Text>
              <View style={styles.chipContainer}>
                <Chip
                  icon="alert-decagram"
                  theme={ChipTheme}
                  textStyle={styles.text}
                >{item.statusCategory}</Chip>
                <Chip
                  icon="smoke-detector-variant-alert"
                  theme={ChipTheme}
                  textStyle={styles.text}
                >{item.reportCategory}</Chip>
              </View>
            </Card.Content>
          </Card>
        </Callout>
      </Marker>
    )
  }))
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
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
  },
  text: {
    fontFamily: 'OpenSans_600SemiBold',
  },
  title: {
    fontFamily: 'Montserrat_400Regular',
  }
})