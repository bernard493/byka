import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import COLORS from "../../Constants/style";
const OnboardingItem = ({ item }) => {
  const { width, height } = useWindowDimensions();

  return (
      <ImageBackground source={item.img} style={{ width, height }}>
        <View
          style={{
            position: "absolute",
            bottom: 300,
    
          }}
        >
          <View className=" space-y-4  px-4">
            <View>
              <Text className={"text-3xl font-bold text-white "}>
                {item.title1}
              </Text>
              <Text className={`text-2xl font-bold text-[#FFD84E]  `}>
                {item.title2}
              </Text>
            </View>
            <Text className={"text-md  font-base text-white  "}>
              {item.text}
            </Text>
          </View>
        </View>
      </ImageBackground>

  );
};
export default OnboardingItem;

