import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import Rating from "../../component/rating/ratingList";
import HomeNavbar from "../../component/home/homeNavbar";
import { useState } from "react";
import { router } from "expo-router";

export default function Ratings() {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <View style={{ flex: 1, paddingBottom: 80 }}>
      <Rating />
      <HomeNavbar activeTab="history" />
    </View>
  );
}
