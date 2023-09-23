import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../Constants/style";

const AuthInputComponent = ({
  value,
  onChangeText,
  icon,
  inputName,
  keyboardType,
  placeholder,
  showPassword,
  toggleShowPassword,
  toggleShowConfirmPassword,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  onFocus = () => {
    setIsFocus(true);
  };

  onBlur = () => {
    setIsFocus(false);
  };
  return (
    <>
      {inputName === "Password" || inputName === "Confirm Password" ? (
        <View className=" space-y-3 ">
          <View
            className={`flex-row items-center  space-x-4   ${
              isFocus
                ? `border-2 border-[${COLORS.gray}] bg-gray-200`
                : "bg-gray-100"
            } px-3 py-5  justify-between rounded-xl`}
          >
            <Ionicons name={icon} size={25} color="gray" />
            <TextInput
              value={value}
              onFocus={onFocus}
              onBlur={onBlur}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              placeholder={placeholder}
              secureTextEntry={showPassword}
              className="flex-1  h-full"
            />
            {showPassword ? (
              <TouchableOpacity
                onPress={
                  inputName === "Password"
                    ? toggleShowPassword
                    : toggleShowConfirmPassword
                }
              >
                <Ionicons name="eye" size={23} color="gray" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={
                  inputName === "Password"
                    ? toggleShowPassword
                    : toggleShowConfirmPassword
                }
              >
                <Ionicons name="eye-off" size={23} color="gray" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View className=" space-y-2">
          <View
            className={`flex-row items-center  space-x-3 bg-gray-100  ${
              isFocus  ? `border-2 border-[${COLORS.gray}] bg-gray-200`
              : "bg-gray-100"
            } px-3 py-5 justify-between rounded-xl`}
          >
            <Ionicons
              name={icon}
              size={25}
              color={`${isFocus ? COLORS.gray : "gray"}`}
            />
            <TextInput
              value={value}
              onFocus={onFocus}
              onBlur={onBlur}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              placeholder={placeholder}
              className=" w-full h-full"
            />
            <Ionicons name="chevron-down-outline" size={30} color={"gray"} />
          </View>
        </View>
      )}
    </>
  );
};

export default AuthInputComponent;
