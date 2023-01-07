// Imports
import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip, Card } from 'react-native-paper';

export default function ResourceThree({ navigation }) {
  return (
<ScrollView>
    <View style={styles.preference}>
      <Chip style={styles.chip}>
        tag test
      </Chip>
    </View>
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.card}>
        <Card.Cover source={require("../../assets/landmine1.jpg")}/>
        <Card.Title title="Article 1"/>
        <Card.Content>
            <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit facilisis vestibulum. Donec elementum, nisi in dapibus molestie, velit quam vehicula mi, vel commodo dui felis ut arcu. Mauris egestas erat ut eleifend suscipit. Donec varius velit scelerisque tortor elementum efficitur. Pellentesque lectus leo, porta nec ornare sit amet, pretium ut dolor. Praesent gravida ullamcorper nunc, in dictum est sodales a. Sed nec sapien ligula. Ut placerat tortor faucibus elit hendrerit vestibulum. Aliquam eleifend leo ut purus faucibus, ac elementum lorem euismod. Praesent lacinia blandit urna.
            </Text>
          </Card.Content>
      </Card>
    </ScrollView>
    </ScrollView>
    // <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightseagreen", height: "90%" }}>
    //   <Text>Resource 1</Text>
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    // </View>
  );
}


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