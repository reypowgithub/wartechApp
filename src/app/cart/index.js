import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CartItem from "../../component/cart/cartItems";
import CartButton from "../../component/cart/cartButton";
import { useState } from "react";
import { router } from "expo-router";

export default function Chart() {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Dummy Data State
  const [cartData, setCartData] = useState([
    { id: 1, name: "Pecel Sambal Lele", price: 6000 },
    { id: 2, name: "Ayam Geprek", price: 12000 },
    { id: 3, name: "Ayam Geprek", price: 12000 },
    { id: 4, name: "Ayam Geprek", price: 12000 },
  ]);

  const renderItem = ({ item }) => (
    <CartItem
      name={item.name}
      price={item.price}
      onDelete={() => handleDelete(item.id)}
    />
  );

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
    if (!selectedOption) {
      Alert.alert("Pilih Metode", "Silakan pilih metode terlebih dahulu.");
      return;
    }
    if (!selectedTime) {
      Alert.alert("Pilih Waktu", "Silakan pilih waktu makan terlebih dahulu.");
      return;
    }

    setLoading(true);
    Alert.alert("Checkout", "Yakin mau checkout?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Checkout",
        onPress: () => {
          console.log("Checkout pressed");
          // Tambahkan ke logic checkout di sini kalau perlu
        },
      },
    ]);
    setLoading(false);
  };

  const handleBack = () => {
    router.push("/(main)");
  };

  const options = [
    { label: "Pick-Up", value: "pick-up" },
    { label: "Makan di Sini", value: "dine-in" },
  ];

  // Generate waktu sesi per 30 menit
  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
  ];

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

      <View className="mt-5 flex-row px-5 justify-between">
        <Text className="text-[17px] font-bold text-[#FA4A0C]">
          Order Summary
        </Text>
      </View>

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

      <View className="flex-row items-between justify-between px-5 pt-5">
        <Text className="text-[17px] text-[#FA4A0C]">Total</Text>
        <Text className="text-[17px] font-bold text-[#FA4A0C]">Rp. 42000</Text>
      </View>

      {/* Pilihan Metode */}
      <View className="flex px-5 my-4">
        <Text className="text-[17px] text-[#FA4A0C] mb-2 font-bold">
          Pick-Up atau Makan di Sini
        </Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => setSelectedOption(option.value)}
            className="flex-row items-center mb-3 bg-white p-3 rounded-[30px]"
          >
            <View
              className={`w-5 h-5 mr-3 rounded-full border-2 ${
                selectedOption === option.value
                  ? "border-[#FA4A0C] bg-[#FA4A0C]"
                  : "border-gray-400"
              }`}
            />
            <Text className="text-[16px] text-black">{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pilihan Waktu */}
      <View className="flex px-5 my-4">
        <Text className="text-[17px] text-[#FA4A0C] mb-2 font-bold">
          Mau makan jam berapa?
        </Text>
        <View className="flex-row flex-wrap">
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              onPress={() => setSelectedTime(time)}
              className={`p-3 px-5 m-1 rounded-[20px] ${
                selectedTime === time
                  ? "bg-[#FA4A0C]"
                  : "bg-white border border-gray-300"
              }`}
            >
              <Text
                className={`text-[16px] ${
                  selectedTime === time ? "text-white" : "text-black"
                }`}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <CartButton
        handleLogin={handleCheckout}
        loading={loading}
        buttonText="Checkout"
      />
    </View>
  );
}
