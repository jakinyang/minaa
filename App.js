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


const link = new HttpLink({
  uri: 'https://fast-shrimps-happen-64-201-201-32.loca.lt',
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