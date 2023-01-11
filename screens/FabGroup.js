import { Portal, FAB } from "react-native-paper"
import { useState } from "react"

export default function FabGroup({navigation, openModal, resetRegionHandler}) {
  // Fab Group Helpers
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  
  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'calendar-today' : 'plus'}
        actions={[
          // { icon: 'plus', onPress: openModal },
          { icon: 'account-box-outline', label: 'Profile', onPress: () => navigation.navigate('ProfileTab') },
          { icon: 'book', label: 'Resources', onPress: openModal },
          { icon: 'crosshairs', label: 'Return', onPress: resetRegionHandler },
        ]}
        onStateChange={onStateChange}
      />
    </Portal>
  )
}