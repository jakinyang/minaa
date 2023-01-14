import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeStack from './routes/HomeStack';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import UserProvider from './shared/userContext';

const link = new HttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'omit'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <UserProvider>
              <HomeStack style={styles.container} />
            </UserProvider>
          </BottomSheetModalProvider>
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});