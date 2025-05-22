import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeNavbar() {
  const handleChart = () => {
    router.replace("/cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name="home"
          size={24}
          color="#FF4500"
          style={styles.iconShadow}
        />
        <Text style={[styles.label, { color: "#FF4500" }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleChart}>
        <Ionicons name="cart-outline" size={24} color="#ccc" />
        <Text style={styles.label}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="calendar-outline" size={24} color="#ccc" />
        <Text style={styles.label}>My Order</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="refresh-circle-outline" size={24} color="#ccc" />
        <Text style={styles.label}>History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute", // ⬅️ agar menempel ke layar
    bottom: 0, // ⬅️ menempel ke bawah
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f9f9f9",
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  item: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 4,
  },
  iconShadow: {
    shadowColor: "#FF4500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 4, // for Android
  },
});
