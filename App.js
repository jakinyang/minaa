import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeStack from './routes/HomeStack';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Test from './src/sample';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            {/* <HomeStack style={styles.container} /> */}
            <Test />
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
