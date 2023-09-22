import { View, Text ,ActivityIndicator} from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = () => {
  const loading = true;
  const userToken = null;
  // const dispatch = useDispatch();
  // const { userToken, loading } = useSelector((state) => state.user);

  // const getSavedUserData = async () => {
  //   const UserData = await SecureStore.getItemAsync("UserData");

  //   if (UserData) {
  //     const { token, user } = JSON.parse(UserData);
  //     dispatch(setUser({ token, user }));
  //   }
  //   dispatch(setLoading(false));
  // };

  // useEffect(() => {
  //   if (!userToken) {
  //     getSavedUserData();
  //   }
  // }, []);

  return (
    <>
      {/* {loading && ( */}
        <View className="flex-1 items-center justify-center">
          {/* <ActivityIndicator size={"large"} color={'red'} /> */}
        </View>
      {/* )} */}
      {/* {!loading && ( */}
        <NavigationContainer>
          {false ? <StackNavigation /> : <AuthStack />}
        </NavigationContainer>
      {/* )} */}
    </>
  );
};

export default AppStack;
