import React, {useRef, useMemo} from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import ResourceIndex from './Resources/ResourceIndexScreen';

export default function BottomSheet({navigation, bottomSheetModalRef, snapPoints}) {
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