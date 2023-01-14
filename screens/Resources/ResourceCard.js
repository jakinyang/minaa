import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ResourceCard({
  imageSource,
  titleText,
  subTitleText,
  bodyText1,
  bodyText2,
  bodyText3,
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
      <Card.Title title={titleText} />
      <Card.Content>
        <Text variant="labelSmall" >
          {subTitleText}
        </Text>
        <Text variant="bodyMedium">
          {bodyText1}
        </Text>
        <Text variant="bodyMedium">
          {bodyText2}
        </Text>
        <Text variant="bodyMedium">
          {bodyText3}
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
  }
})
