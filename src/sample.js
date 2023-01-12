import * as React from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

function TestUser({ id, firstName, lastName, email }) {
  return (
    <View>
      <Text style={styles.item1}>
        "id": {id} 
      </Text>
      <Text style={styles.item2}>
      "first name" {firstName}
      </Text>
      <Text style={styles.item3}>
      "last name" {lastName}
      </Text>
      <Text style={styles.item4}>
         "email: {email}
      </Text>
    </View>
  );
}

export default function Test() {
  const GET_USER_TEST = gql`
    query Query {
      users {
        id
        firstName
        lastName
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USER_TEST);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    console.log("Error from useQuery Test!", error);
  }
  // console.log(data.users);
  return (
    <View>
      <FlatList
        data={data.users}
        renderItem={({ item }) => (
          <TestUser
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item1: {
    backgroundColor: "red",
    padding: 20,
  },
  item2: {
    backgroundColor: "blue",
    padding: 20,
  },
  item3: {
    backgroundColor: "green",
    padding: 20,
  },
  item4: {
    backgroundColor: "yellow",
    padding: 20,
  },
});

