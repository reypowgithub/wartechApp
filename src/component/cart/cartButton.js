import { router } from "expo-router";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";

export default function CartButton({loading, handlePress, buttonText}) {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      disabled={loading}
    >
      <View className="bg-[#FA4A0C] p-4 my-7 mx-8 rounded-[30px] h-[70px] justify-center items-center">
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center text-[16px]">{buttonText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
