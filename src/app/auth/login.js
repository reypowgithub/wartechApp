import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Login_field from "../../component/auth/loginField";
import LoginButton from "../../component/auth/loginButton";
import Header from "../../component/auth/loginHeader";
import { router } from "expo-router";
import api from "../../lib/api";
import { setAccessToken, getAccessToken } from "../../lib/auth";
import { useState, useEffect } from "react";

export default function login() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const currentToken = await getAccessToken();
      console.log("token:", currentToken);
    }

    getToken();
  }, []);

  const handleLogin = async () => {
    if (!phoneNumber) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", {
        phone_number: phoneNumber
      });

      console.log(response);

      await setAccessToken(response.data.accessToken);
      router.replace("/(main)");
    } catch (e) {
      console.error("Login Error:", e);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToSignup = () => {
    router.push("/auth/signup");
  };

  return (
    <View className="flex-1 bg-[#F2F2F2] justify-between">
      <View>
        <Header />
      </View>
      <Login_field
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <View className="mt-10">
        <View className="flex-row items-center justify-center mt-10 space-x-2">
          <Text className="text-gray-500 text-center">Akun belom ada?</Text>
          <TouchableOpacity onPress={handleNavigateToSignup}>
            <Text className="text-[#FA4A0C] font-bold ms-3">
              Cus regist sekarang!
            </Text>
          </TouchableOpacity>
        </View>
        <LoginButton
          handleLogin={handleLogin}
          loading={loading}
          buttonText="Login"
        />
      </View>
    </View>
  );
}
