import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './screens/homeScreen';
import HomeStack from './routes/Homestack';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Test from './screens/test';



const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
//Test
// client
//   .query({
//     query: gql`
//     query Query {
//       users {
//         id
//         firstName
//         lastName
//       }
      
//     }
//     `,
//   })
//   .then((result) => console.log(JSON.stringify(result)));

  

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Test />
    </ApolloProvider>
    // <NavigationContainer>
    //   <HomeStack style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
