import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../Screens/HomeScreen';

const StackNavigation = () => {

  const Stack = createNativeStackNavigator();


  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigation