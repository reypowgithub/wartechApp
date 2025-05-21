import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import ProductSection from "../../component/home/product_section";
import CartItem from "../../component/cart/cart.item";

export default function Home() {
  return (
    <View>
      <CartItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
