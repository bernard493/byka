import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import slideDate from "./slides";
import OnboardingItem from "./OnboardingItem";
import OnboardingPaginator from "./OnboardingPaginator";
import OnboardingNextButton from "./OnboardingNextButton";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../Constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";

const Onboarding = () => {
  const navigate = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const buttonScrollTo = () => {
    if (currentIndex < slideDate.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      setLastSlide(true);
    }
  };

  return (
    <View className="">
      <FlatList
        data={slideDate}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />

      <View className=" absolute z-20 bottom-20 space-y-10 px-5 w-full ">
        <View>
          <OnboardingPaginator data={slideDate} scrollX={scrollX} />
        </View>
        { !lastSlide ? (
          <View className=" flex-row items-center  justify-between">
            <View className="flex">
              <TouchableOpacity
                onPress={() => {
                  navigate.replace("Login");
                }}
                className="pr-6  text-md font-semibold"
              >
                <Text className={`text-white font-medium`}>Skip</Text>
              </TouchableOpacity>
            </View>
            <View>
              <OnboardingNextButton
                percentage={(currentIndex + 1) * (100 / slideDate.length)}
                buttonScrollTo={buttonScrollTo}
              />
            </View>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate.replace("Login");
              }}
              activeOpacity={0.6}
              className={` bg-[#FFD84E] py-5 px-6  rounded-full flex-row items-center justify-center space-x-5`}
            >
              <Text className="font-semibold">Get Started</Text>
              <Ionicons
                name="arrow-forward-outline"
                size={23}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Onboarding;
