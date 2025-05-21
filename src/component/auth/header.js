import { View, Text, Image } from "react-native";
import logoWartech from "../../../assets/logo_wartech.png";

export default function LoginHeader() {
  return (
    <View className=" bg-[#FFFFFF] justify-center items-center px-10 rounded-b-3xl ">
      <Image source={logoWartech} className="w-40 h-40" resizeMode="contain" />
      <Text className=" text-black text-xl">Cobain Dong Wartech!</Text>
      <View className="h-px bg-orange-500 w-60 py-0.5" />
    </View>
  );
}
