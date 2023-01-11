import React, {useRef, useMemo} from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export default function BottomSheet({navigation}) {
  // Bottom Sheet Helpers
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }
  
  return(
    <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <ResourceIndex />
      </BottomSheetModal>
  )
}

const styles = StyleSheet.create({
  bottomSheet: {
    paddingVertical: 10,
  }
});