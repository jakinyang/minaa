import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/Homestack';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Test from './screens/test';
import { Provider } from 'react-native-paper';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/',
//   cache: new InMemoryCache(),
// });
  

export default function App() {
  return (
   
    // <ApolloProvider client={client}>
    //   <Test />
    // </ApolloProvider>
  <Provider>
    <NavigationContainer>
      <HomeStack style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
    </NavigationContainer>
    </Provider>
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
