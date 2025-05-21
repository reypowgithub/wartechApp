import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function LoginButton() {
  const loginHandler = () => {
    router.replace("/(main)");
  };

  return (
    <TouchableOpacity onPress={loginHandler}>
      <View className="bg-[#FA4A0C] p-4 my-7 mx-8 rounded-[30px] h-[70px] justify-center items-center">
        <Text className="text-white text-[17px]">Login</Text>
      </View>
    </TouchableOpacity>
  );
}
