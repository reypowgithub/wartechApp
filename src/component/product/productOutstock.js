import { Image, Text, View } from "react-native";
import icon from "../../../assets/icon.png";

export default function ProductItem_outstock() {
  return (
    <View className="m-5 items-center justify-center mt-[70]">
      <View className="bg-white pt-12 p-4 rounded-[30] items-center justify-center w-[220px] h-[300px] shadow-md relative ">
        <Text className="font-bold mb-1 text-[20px] text-[#FF6C64] text-center mt-10">
          Pecel Sambal Lele
        </Text>
        <View className="bg-[#FA4A0C1A] p-3 rounded-[30px] mt-5">
          <Text className="text-[#FA4A0C] font-light text-[12px]">
            Kabarin Kalo Restock!
          </Text>
        </View>
      </View>
      <Image
        source={icon}
        className="w-[164] h-[164] rounded-full absolute -top-[60]"
      />
    </View>
  );
}
