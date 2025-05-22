import { View, StyleSheet } from "react-native";
import { Slot, usePathname } from "expo-router";
import HomeNavbar from "../../component/home/homeNavbar";

export default function MainLayout() {
  const pathname = usePathname();

  // Tentukan tab aktif berdasarkan pathname
  let activeTab = "home";
  if (pathname.startsWith("/(main)/cart")) {activeTab = "cart"}
  else if (pathname.startsWith("/(main)/order")) {activeTab = "order"}
  else if (pathname.startsWith("/(main)/history")) {activeTab = "history"}

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>
      <HomeNavbar activeTab={activeTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
