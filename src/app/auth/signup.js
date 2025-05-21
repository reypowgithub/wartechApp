import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SingUp_field from "../../component/auth/signUpField";
import LoginButton from "../../component/auth/loginButton";
import Header from "../../component/auth/loginHeader";
import { router } from "expo-router";
import { useState } from "react";
import api from "../../lib/api";
import useAuthStore from "../../store/authStore"; // ✅ import Zustand store

export default function SignUp() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setToken = useAuthStore((state) => state.setToken); // ✅ Zustand setter

  const handleRegister = async () => {
    if (!name || !phoneNumber) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await api.post("/auth/register", {
        name,
        phone_number: phoneNumber,
      });

      // ✅ Show success and redirect to login
      console.log("Registration successful!");
      router.replace("/auth/login");
    } catch (e) {
      setError("Register failed. Please try again.");
      console.error("Register Error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    router.replace("/auth/login");
  };

  return (
    <View className="flex-1 bg-[#F2F2F2] justify-between">
      <Header />
      <SingUp_field
        name={name}
        setName={setName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <View className="mt-10">
        <View className="flex-row items-center justify-center mt-10 space-x-2">
          <Text className="text-gray-500">Udah punya akun?</Text>
          <TouchableOpacity onPress={handleGoToLogin}>
            <Text className="text-[#FA4A0C] font-bold ms-3">
              Langsung cus login!
            </Text>
          </TouchableOpacity>
        </View>
        <LoginButton
          loading={loading}
          handleLogin={handleRegister}
          buttonText="Sign Up"
        />
      </View>
    </View>
  );
}
