import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';


export default function SettingsScreen({ navigation }) {
  return (
    <>
      <SafeAreaView />
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
        <Text>This is the Settings Page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 15
  }
});