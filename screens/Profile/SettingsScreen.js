import React, { useContext, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, FlatList, ScrollView } from 'react-native';
import { IconButton, MD3Colors, useTheme, Switch, Card,  } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { PreferencesContext } from '../../shared/preferencesContext';
import UserInfo
  from './UserInfo';
export default function SettingsScreen({ navigation }) {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
  const [emailNotification, setEmailNotification] = useState(false)
  const [defaultLocation, setDefaultLocation] = useState(false)

  const goBack = () => {
    navigation.goBack();
  }
  return (
    <>
      <SafeAreaView  />
   
      <ScrollView>
      <View
        style={styles.container}
      >
        <IconButton
        icon="arrow-left"
        size={30}
        onPress={goBack}
        style={styles.backButton}
      />
        <Card
          style={styles.card}
        >
          <Card.Content>
            <View style={styles.row}>
              <Text style={styles.rowText}>Dark Theme</Text>
              <Switch
                color={'lightseagreen'}
                value={isThemeDark}
                onValueChange={toggleTheme}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText2}>Email Notification</Text>
              <Switch
                style={{ marginLeft: 8 }}
                color={'lightseagreen'}
                value={emailNotification}
                onValueChange={() => setEmailNotification(!emailNotification)}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText2}>Default Location</Text>
              <Switch
                style={{ marginLeft: 15 }}
                color={'lightseagreen'}
                value={defaultLocation}
                onValueChange={() => setDefaultLocation(!defaultLocation)}
              />
            </View>
          </Card.Content>
        </Card>

        <Card
          style={styles.card2}
        >
          <Card.Content>

            <UserInfo />
          </Card.Content>
        </Card>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 15
  },
  card: {
    // flex: 1,
    marginTop: 400,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  card2: {
    // flex: 1,
    marginTop: 40,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  appBarStyle: {
    margin: 10,
    padding: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  rowText: {
    marginRight: 100,
    fontFamily: 'OpenSans_400Regular',
  },
  rowText2: {
    marginRight: 60,
    fontFamily: 'OpenSans_400Regular',
  },
  backButton: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 4,
  }
});