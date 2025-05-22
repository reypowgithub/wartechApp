import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "../../global.css";
import useAuthStore from "../store/authStore";

export default function Index() {
  const token = useAuthStore((state) => state.token);
  const loadToken = useAuthStore((state) => state.loadToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      await loadToken(); // ✅ load from SecureStore and sync Zustand
      setLoading(false);
    };

    initializeAuth();
    console.log("Hit Index");
  }, []);

  return <Redirect href={token ? "/(main)" : "/screen/home"} />

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <Redirect href={token ? "/(main)" : "/auth/login"} />;
}
