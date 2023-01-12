import React, {useRef, useMemo} from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, IconButton, MD3Colors, Button } from 'react-native-paper';
import ScreenHeader from '../../shared/ScreenHeader';
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
    <>
      <ScreenHeader/>
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
            icon="history"
            mode="elevated"
            onPress={() => navigation.navigate('History')}
          >
            History
          </Button>
          <Button
            style={styles.button}
            icon="cog"
            mode="elevated"
            onPress={() => navigation.navigate('Settings')}
          >
            Settings
          </Button>
          <Button
            style={styles.button}
            icon="bell"
            mode="elevated"
            onPress={openModal}
          >
            Notices
          </Button>
        </View>
        <BottomSheet 
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
        >
          <MockTable />
        </BottomSheet>
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
  avatar: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
  },
  buttonContainer: {
    padding: 50,

  },
  button: {
    margin: 10,
  },

});