import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ResourceArticleOne({
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
        <Card.Title
          title="Basic Facts: the human cost of landmines"
        />
        <Card.Content>
          <Text variant="titleLarge">
            Basic Facts: the human cost of landmines
          </Text>
          <Text variant="labelSmall" >
            Scope And Nature Of The Crisis
          </Text>
          <Text variant="bodyMedium">
            Mine-laying has become common practice in virtually every conflict situation where the ICRC is present, and the institution is confronted daily with the harrowing consequences of the widespread and indiscriminate use of this deadly weapon. Mines are now proliferating so fast that there are perhaps as many as I 10 million of them spread in 64 countries worldwide, and it is estimated that 2 to 5 million more mines are being laid each year. Scattered like deadly seeds, they kill and maim between 1.000 and 2.000 people per month, most of them innocent civilians.
          </Text>
          <Text variant="bodyMedium">
            With an estimated 30 million mines strewn in at least 18 countries, Africa is the continent most severely affected by the large scale sowing of landmines . The most critical situations are found in Angola with more than 9 million mines, in Mozambique with up to 2 million and in Somalia with I million. Ethiopia, Eritrea and Sudan also have to face severe situations, and countries like Rwanda, Liberia and Libya have landmine problems on a smaller scale.
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
