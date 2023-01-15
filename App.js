import React, { useState, useCallback, useMemo } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

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
import { lightColor, darkColor, PaperThemeColorsLight, PaperThemeColorsDark } from './assets/ColorPalette';

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
      primary: lightColor.bluePrimary[400],
      background: "#b8c3bd",
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  const DarkTheme = {

    colors: {
      primary: darkColor.bluePrimary[800],
      background: "#262616",
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
  };
//Theme for paper provider
  const TestTheme = {
    ...PaperDefaultTheme,
    colors: {
      ...PaperThemeColorsLight.colors
    }
  }
  const TestDarkTheme = {
    ...PaperDefaultTheme,
    colors: {
      ...PaperThemeColorsDark.colors
    }
  }
  
  const [isThemeDark, setIsThemeDark] = useState(false);
  let testTheme = isThemeDark ? TestDarkTheme : TestTheme
  // let theme = isThemeDark ? DarkTheme : DefaultTheme;
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
      <PaperProvider theme={testTheme} >
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