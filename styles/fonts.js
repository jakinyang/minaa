import {
  useFonts,
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

export default () => {
  let [fontsLoaded] = useFonts({
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
  });
};