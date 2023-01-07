// Imports
import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text} from 'react-native-paper';



export default function ResourceIndex({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightcoral", height: "90%" }}>
      <View style={styles.preference}>
  
    </View>
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.card}    onPress={() => navigation.navigate('ResourceOne')}>
        <Card.Cover source={require("../assets/landmine1.jpg")}/>
        <Card.Title title="Resource 1"/>
        <Card.Content>
            <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
            </Text>
          </Card.Content>
      </Card>
      <Card style={styles.card}    onPress={() => navigation.navigate('ResourceTwo')}>
        <Card.Cover source={require("../assets/landmine1.jpg")}/>
        <Card.Title title="Resource 2"/>
        <Card.Content>
            <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
            </Text>
          </Card.Content>
      </Card>
      <Card style={styles.card}    onPress={() => navigation.navigate('ResourceThree')}>
        <Card.Cover source={require("../assets/landmine1.jpg")}/>
        <Card.Title title="Resource 3"/>
        <Card.Content>
            <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
            </Text>
          </Card.Content>
      </Card>
    </ScrollView>
    
      <Button title="Go back" onPress={() => navigation.goBack()} buttonColor="lightseagreen"/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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