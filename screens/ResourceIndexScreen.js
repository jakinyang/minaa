// Imports
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function ResourceIndex({ navigation }) {

  const cardCover = { uri: "https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg" }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Card style={styles.card} onPress={() => navigation.navigate('ResourceOne')}>
          <Card.Cover source={require('../assets/un-logo.png')} />
          <Card.Title title="Resource 1" />
          <Card.Content>
            <Text variant="bodyMedium">
              Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card} onPress={() => navigation.navigate('ResourceTwo')}>
          <Card.Cover source={require("../assets/landmine-warning.png")} />
          <Card.Title title="Resource 2" />
          <Card.Content>
            <Text variant="bodyMedium">
              Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card} onPress={() => navigation.navigate('ResourceThree')}>
          <Card.Cover source={require("../assets/un-red-logo.png")} />
          <Card.Title title="Resource 3" />
          <Card.Content>
            <Text variant="bodyMedium">
              Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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
  }
})