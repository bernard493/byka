import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useReducer } from "react";
import AuthInputComponent from "../Components/authInputComponent/AuthInputComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
// import { useDispatch } from "react-redux";
import COLORS from "../Constants/style";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const initialState = {
  email: "",
  password: "",
  showPassword: true,
  loading: false,
  isError: false,
  loggingIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_SHOW_PASSWORD":
      return { ...state, showPassword: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOGGING_IN":
      return { ...state, loggingIn: action.payload };
    default:
      return state;
  }
};

const LoginScreen = () => {
  const navigate = useNavigation();
  // const dispatch = useDispatch();
  const [state, dispatchState] = useReducer(reducer, initialState);

  const toggleShowPassword = () => {
    dispatchState({ type: "SET_SHOW_PASSWORD", payload: !state.showPassword });
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="px-6 space-y-10">
        <View className="pt-20">
          <Text className="text-3xl font-semibold"> Login to your </Text>
          <Text className="text-3xl font-semibold"> Account</Text>
        </View>
        <View className="space-y-6 py-10">
          <View>
            <AuthInputComponent
              value={state.email}
              onChangeText={(text) =>
                dispatchState({ type: "SET_EMAIL", payload: text })
              }
              icon={"mail-unread-outline"}
              inputName="Email"
              keyboardType="email-address"
              placeholder=" Email"
            />
          </View>
          <View>
            <AuthInputComponent
              value={state.password}
              onChangeText={(text) =>
                dispatchState({ type: "SET_PASSWORD", payload: text })
              }
              icon={"finger-print-outline"}
              inputName="Password"
              keyboardType="default"
              placeholder="Password"
              showPassword={state.showPassword}
              toggleShowPassword={toggleShowPassword}
            />
          </View>
          <View className="flex-row items-center justify-between">
            <BouncyCheckbox
              size={20}
              fillColor="gray"
              unfillColor="#FFFFFF"
              text="Remember me"
              iconStyle={{ borderColor: "gray" }}
              innerIconStyle={{ borderWidth: 3 }}
              onPress={(isChecked) => {
                // console.log(isChecked);
              }}
            />

            <TouchableOpacity>
              <Text className={`text-[${COLORS.vault}]`}>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              // navigate.replace("Login");
            }}
            activeOpacity={0.6}
            className={` bg-[#FFD84E] py-5 px-6  rounded-3xl flex-row items-center justify-center space-x-5`}
          >
            <Text className="font-semibold">Sign in</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center space-x-2">
          <View className="border border-gray-400 w-10" />
          <Text className="text-[13px] font-medium ">Or Continue with</Text>
          <View className="border border-gray-400 w-10" />
        </View>
        <View className="flex-row items-center justify-center space-x-5">
          <TouchableOpacity>
            <Image
              source={require("../assets/icons8-facebook-48.png")}
              className="h-15 w-15"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons8-google-48.png")}
              className="h-15 w-15"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons8-linkedin-48.png")}
              className="h-15 w-15"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center space-x-2">
          <Text className="text-[13px] font-medium text-gray-500">
            Don't have an account?
          </Text>
          <TouchableOpacity 
          onPress={() => {
              navigate.navigate("Register");
            }} >
            <Text className="text-[13px] font-bold ">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
