import { Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import { Raleway_600SemiBold } from '@expo-google-fonts/raleway';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ResourceCard({
  imageSource,
  titleText,
  subTitleText,
  onPress,
}) {
  return (
    <Card
      style={styles.card}
      mode="elevated"
      elevation={1}
      onPress={onPress}
    >
      <Card.Cover source={{ uri: imageSource }} />
      <Card.Content>
        <Text style={styles.title}  >
          {titleText}
        </Text>
        <Text style={styles.subTitle}  >
          {subTitleText}
        </Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    marginTop: 20
  },
  subTitle: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    marginVertical: 10,
  },
})
