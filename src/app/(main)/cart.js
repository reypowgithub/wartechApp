import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CartItem from "../../component/cart/cartItems";
import CartButton from "../../component/cart/cartButton";
import HomeNavbar from "../../component/home/homeNavbar";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import ModalQris from "../payment/ModalQris";
import api from "../../lib/api";
import useAuthStore from "../../store/authStore";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Dummy Data State
  const [cartData, setCartData] = useState([
    { id: 1, name: "Pecel Sambal Lele", price: 6000, quantity: 1 },
    { id: 2, name: "Ayam Geprek", price: 12000, quantity: 1 },
    { id: 3, name: "Ayam Geprek", price: 12000, quantity: 1 },
    { id: 4, name: "Ayam Geprek", price: 12000, quantity: 1 },
  ]);

  const token = useAuthStore((state) => state.token); // ✅ get token from Zustand

  useEffect(() => {
    if (token) {
      fetchCartData();
    }
  }, [token]); // ✅ only fetch after token is ready

  useEffect(() => {
    console.log("Cart Data:", cartData[0]);
  }, [cartData]);

  const fetchCartData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    //   setHistory(response.data);
    console.log("Cart Data Response:", response.data.items);
        setCartData(response.data.items); //Buat Testing
    } catch (error) {
      console.error("Error fetching history:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const renderItem = ({ item }) => (
    console.log("Item:", item.menuItem.price),
    <CartItem
      name={item.menuItem.name}
      price={item.menuItem.price}
      quantity={item.menuItem.quantity}
      onDelete={() => handleDelete(item.menuItem.id)}
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
    // if (!selectedOption) {
    //   Alert.alert("Pilih Metode", "Silakan pilih metode terlebih dahulu.");
    //   return;
    // }
    // if (!selectedTime) {
    //   Alert.alert("Pilih Waktu", "Silakan pilih waktu makan terlebih dahulu.");
    //   return;
    // }

    // setLoading(true);

    // setLoading(false);
    setModalVisible(true);
  };

  const handleBack = () => {
    router.push("/(main)");
  };

  const options = [
    { label: "Pick-Up", value: "pick-up" },
    { label: "Makan di Sini", value: "dine-in" },
  ];

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

  // Hitung total harga
  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={{ flex: 1, paddingBottom: 80 }}>
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 mt-10">
        <Text className="text-[18px] font-bold text-center">Cart</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* Order Summary */}
          <View className="mt-5 px-5">
            <Text className="text-[17px] font-bold text-[#FA4A0C] mb-4">
              Order Summary
            </Text>

            {cartData.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                onDelete={() => handleDelete(item.id)}
              />
            ))}

            <View className="flex-row justify-between pt-5">
              <Text className="text-[17px] text-[#FA4A0C]">Total</Text>
              <Text className="text-[17px] font-bold text-[#FA4A0C]">
                Rp. {totalPrice.toLocaleString("id-ID")}
              </Text>
            </View>
          </View>

          {/* Pilihan Metode */}
          <View className="px-5 my-5">
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
          <View className="px-5 my-4">
            <Text className="text-[17px] text-[#FA4A0C] mb-2 font-bold">
              Mau makan jam berapa?
            </Text>

            {selectedTime ? (
              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={() => setSelectedTime("")}
                  className="p-3 px-5 mr-2 rounded-[20px] bg-[#FA4A0C]"
                >
                  <Text className="text-white text-[16px]">{selectedTime}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="flex-row flex-wrap">
                {timeSlots.map((time) => (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className="p-3 px-5 m-1 rounded-[20px] bg-white border border-gray-300"
                  >
                    <Text className="text-[16px] text-black">{time}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          <CartButton
            handlePress={handleCheckout}
            loading={loading}
            buttonText="Checkout"
          />
        </ScrollView>
      </View>

      <HomeNavbar activeTab="cart" />
      <ModalQris
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
