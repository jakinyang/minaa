import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import HomeStack from './routes/HomeStack';
import { 
  createHttpLink,
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useEffect } from 'react';

const link = new HttpLink({
  // http://localhost:4000/
  uri: 'https://solid-hands-drum-64-201-201-32.loca.lt',
  credentials: 'omit'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default function App() {

  // const [user, setUser] = React.useState(null);
  // const [userSelected, setUserSelected] = React.useState(false);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data } = await useQuery({
  //       query: CURRENT_USER,
  //       variables: { userId: "1" },
  //     });
  //     setUser(data.user);
  //     setUserSelected(true);
  //   };
  // }, [user]);


    // add these back into homestack props if thats a good idea...
  // setUserSelected={setUserSelected} setUser={setUser}

  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <HomeStack style={styles.container} />
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