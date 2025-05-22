import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { router } from "expo-router";
import ProductSection from "../../component/home/homeProductSection"
import Topbar from '../../component/home/homeTopbar';
import Navbar from '../../component/home/homeNavbar';
import useAuthStore from '../../store/authStore';
import RatingList from '../../component/rating/ratingList';


export default function Home() {
  // MARK: TOLONG APUS LOGOUT KALO UDAH BUAT YANG PROPER!!!!!!!! -BAPHOMET
  const removeToken = useAuthStore(state => state.removeToken);

  const handleLogout = async () => {
    await removeToken(); // ✅ Use Zustand store instead of raw SecureStore
    router.replace("/auth/login");
  };

  const handleChart = () => {
    router.replace("/cart");
  };

  return (
    // <View style={styles.container}>
    <View className="flex-1 bg-white">
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Topbar />
        <ProductSection />

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-[#FA4A0C] p-3 rounded-xl m-4"
        >
          <Text className="text-white text-center font-bold text-[16px]">
            Logout
          </Text>
        </TouchableOpacity>

        {/* Chart Button */}
        <TouchableOpacity
          onPress={handleChart}
          className="bg-[#FA4A0C] p-3 rounded-xl m-4"
        >
          <Text className="text-white text-center font-bold text-[16px]">
            Chart
          </Text>
        </TouchableOpacity>

        {/* Rating Button */}
        <TouchableOpacity
          onPress={handleChart}
          className="bg-[#FA4A0C] p-3 rounded-xl m-4"
        >
          <Text className="text-white text-center font-bold text-[16px]">
            Rating
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navbar tetap di bawah */}
      <Navbar />
    </View>
  );
}
