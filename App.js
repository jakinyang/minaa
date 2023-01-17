import { LogBox } from 'react-native';
import React, {
  useState,
  useCallback,
  useMemo
} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';

// Font Imports
import { useFonts } from 'expo-font';
import {
  Barlow_100Thin,
  Barlow_100Thin_Italic,
  Barlow_200ExtraLight,
  Barlow_200ExtraLight_Italic,
  Barlow_300Light,
  Barlow_300Light_Italic,
  Barlow_400Regular,
  Barlow_400Regular_Italic,
  Barlow_500Medium,
  Barlow_500Medium_Italic,
  Barlow_600SemiBold,
  Barlow_600SemiBold_Italic,
  Barlow_700Bold,
  Barlow_700Bold_Italic,
  Barlow_800ExtraBold,
  Barlow_800ExtraBold_Italic,
  Barlow_900Black,
  Barlow_900Black_Italic,
} from '@expo-google-fonts/barlow';

import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import {
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from '@expo-google-fonts/raleway';
import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

// Components and Providers
import HomeStack from './routes/HomeStack';
import UserProvider from './shared/userContext';
import FontProvider from './shared/fontContext';
import { PreferencesContext } from './shared/preferencesContext';
import { lightColor, darkColor, PaperThemeColorsLight, PaperThemeColorsDark } from './assets/ColorPalette';
import Loading from './screens/Loading';

LogBox.ignoreAllLogs(); //Ignore all log notifications

const link = new HttpLink({
  uri: "http://192.168.1.75:4000",
  credentials: 'omit'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
export default function App() {
  const DefaultNavTheme = {
    ...DefaultTheme,
    colors: {
      // primary: lightColor.lapizLazuli[800],
      background: lightColor.grayAccent[100],
      // card: 'rgb(255, 255, 255)',
      // text: 'rgb(28, 28, 30)',
      // border: 'rgb(199, 199, 204)',
      // notification: 'rgb(255, 69, 58)',
    },
  };
  const DarkNavTheme = {
    ...DefaultTheme,
    colors: {
      // primary: lightColor.lapizLazuli[800],
      background: "#192331",
      // card: 'rgb(18, 18, 18)',
      // text: 'rgb(229, 229, 231)',
      // border: 'rgb(39, 39, 41)',
      // notification: 'rgb(255, 69, 58)',
    },
  };

  const TestTheme = {
    ...PaperDefaultTheme,
    colors: {
      ...PaperThemeColorsLight.colors
    }
  }
  const TestThemeDark = {
    ...PaperDefaultTheme,
    colors: {
      ...PaperThemeColorsDark.colors
    }
  }
  const [isThemeDark, setIsThemeDark] = useState(false);
  let themeNav = isThemeDark ? DarkNavTheme : DefaultNavTheme;
  let theme = isThemeDark? TestThemeDark : TestTheme;
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
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
    Barlow_100Thin,
    Barlow_200ExtraLight,
    Barlow_300Light,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
    Barlow_800ExtraBold,
    Barlow_900Black,
  })
  
  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme} >
        <ApolloProvider client={client}>
          <NavigationContainer theme={themeNav}>
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