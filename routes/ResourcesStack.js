import * as React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileTab from '../screens/ProfileScreen';
import ResourceIndex from '../screens/ResourceIndexScreen';
import ReportDetailScreen from '../screens/ReportDetailScreen';
import NewReportScreen from '../screens/NewReportScreen';
import ResourceCard from '../screens/resources/ResourceCard';
const Stack = createStackNavigator();

export default function ResourceStack() {
  const [resourceCards, setResourceCards] = React.useState() 

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResourceIndex"
        component={ResourceIndex}
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
    </Stack.Navigator>

  );
}