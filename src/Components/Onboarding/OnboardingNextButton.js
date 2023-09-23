import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";
// import Svg, { Circle, G } from "react-native-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../Constants/style";
const OnboardingNextButton = ({  buttonScrollTo }) => {
 

 

  return (
    <View className="flex items-center justify-center  ">
      <TouchableOpacity
        onPress={buttonScrollTo}
        activeOpacity={0.6}
        className={` bg-[#FFD84E] py-3 px-6  rounded-full flex-row items-center justify-between space-x-5`}
      >
        <Text className="font-semibold">Next</Text>
        <Ionicons name="arrow-forward-outline" size={23} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingNextButton;
