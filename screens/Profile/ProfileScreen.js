// Imports
import React, { useRef, useMemo } from 'react';
import { View, StyleSheet, SafeAreaView, } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

// Components
import UserCarousel from './UserReports/UserCarousel';
import BottomSheet from '../BottomSheet';
import MockTable from './MockTable';

export default function ProfileScreen({ navigation }) {
  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }

  return (
    <View
      style={styles.container}
    >
      <Avatar.Text
        style={styles.avatar}
        size={50}
        label="JS"
      />
      <View
        style={styles.buttonContainer}
      >
        <Button
          style={styles.button}
          icon="cog"
          mode="elevated"
          onPress={() => navigation.navigate('Settings')}
        >
          SETTINGS
        </Button>
        <Button
          style={styles.button}
          icon="bookmark"
          mode="elevated"
          onPress={openModal}
        >
          SAVED
        </Button>
      </View>
      <UserCarousel />
      <BottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <MockTable />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatar: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  buttonContainer: {
    padding: 50,
  },
  button: {
    margin: 10,
  },

});