import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SingUp_field from "../../component/auth/singup_field";
import LoginButton from "../../component/auth/login_button";
import Header from "../../component/auth/header";
import { router } from "expo-router";

const loginHandler = () => {
  router.replace("/auth/login");
};

export default function SignUp() {
  return (
    <View className="flex-1 bg-[#F2F2F2] justify-between">
      <View>
        <Header />
      </View>
      <SingUp_field />
      <View className="mt-10">
        <View className="flex-row items-center justify-center mt-10 space-x-2">
          <Text className="text-gray-500 text-center">Udah punya akun? </Text>
          <TouchableOpacity onPress={loginHandler}>
            <Text className="text-[#FA4A0C] font-bold ms-3">
              Langsung cus login!
            </Text>
          </TouchableOpacity>
        </View>
        <LoginButton />
      </View>
    </View>
  );
}
