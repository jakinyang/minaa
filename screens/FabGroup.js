import { Portal, FAB } from "react-native-paper"
import { useState } from "react"

export default function FabGroup({navigation,  refreshHandler}) {
  // Fab Group Helpers
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  
  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'minus' : 'plus'}
        style={{ position: 'absolute', bottom: 100, left: 0 }}
        actions={[
          { icon: 'crosshairs', label: 'Return', onPress: console.log("Pressed!") },
          { icon: 'refresh', label: 'Refresh Location', onPress: refreshHandler },
        ]}
        onStateChange={onStateChange}
      />
    </Portal>
  )
}