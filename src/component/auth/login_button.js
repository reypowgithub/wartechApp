import { router } from "expo-router";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";

export default function LoginButton({loading, handleLogin}) {
  const loginHandler = () => {
    router.replace("/(main)");
  };

  return (
    <TouchableOpacity 
      onPress={handleLogin}
      disabled={loading}
    >
      <View className="bg-[#FA4A0C] p-4 my-7 mx-8 rounded-[30px] h-[70px] justify-center items-center">
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-[17px]">Login</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
