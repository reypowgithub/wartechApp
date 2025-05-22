import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconFavorit from "../../../assets/Heart.svg";
import { useRouter } from "expo-router";
import api from "../../lib/api";

export default function FoodsList() {
  const router = useRouter();
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await api.get("/menu");
      const filtered = response.data.filter(
        (item) => item.category.toLowerCase() === "food"
      );
      setMenuData(filtered);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  return (
    <View style={{ backgroundColor: "#F2F2F2" }}>
      <View style={styles.hero}>
        <Text style={{ fontSize: 34, fontWeight: "medium-bold", color: "#000" }}>
          Foods
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#000"
        />
      </View>

      {menuData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => {
            router.replace(`/screen/product/${item.id}`);
          }}
        >
          <Image
            source={require("../../../assets/food.png")}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>Rp {item.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 60,
  },
  hero: {
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 24,
  },
  searchContainer: {
    backgroundColor: "#EFEEEE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 40,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#EFEEEE",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 24,
    shadowColor: "#fff",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#111",
  },
  price: {
    color: "#FF4500",
    fontWeight: "bold",
    fontSize: 15,
  },
  glowWrapper: {
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FA4A0C",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 12,
    alignSelf: "center",
  },
});
