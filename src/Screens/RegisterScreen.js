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
import { showMessage } from "react-native-flash-message";
// import * as SecureStore from "expo-secure-store";
// import { useDispatch } from "react-redux";
import COLORS from "../Constants/style";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: true,
  showConfirmPassword: true,
  isError: false,
  loggingIn: false,
  isFocus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };

    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOGGING_IN":
      return { ...state, loggingIn: action.payload };
    case "SET_IS_FOCUS":
      return { ...state, isFocus: action.payload };
    case "SET_SHOW_PASSWORD":
      return { ...state, showPassword: action.payload };
    case "SET_SHOW_CONFIRM_PASSWORD":
      return { ...state, showConfirmPassword: action.payload };
    default:
      return state;
  }
};

const RegisterScreen = () => {
  const navigate = useNavigation();
  // const dispatch = useDispatch();
  const [state, dispatchState] = useReducer(reducer, initialState);

  const validateForm = () => {
    if (
      state.email === "" ||
      state.password === "" ||
      state.confirmPassword === ""
    ) {
      showMessage({
        message: "Invalid Details",
        description: "Please fill all the details",
        type: "danger",
      });
      return false;
    } else if (state.password !== state.confirmPassword) {
      showMessage({
        message: "Password",
        description: "Please check your passwords again",
        type: "danger",
      });
      return false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(state.email)) {
      showMessage({
        message: "Invalid Email",
        description: "Please enter a valid email",
        type: "danger",
      });
      return false;
    }
    return true;
  };

  const handelRegister = async () => {
    if (validateForm()) {
      try {
        // registerUser({
        //   email: state.email.toLocaleLowerCase(),
        //   password: state.password,
        // }).then(async (response) => {
        //   dispatchState({ type: "SET_LOGGING_IN", payload: true });

        //   try {
        //     const data = response.data;
        //     if (response.status !== 200) {
        //       showMessage({
        //         message: "Email already registered",
        //         description: "Please User already registered try new email",
        //         type: "danger",
        //       });

        //       dispatchState({ type: "SET_LOGGING_IN", payload: false });
        //     } else {
        //       const { token, user } = data;
        //       await SecureStore.setItemAsync(
        //         "UserData",
        //         JSON.stringify({ token, user })
        //       );
        //       dispatch(setUser({ token, user }));
        //       dispatchState({ type: "SET_LOGGING_IN", payload: false });
        //     }
        //   } catch (error) {
        //     console.error("try error", error);
        //   }
        // });
        navigate.navigate("AuthNumberScreen");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: "Register Now try later",
          description:
            "server error Cant register new user name try again later",
          type: "danger",
        });
      }
    }
  };

  const toggleShowPassword = () => {
    dispatchState({ type: "SET_SHOW_PASSWORD", payload: !state.showPassword });
  };

  const toggleFocus = () => {
    dispatchState({
      type: "SET_IS_FOCUS",
      payload: !state.isFocus,
    });
  };

  const toggleShowConfirmPassword = () => {
    dispatchState({
      type: "SET_SHOW_CONFIRM_PASSWORD",
      payload: !state.showConfirmPassword,
    });
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="px-6 space-y-5">
        <View className="pt-20">
          <Text className="text-3xl font-semibold"> Register a new </Text>
          <Text className="text-3xl font-semibold"> Account</Text>
        </View>
        <View className="space-y-6 py-5">
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
          <View>
            <AuthInputComponent
              value={state.confirmPassword}
              isFocus={state.isFocus}
              toggleFocus={toggleFocus}
              onChangeText={(text) =>
                dispatchState({ type: "SET_CONFIRM_PASSWORD", payload: text })
              }
              icon={"finger-print-outline"}
              inputName="Confirm Password"
              keyboardType="default"
              placeholder="Confirm Password"
              showPassword={state.showConfirmPassword}
              toggleShowConfirmPassword={toggleShowConfirmPassword}
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
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handelRegister}
            activeOpacity={0.6}
            className={` bg-[#FFD84E] py-5 px-6  rounded-3xl flex-row items-center justify-center space-x-5`}
          >
            <Text className="font-semibold">Register</Text>
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
            Have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("Login");
            }}
          >
            <Text className="text-[13px] font-bold ">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
