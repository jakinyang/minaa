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
        <Card.Cover source={{ uri: route.params.imageSource }} />
        <Card.Title title={route.params.titleText} />
        <Card.Content>
          <Text variant="labelSmall" >
            {route.params.subTitleText}
          </Text>
          <Text variant="bodyMedium">
            {route.params.bodyText1}
          </Text>
          <Text variant="bodyMedium">
            {route.params.bodyText2}
          </Text>
          <Text variant="bodyMedium">
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
  }
})