import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Login_field from "../../component/auth/login_field";
import LoginButton from "../../component/auth/login_button";
import Header from "../../component/auth/header";
import { router } from "expo-router";

const registHandler = () => {
  router.replace("/auth/signup");
};

export default function login() {
  return (
    <View className="flex-1 bg-[#F2F2F2] justify-between">
      <View>
        <Header />
      </View>
      <Login_field />
      <View className="mt-10">
        <View className="flex-row items-center justify-center mt-10 space-x-2">
          <Text className="text-gray-500 text-center">Akun belom ada?</Text>
          <TouchableOpacity onPress={registHandler}>
            <Text className="text-[#FA4A0C] font-bold ms-3">
              Cus regist sekarang!
            </Text>
          </TouchableOpacity>
        </View>
        <LoginButton />
      </View>
    </View>
  );
}
