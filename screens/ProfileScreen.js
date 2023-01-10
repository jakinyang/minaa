import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, IconButton, MD3Colors } from 'react-native-paper';


export default function ProfileTab({ navigation }) {
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
        <Avatar.Text
          size={50}
          label="JS"
        />
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