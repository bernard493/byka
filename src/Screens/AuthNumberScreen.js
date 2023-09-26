import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useReducer, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
// import { useDispatch } from "react-redux";
import PhoneInput from "react-native-international-phone-number";

const AuthNumberScreen = () => {
  const navigation = useNavigation();
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
      <View className="px-6 space-y-3 pt-20">
        <View className="pt-20 space-y-3">
          <View>
            <Text className="text-3xl font-semibold">Enter your </Text>
            <Text className="text-3xl font-semibold">Mobile Number</Text>
          </View>
          <Text className="text-lg text-gray-500">
            We will send you a verification code
          </Text>
        </View>
        <View className="space-y-6 py-10">
          <View>
            <PhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              containerStyle={{
                backgroundColor: "#DEDEDE",
                borderWidth: 0,
                height: 60,
                borderRadius: 15,
              }}
              flagContainerStyle={{
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderRightWidth: 1,
                backgroundColor: "#DEDEDE",
                justifyContent: "center",
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AuthCodeScreen", {
                Number: `${selectedCountry?.callingCode} ${inputValue}`,
              })
            }
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

export default AuthNumberScreen;

// <Text>
//                 Country:{" "}
//                 {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
//               </Text>
//               <Text>
//                 Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
//               </Text>
