import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../../assets/wartech_logo.svg";
import IconFavorit from "../../../assets/icon_favorit.svg";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeTopBar({ setLogout }) {
  return (
    <View style={{ backgroundColor: "#F2F2F2" }}>
      <View style={styles.container}>
        <View>
          <Logo width={72} height={72} />
        </View>
        <View className="flex flex-row items-center space-x-4">
          {/* Love Icon */}
          <TouchableOpacity className="rounded-full p-2 bg-white shadow-md mr-5">
            <Ionicons name="heart" size={28} color="red" />
          </TouchableOpacity>

          {/* Logout Icon */}
          <TouchableOpacity className="rounded-full p-2 bg-white shadow-md ">
            <Ionicons name="log-out-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={{ fontSize: 34 }}>Santapan enak bwanget buat lo!</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 30,
  },
  hero: {
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  searchContainer: {
    backgroundColor: "#EFEEEE",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    borderRadius: 0,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000", // input text color
    backgroundColor: "#EFEEEE",
  },
});
