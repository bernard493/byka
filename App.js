import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// import FlashMessage from "react-native-flash-message";
// import { NativeBaseProvider } from "native-base";
// import { store } from "./src/redux/store/store";
// import { Provider } from "react-redux";
import AppStack from "./src/StackNavigation/AppStack";

export default function App() {
  return (
    // <Provider store={store}>
    //   <NativeBaseProvider>
    //   </NativeBaseProvider>
    //   <FlashMessage position="top" />
    // </Provider>
    <>
      <StatusBar  />
      <AppStack />
    </>
   
  );
}
