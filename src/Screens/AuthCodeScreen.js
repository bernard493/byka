import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useReducer, useState } from "react";
import AuthInputComponent from "../Components/authInputComponent/AuthInputComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
// import { useDispatch } from "react-redux";
import COLORS from "../Constants/style";
import PhoneInput from "react-native-international-phone-number";

const AuthCodeScreen = ({ route }) => {
  const { Number } = route.params;
  console.log(route);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="px-6 space-y-3">
        <View className="pt-20 space-y-3">
          <View>
            <Text className="text-3xl font-semibold">OTP verification </Text>
          </View>
          <View>
            <Text className="text-lg text-gray-500">Code has been sent to</Text>
            <Text className="text-md text-gray-500">{Number}</Text>
          </View>
        </View>
        <View className="space-y-6 py-10">
          <View></View>
        </View>
        <View>
          <TouchableOpacity
            // onPress={}
            activeOpacity={0.6}
            className={` bg-[#FFD84E] py-5 px-6  rounded-3xl flex-row items-center justify-center space-x-5`}
          >
            <Text className="font-semibold">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthCodeScreen;

// <Text>
//                 Country:{" "}
//                 {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
//               </Text>
//               <Text>
//                 Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
//               </Text>
