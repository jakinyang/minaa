import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ResourceCard({
  imageSource,
  titleText,
  bodyText,
  onPress,
  navigation,
}) {
  return (
    <ScrollView
      style={styles.container}
    >
      <Card
        style={styles.card}
        onPress={onPress}
      >
        <Card.Cover source={{ uri: imageSource }} />
        <Card.Title title={titleText} />
        <Card.Content>
          <Text variant="bodyMedium">
            {bodyText}
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