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
import OrderTrack from "../../component/order/orderTrack";
import { useState } from "react";
import { router } from "expo-router";

export default function History() {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <View style={{ flex: 1, paddingBottom: 80 }}>
      {/* <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 100,
          marginTop: 20,
        }}
      /> */}
      <OrderTrack />
    </View>
  );
}
