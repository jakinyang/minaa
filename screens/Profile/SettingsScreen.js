import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import { Button, IconButton, MD3Colors, useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
// import FetchAllReports from '../../src/Queries/FetchAllReports';
import { PreferencesContext } from '../../shared/preferencesContext';

export default function SettingsScreen({ navigation }) {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
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
        <Appbar.Header
          theme={{
            colors: {
              primary: theme?.colors.surface,
            },
          }}
        >
          <Appbar.Content />
          <Switch
            color={'lightseagreen'}
            value={isThemeDark}
            onValueChange={toggleTheme}
          />
        </Appbar.Header>
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
  },
  item1: {
    margin: 5,
    padding: 2,
    backgroundColor: 'lightseagreen'
  },
  item2: {
    margin: 5,
    padding: 2,
    backgroundColor: 'red'
  },
  item3: {
    margin: 5,
    padding: 2,
    backgroundColor: 'lightslategray'
  },
  item4: {
    margin: 5,
    padding: 2,
    backgroundColor: 'lightblue'
  }
});