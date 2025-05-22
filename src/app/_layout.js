import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import useErrorStore from "../store/errorStore";
import ReusableErrorModal from "../component/reusablemodal/errorHandling";

export default function RootLayout() {
  const { visible, status, message, hideError } = useErrorStore();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={["bottom", "top"]}>
          <Stack
            screenOptions={{
              headerShown: false,
              StatusBarBackgroundColor: "#ffffff",
              StatusBarStyle: "dark",
              ContentStyle: { backgroundColor: "#f2f2f2" },
              animation: "slide_from_right",
            }}
          />
          <StatusBar style="dark" />
          <ReusableErrorModal
            visible={visible}
            status={status}
            message={message}
            onClose={hideError}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
