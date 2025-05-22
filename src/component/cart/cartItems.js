import { Image, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import icon from "../../../assets/icon.png";
import { useState, useRef, useCallback } from "react";
import api from "../../lib/api";
import useAuthStore from "../../store/authStore";

export default function CartItem({ name, price, quantity, productId, onDelete}) {
  const [quantityState, setQuantityState] = useState(quantity);
  const debounceTimer = useRef(null);
  const token = useAuthStore((state) => state.token); 
  console
  const updateQuantityToAPI = async (productId, newQuantity) => {
    try {
      const response = await api.patch(
        `/cart/${productId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('✅ Quantity updated:', response.data);
    } catch (error) {
      console.error('❌ Error updating quantity:', error.message);
    }
  };
  

  const debounceChange = useCallback((operation) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setQuantityState((prev) => {
        let newQuantity = prev;
        if (operation === "increment") {
          newQuantity = prev + 1;
        } else if (operation === "decrement" && prev > 1) {
          newQuantity = prev - 1;
        }
        updateQuantityToAPI(productId, newQuantity );
        return newQuantity;
      });
    }, 500);
  }, []);

  return (
    <View className="m-4">
      <View className="flex-row bg-white rounded-[30px] items-center shadow-md">
        <Image source={require('../../../assets/')} className="w-[70px] h-[70px] rounded-full m-4" />
        <View className="flex-1 justify-between ml-4">
          <View className="flex-1 m-2">
            {/* Nama */}
            <Text className="font-bold text-[20px] text-black mb-3">
              {name}
            </Text>

            {/* Harga */}
            <View className="flex-row my-1">
              <Text className="text-red-500 font-bold text-[16px]">Rp. </Text>
              <Text className="text-red-500 font-bold text-[16px]">
                {price}
              </Text>
            </View>

            {/* Quantity Control & Delete */}
            <View className="flex-row items-center justify-end">
              {/* Quantity Control */}
              <View className="flex-row items-center bg-[#FA4A0C] p-3 rounded-[30px] space-x-4 m-2">
                <TouchableOpacity onPress={() => debounceChange("decrement")}>
                  <Icon name="minus" size={16} color="white" />
                </TouchableOpacity>
                <Text className="text-white font-bold text-[16px] ms-3">
                  {quantityState}
                </Text>
                <TouchableOpacity onPress={() => debounceChange("increment")} className="ms-3">
                  <Icon name="plus" size={16} color="white" />
                </TouchableOpacity>
              </View>

              {/* Delete Button */}
              <TouchableOpacity
                onPress={onDelete}
                className="bg-red-500 p-3 rounded-[30px]"
              >
                <Icon name="trash" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
