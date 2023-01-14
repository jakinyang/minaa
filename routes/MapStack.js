import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomeScreenRemaster from '../screens/HomeScreenRemaster';
import HomeScreen from '../screens/HomeScreen';
import ProfileTab from '../screens/Profile/ProfileScreen';
import ReportDetailScreen from '../screens/Reports/ReportDetailScreen';
import NewReportScreen from '../screens/Reports/NewReportScreen';

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreenRemaster"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Map"
        component={HomeScreenRemaster}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          headerShown: false,
          cardStyle: {
            ...TransitionPresets.SlideFromRightIOS
          },
        }}
      />
      <Stack.Screen
        name='NewReportScreen'
        component={NewReportScreen}
        options={{
          title: "New Report",
          cardStyle: {
            ...TransitionPresets.ModalSlideFromBottomIOS
          },
        }}
      />
      <Stack.Screen
        name='ReportDetailScreen'
        component={ReportDetailScreen}
        options={{
          title: "ReportDetailScreen",
          cardStyle: {
            ...TransitionPresets.ModalSlideFromBottomIOS
          },
        }}
      />
    </Stack.Navigator>
  );
}