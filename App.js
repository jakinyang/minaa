import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeStack from './routes/HomeStack';
import { 
  createHttpLink,
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { CURRENT_USER } from './src/Queries/GetCurrentUser';
import { useEffect } from 'react';


const link = new HttpLink({
  uri: 'https://twelve-masks-buy-64-201-201-32.loca.lt',
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
  //     const { data } = await client.query({
  //       query: CURRENT_USER,
  //       variables: { userId: "1" },
  //     });
  //     setUser(data.user);
  //     setUserSelected(true);
  //   };
  //   getUser();
  // }, [user]);


  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <HomeStack style={styles.container} />
          </NavigationContainer>
        </BottomSheetModalProvider>
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

// 64.201.201.32
