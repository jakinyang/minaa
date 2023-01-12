import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Appbar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ScreenHeader({ navigation }) {

  const _handleSearch = () => alert('Searching');

  if (navigation) {
    return (
      <SafeAreaProvider> 
       <Appbar.Header style={ styles.screenHeader } >
         <Appbar.Content title="Minaa" />
         <Appbar.Action icon="magnify" onPress={_handleSearch} />
       </Appbar.Header>
      </SafeAreaProvider> 
     ); 
  }

  return (
    <SafeAreaProvider> 
     <Appbar.Header style={ styles.screenHeaderDefault }>
       <Appbar.Content title="Minaa" />
       <Appbar.Action icon="magnify" onPress={_handleSearch} />
     </Appbar.Header>
    </SafeAreaProvider> 
   );
}

const styles = StyleSheet.create({
  screenHeader: {
    position: 'absolute',
    top: 0,
    opacity: 0.8,
    elevation: 0,
    textAlign: 'center-align',
  },
  screenHeaderDefault: {
    opacity: 0.8,
    top: 0,
    elevation: 0,
  },
})

