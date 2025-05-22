import { View, StyleSheet } from "react-native";
import { Slot, usePathname } from "expo-router";
import HomeNavbar from "../../component/home/homeNavbar";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const pathname = usePathname();

  // Tentukan tab aktif berdasarkan pathname
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (pathname.startsWith("/cart")) {setActiveTab("cart")}
    else if (pathname.startsWith("/order")) {setActiveTab("order")}
    else if (pathname.startsWith("/history")) {setActiveTab("history")}
    else {setActiveTab("home")}
  }, [pathname]);

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
