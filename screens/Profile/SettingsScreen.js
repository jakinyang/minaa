
// import * as React from "react";
// import { View, Button, Text, StyleSheet, FlatList } from "react-native";
// import {
//   gql,
//   useQuery,
// } from "@apollo/client";

// export default function SettingsScreen() {
//   const FETCH_ALL_USERS = gql `
//   query Query {
//     users {
//       id
//       lastName
//       password
//     }
//   }
//   `;
//   const {loading, error, data } = useQuery( FETCH_ALL_USERS);
//   if(loading) {
//     console.log("it is loading data");
//   }
//   if(error) {
//     console.log('Error:', error)
//   }
//   console.log("hello, this shouldnt fail");
//   console.log('all data from fetch query', data);
//   console.log(data.users);
//


// function TestUser({ id, firstName, lastName, email }) {
//   return (
//     <View>
//       <Text style={styles.item1}>
//         "id": {id} 
//       </Text>
//       <Text style={styles.item2}>
//       "first name" {firstName}
//       </Text>
//       <Text style={styles.item3}>
//       "last name" {lastName}
//       </Text>
//       <Text style={styles.item4}>
//          "email: {email}
//       </Text>
//     </View>
//   );
// }

// export default function Test() {
//   const GET_USER_TEST = gql`
//     query Query {
//       users {
//         id
//         firstName
//         lastName
//         email
//       }
//     }
//   `;

//   const { loading, error, data } = useQuery(GET_USER_TEST);
  
//   console.log("TEST QUERY: ", data.users);
//   if (loading) {
//     return <Text>Loading...</Text>;
//   }
//   if (error) {
//     console.log("Error from useQuery Test!", error.message);
//   }
//   return (
//     <View>
//       <FlatList
//         data={data.users}
//         renderItem={({ item }) => (
//           <TestUser
//             id={item.id}
//             firstName={item.firstName}
//             lastName={item.lastName}
//             email={item.email}
//           />
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }




import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';


export default function SettingsScreen({ navigation }) {
  return (
    <>
      <SafeAreaView />
      <View
        style={styles.container}
      >
        <IconButton
          icon="arrow-left"
          iconColor={MD3Colors.primary0}
          style={styles.goBack}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text>This is the Settings Page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 15
  }
});