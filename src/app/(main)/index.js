import { View, Text } from 'react-native';
import { removeAccessToken } from "../../lib/auth";
import { router } from "expo-router";


export default function Home() {

  // MARK: TOLONG APUS LOGOUT KALO UDAH BUAT YANG PROPER!!!!!!!! -BAPHOMET
  const handleLogout = async () => {
    await removeAccessToken();
    router.replace("/auth/login");
  };

  return (
    <View style={styles.container}>
      <ProductSection />
      <Button
        title="Log Out"
        onPress={handleLogout}
      />
    </View>
  );
}
