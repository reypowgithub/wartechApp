import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CartItem from "../../component/cart/cartItems";
import CartButton from "../../component/cart/cartButton";
import { useState } from "react";
import { router } from "expo-router";

export default function Chart() {
  const [loading, setLoading] = useState(false);

  // Dummy Data State
  const [cartData, setCartData] = useState([
    { id: 1, name: "Pecel Sambal Lele", price: 6000 },
    { id: 2, name: "Ayam Geprek", price: 12000 },
  ]);

  // Render Item Function
  const renderItem = ({ item }) => (
    <CartItem
      name={item.name}
      price={item.price}
      onDelete={() => handleDelete(item.id)}
    />
  );

  // Handle Delete Item
  const handleDelete = (id) => {
    Alert.alert(
      "Hapus Item",
      "Yakin mau hapus item ini?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          onPress: () => {
            const newData = cartData.filter((item) => item.id !== id);
            setCartData(newData);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleCheckout = () => {
    setLoading(true);
    Alert.alert("Checkout", "Yakin mau checkout?", [
      { text: "Batal", style: "cancel" },
      { text: "Checkout", onPress: () => console.log("Checkout pressed") },
    ]);
    setLoading(false);
  };

  const handleBack = () => {
    router.push("/(main)");
  };

  return (
    <View className="flex-1 mt-10">
      <StatusBar barStyle="dark-content" />

      {/* Back Icon */}
      <View className="flex-row items-center px-5">
        <TouchableOpacity onPress={handleBack}>
          <Icon name="angle-left" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-[20px] font-bold ml-3">Cart</Text>
      </View>

      {/* Order Summary */}
      <View className="mt-5 flex-row px-5 justify-between">
        <Text className="text-[17px] font-bold">Order Summary</Text>
        <TouchableOpacity onPress={() => console.log("See All pressed")}>
          <Text className="text-[#FA4A0C] text-[15px]">See All</Text>
        </TouchableOpacity>
      </View>

      {/* Item List */}
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 100,
          marginTop: 20,
        }}
      />

      <CartButton
        handleLogin={handleCheckout}
        loading={loading}
        buttonText="Checkout"
      />
    </View>
  );
}
