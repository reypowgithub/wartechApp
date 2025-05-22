import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeNavbar({ activeTab }) {
  const handleNavigate = (route) => {
    router.replace(route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigate("/(main)")}
      >
        <Ionicons
          name="home"
          size={24}
          color={activeTab === "home" ? "#FF4500" : "#ccc"}
          style={activeTab === "home" ? styles.iconShadow : null}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "home" ? "#FF4500" : "#ccc" },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigate("/(main)/cart")}
      >
        <Ionicons
          name="cart-outline"
          size={24}
          color={activeTab === "cart" ? "#FF4500" : "#ccc"}
          style={activeTab === "cart" ? styles.iconShadow : null}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "cart" ? "#FF4500" : "#ccc" },
          ]}
        >
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigate("/(main)/order")}
      >
        <Ionicons
          name="calendar-outline"
          size={24}
          color={activeTab === "order" ? "#FF4500" : "#ccc"}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "order" ? "#FF4500" : "#ccc" },
          ]}
        >
          My Order
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigate("/(main)/history")}
      >
        <Ionicons
          name="refresh-circle-outline"
          size={24}
          color={activeTab === "history" ? "#FF4500" : "#ccc"}
        />
        <Text
          style={[
            styles.label,
            { color: activeTab === "history" ? "#FF4500" : "#ccc" },
          ]}
        >
          History
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
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
    elevation: 4,
  },
});
