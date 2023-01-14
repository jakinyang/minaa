import React, { useState, useCallback, useMemo } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
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
import { PreferencesContext } from './shared/preferencesContext';
import { lightColor, darkColor } from './assets/ColorPalette';

const link = new HttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'omit'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


export default function App() {

  const DefaultTheme = {

    colors: {
      primary: lightColor.greenAccent[400],
      background: "#b8c3bd",
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  const DarkTheme = {

    colors: {
      primary: darkColor.greenAccent[800],
      background: "#262616",
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const [isThemeDark, setIsThemeDark] = useState(false);
  let theme = isThemeDark ? DarkTheme : DefaultTheme;
  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);
  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider >
        <ApolloProvider client={client}>
          <NavigationContainer theme={theme}>
            <BottomSheetModalProvider>
              <UserProvider>
                <HomeStack style={styles.container} />
              </UserProvider>
            </BottomSheetModalProvider>
          </NavigationContainer>
        </ApolloProvider>
      </PaperProvider>
    </PreferencesContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});