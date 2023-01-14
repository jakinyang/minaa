import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ArticleCard({
  route
}) {
  return (
    <ScrollView
      style={styles.container}
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
    flex: 1
  }
})