// Imports

import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Resource Index"
        onPress={() => navigation.navigate('ResourceIndex')}
      />
      <Button
        title="Go to Profile Tab"
        onPress={() => navigation.navigate('ProfileTab')}
      />
    </View>
  );
}

function ResourceIndex({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightcoral", height: "90%" }}>
      <Text>Resouce Index screen</Text>
      <Button
        title="Go to Article 1"
        onPress={() => navigation.navigate('ResourceOne')}
      />
      <Button
        title="Go to Article 2"
        onPress={() => navigation.navigate('ResourceTwo')}
      />
      <Button
        title="Go to Article 3"
        onPress={() => navigation.navigate('ResourceThree')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ResourceOne({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightseagreen", height: "90%" }}>
      <Text>Resource 1</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ResourceTwo({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightblue", height: "90%" }}>
      <Text>Resource 2</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ResourceThree({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "lightgreen", height: "90%" }}>
      <Text>Resource 3</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ProfileTab({ navigation }) {
  return (
    <View style={{ width: "70%", height: "100%", alignSelf: "flex-end", justifyContent: 'center', alignItems: 'center', backgroundColor: "lightpink" }}>
      <Text>Profile Tab</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button 
        title="Go to resource Index" 
        onPress={() => {
          navigation.popToTop()
          setTimeout(() => navigation.navigate('ResourceIndex'), 100) 
        }} />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main HomeScreen Component
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
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
        name="ResourceIndex"
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

export default function App() {
  return (
    <NavigationContainer>
      <MyStack style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
    </NavigationContainer>
  );
}
