import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import ProductSection from "../../component/home/homeProductSection";
import Topbar from "../../component/home/homeTopbar";
import useAuthStore from "../../store/authStore";
// import RatingList from '../../component/rating/ratingList';

export default function Home() {
  // MARK: TOLONG APUS LOGOUT KALO UDAH BUAT YANG PROPER!!!!!!!! -BAPHOMET
  const removeToken = useAuthStore((state) => state.removeToken);

  const handleLogout = async () => {
    await removeToken(); // ✅ Use Zustand store instead of raw SecureStore
    router.replace("/auth/login");
  };

  const handleCart = () => {
    router.replace("/cart");
  };

  return (
    // <View style={styles.container}>
    <View className="flex-1 bg-white">
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Topbar handleLogout={handleLogout} />
        <ProductSection />

        
      </ScrollView>
    </View>
  );
}
