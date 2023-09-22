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
    <View style={styles.container}  >
      <ImageBackground source={item.img} style={{ width, height }}  >
        <View
          style={{
            position: "absolute",
            // top: 0,
            // left: 0,
            // right: 0,
            bottom: 300,
            // justifyContent: "center",
            // alignItems: "center",
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
    </View>

    // <View style={{ width, height }} className="">
    //   <Image
    //     source={item.img}
    //     style={[{  height, resizeMode: "contain" }]}
    //   />
    //   <View className="flex items-center justify-center space-y-4 px-2">
    //     <Text className={"text-3xl font-bold text-black "}>{item.title}</Text>
    //     <Text className={"text-sm font-base text-black  "}>{item.text}</Text>
    //   </View>
    // </View>
  );
};
export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
