import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './screens/homeScreen';
import HomeStack from './routes/HomeStack';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
    </NavigationContainer>
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
