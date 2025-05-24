import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import useAuthStore from "../../store/authStore";
import HistoryNotFound from "../ErrorHandling/historyNotFound";
import { useRouter } from 'expo-router';

const historyData = [
  {
    id: "12345678",
    time: "Rabu, 21 Mei 2025 08.40 WIB",
    items: [
      { menuItem: { name: "Pecel Sambal Lele [1x] - Rp 21.000" } },
      { menuItem: { name: "Nasi Putih [3x] - Rp 15.000" } },
      { menuItem: { name: "Jus Melon [1x] - Rp 5.000" } },
      { menuItem: { name: "Sayur Kangkung [1x] - Rp 5.000" } },
      { menuItem: { name: "Sayur Asem [1x] - Rp 5.000" } },
    ],
    slot: {
      start_time: "21 Mei, 17:00 - 17:30",
    },
    type: "pick_up",
    total_price: 51000,
  },
  {
    id: "12345679",
    time: "Selasa, 20 Mei 2025 11.10 WIB",
    items: [
      { menuItem: { name: "Nasi Goreng Ayam [1x] - Rp 20.000" } },
      { menuItem: { name: "Teh Manis [1x] - Rp 5.000" } },
    ],
    slot: {
      start_time: "20 Mei, 12:00 - 12:30",
    },
    type: "pick_up",
    total_price: 25000,
  },
];

export default function HistoryList() {
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useAuthStore((state) => state.token); // ✅ get token from Zustand

  useEffect(() => {
    if (token) {
      fetchHistoryList();
    }
  }, [token]); // ✅ only fetch after token is ready

  useEffect(() => {
    console.log("History updated:", history[0]);
  }, [history]);

  const fetchHistoryList = async () => {
    setLoading(true);
    try {
      const response = await api.get("/order/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHistory(response.data);
      // setHistory(historyData); //Buat Testing
    } catch (error) {
      console.error("Error fetching history:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  //kata rafi
  const mapOrderType = (type) => {
    switch (type) {
      case "dine_in":
        return "Dine In";
      case "pick_up":
        return "Pick Up";
      default:
        break;
    }
  };

  if (history.length <= 0) {
    return <HistoryNotFound />
  }

  return (
    <ScrollView className="bg-bg-[#F2F2F2] py-8">
      <Text className="text-[18px] font-bold text-center mb-8">History</Text>

      {history.map((order) => (
        <View
          key={order.id}
          className="bg-white rounded-2xl px-5 py-6 mx-4 mb-10 shadow-sm"
        >
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-[17px]">Order ID : {order.id}</Text>
            <Text className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold overflow-hidden">
              Completed
            </Text>
          </View>

          <Text className="text-xs text-gray-500 my-2">
            <Text className="font-bold">Order masuk:</Text> {order.time}
          </Text>

          <Text className="font-bold mt-3 mb-2">Items</Text>
          <View className="ml-2">
            {order?.items.map((item, idx) => (
              <Text key={idx}>• {item?.menuItem.name}</Text>
            ))}
          </View>

          <View className="flex-row justify-between items-center mt-3">
            <Text>{order.slot.start_time}</Text>
            <Text className="font-semibold">{mapOrderType(order.type)}</Text>
          </View>

          <View className="h-[1px] bg-orange-500 opacity-30 my-6" />

          <View className="flex-row justify-between items-center">
            <Text className="font-bold">Total :</Text>
            <Text className="font-bold text-orange-500">
              Rp. {order.total_price}
            </Text>
          </View>

          <TouchableOpacity className="mt-6 mb-6 bg-orange-500 rounded-2xl py-3 flex-row items-center justify-center gap-2"
            onPress={() => router.replace("/rating")}>
            <Text className="text-white font-bold text-sm">
              Ceritain pengalaman makan lo yuk
            </Text>
            <Ionicons name="star" size={18} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-orange-100 rounded-2xl py-3 px-5 items-center">
            <Text className="text-orange-500 font-bold text-sm">
              Pengen Repeat !
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
