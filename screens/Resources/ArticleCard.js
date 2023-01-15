import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ArticleCard({
  route
}) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{...styles.container, marginTop: insets.top }}
    >
      <Card
        style={styles.card}
      >
        <Card.Cover source={{ uri: route.params.imageSource }} style={styles.cover} />
        <Card.Content>
        <Text style={styles.title}  >
          {route.params.titleText}
        </Text>
          <Text style={styles.subTitle} >
            {route.params.subTitleText}
          </Text>
          <Text style={styles.text}>
            {route.params.bodyText1}
          </Text>
          <Text style={styles.text}>
            {route.params.bodyText2}
          </Text>
          <Text style={styles.text}>
            {route.params.bodyText3}
          </Text>
        </Card.Content>
      </Card>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 10,
  },
  cover: {
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    marginTop: 30,
  },
  subTitle: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 18,
    marginTop: 20
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 24,
  }
})