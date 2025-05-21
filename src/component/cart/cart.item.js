import { Image, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import icon from "../../../assets/icon.png";

export default function CartItem() {
  return (
    <View className="m-4">
      <View className="flex-row bg-white rounded-[30px] items-center shadow-md ">
        <Image source={icon} className="w-[70px] h-[70px] rounded-full m-4" />
        <View className=" flex-1 justify-between ml-4 ">
          <View className="flex m-5">
            {/* Nama */}
            <Text className="font-bold text-[20px] text-black mb-3">
              Pecel Sambal Lele
            </Text>

            {/* Harga */}
            <View className="flex-row my-5">
              <Text className="text-red-500 font-bold text-[16px]">Rp. </Text>
              <Text className="text-red-500 font-bold text-[16px]">6.000</Text>
            </View>

            {/* Quantity Control & Delete */}
            <View className="flex-row items-center justify-end ">
              {/* Quantity Control */}
              <View className="flex-row items-center bg-[#FA4A0C] p-3 rounded-[30px] space-x-4 m-2">
                <TouchableOpacity>
                  <Icon name="minus" size={16} color="white" />
                </TouchableOpacity>
                <Text className="text-white font-bold text-[16px] ms-3">1</Text>
                <TouchableOpacity className="ms-3">
                  <Icon name="plus" size={16} color="white" />
                </TouchableOpacity>
              </View>

              {/* Delete Button */}
              <TouchableOpacity className="bg-red-500 p-3 rounded-[30px]">
                <Icon name="trash" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
