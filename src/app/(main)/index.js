import { View, Text, Button } from 'react-native';
import { router } from "expo-router";
import ProductSection from "../../component/home/homeProductSection"
import HistoryList from '../../component/history/historyList';
import useAuthStore from '../../store/authStore';


export default function Home() {
  // MARK: TOLONG APUS LOGOUT KALO UDAH BUAT YANG PROPER!!!!!!!! -BAPHOMET
  const removeToken = useAuthStore(state => state.removeToken);

  const handleLogout = async () => {
    await removeToken(); // ✅ Use Zustand store instead of raw SecureStore
    router.replace("/auth/login");
  };

  return (
    // <View style={styles.container}>
      <View>
        <Button
        title="Log Out"
        onPress={handleLogout}
      />
      <ProductSection />
      {/* <HistoryList /> */}
      
    </View>
  );
}
