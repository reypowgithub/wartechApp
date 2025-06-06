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
import HistoryList from "../../component/history/historyList";
import { useState } from "react";
import { router } from "expo-router";


export default function History() {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <View style={{ flex: 1, paddingBottom: 80 }}>
      <HistoryList />
    </View>
  );
}
