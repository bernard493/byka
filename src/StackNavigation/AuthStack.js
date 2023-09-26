import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import AuthNumberScreen from "../Screens/AuthNumberScreen";
import AuthCodeScreen from "../Screens/AuthCodeScreen";
import Onboarding from "../Components/Onboarding/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
// The AuthStack function is responsible for defining the navigation stack for the
//  authentication screens in the app.
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthCodeScreen" component={AuthCodeScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AuthNumberScreen" component={AuthNumberScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;
