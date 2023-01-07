import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ResourceIndex from '../screens/ResourceIndexScreen';

import ResourceOne from '../screens/resources/ResourceOne';
import ResourceTwo from '../screens/resources/ResourceTwo';
import ResourceThree from '../screens/resources/ResourceThree';


function ProfileTab({ navigation }) {
  return (
    <View style={{ width: "70%", height: "100%", alignSelf: "flex-end", justifyContent: 'center', alignItems: 'center', backgroundColor: "lightpink" }}>
      <Text>Profile Tab</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function HomeStack() {
  return (
  
    <Stack.Navigator>
    
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="ProfileTab" 
        component={ProfileTab}
        options={{
          title: 'Profile',
          cardStyle: {
            ...TransitionPresets.SlideFromRightIOS
          },
        }}
         />
    
      <Stack.Screen
        name="ResourceIndexScreen"
        component={ResourceIndex}
        options={{
          title: 'Resources',
          cardStyle: {alignSelf: 'center', height: "90%", width: "90%", top: "10%", borderRadius: 20},
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen 
        name="ResourceOne" 
        component={ResourceOne} 
        options={
          { cardStyle: { alignSelf: 'center',height: "90%", width: "90%", top: "10%", borderRadius: 20}}
          }
        />
      <Stack.Screen 
        name="ResourceTwo" 
        component={ResourceTwo} 
        options={
          { cardStyle: { alignSelf: 'center',height: "90%", width: "90%", top: "10%", borderRadius: 20}}
          }
        />
      <Stack.Screen 
        name="ResourceThree" 
        component={ResourceThree} 
        options={
          { cardStyle: { alignSelf: 'center',height: "90%", width: "90%", top: "10%", borderRadius: 20}}
          }
        />
    </Stack.Navigator>
   
  );
}


