import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useReducer, useState } from "react";
import AuthInputComponent from "../Components/authInputComponent/AuthInputComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
// import { useDispatch } from "react-redux";
import COLORS from "../Constants/style";
import PhoneInput from "react-native-international-phone-number";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const AuthCodeScreen = ({ route }) => {
  // const { Number  } = route.params;
  const Navigator = useNavigation()
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(3);

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="px-6 space-y-3 pt-20">
        <View className="pt-20 space-y-3">
          <View>
            <Text className="text-3xl font-semibold">OTP verification </Text>
          </View>
          <View>
            <Text className="text-lg text-gray-500">Code has been sent to</Text>
            {/* <Text className="text-md text-gray-500">{Number && Number}</Text> */}
          </View>
        </View>
        <View className=" py-10">
          <View>
            <OTPInputView
              style={{ width: "auto", height: 100 }}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                handleChange(code);
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={()=>navigator.replace("Home")}
            activeOpacity={0.6}
            className={` bg-[#FFD84E] py-5 mx-20 px-6  rounded-3xl flex-row items-center justify-center space-x-5`}
          >
            <Text className="font-semibold">Verify</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center space-x-2 py-4">
          <Text>Did't receive code ?</Text>
          <TouchableOpacity disabled={timer > 0 ? true : false}>
            <Text className="font-bold">Resend ({timer}s)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  underlineStyleBase: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    borderWidth: 0,
    borderColor: "black",
    color: "black",
    fontSize: 18,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.gray,
    borderWidth: 2,
  },
});
export default AuthCodeScreen;

// <Text>
//                 Country:{" "}
//                 {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
//               </Text>
//               <Text>
//                 Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
//               </Text>
