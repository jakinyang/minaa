import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import HomeStack from './routes/HomeStack';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache,
});

export default function App() {
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
