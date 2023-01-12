import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import ScreenHeader from '../../shared/ScreenHeader';


export default function SettingsScreen({ navigation }) {
  return (
    <>
      <SafeAreaView />
      <ScreenHeader/>
      <View
        style={styles.container}
      >
        <IconButton
          icon="arrow-left"
          iconColor={MD3Colors.primary0}
          style={styles.goBack}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.textBox}>This is the Settings Page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    bottom: 30,
    right: 15
  },
  textBox: {
    bottom: 150,
  }
});