import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';



export default function Test() {

  const GET_USER_TEST = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      id
      lastName
      password
      phone
      dateOfBirth
    }
  }
  `

  const { loading, error, data } = useQuery(GET_USER_TEST);
  console.log(GET_USER_TEST);
  return (
    <View>
      <Text>
        This is a test
      
      </Text>
      {data.user.map(({id, lastname, password, phone, dateOfBirth}) => {
          return (
            <View key={id}>
              <Text>{lastname}</Text>
            </View>
          )
        })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})