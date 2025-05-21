import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from "react-native";
import { router } from "expo-router";
import api from "../../lib/api";
import { useState, useEffect } from "react";

import Header from "../../component/auth/loginHeader";
import UserNotFound from "../../component/ErrorHandling/userNotFound"
import Login_field from "../../component/auth/loginField";
import LoginButton from "../../component/auth/loginButton";

import ProductDetail from "../../component/product/productDetail";
import ProductHeader from "../../component/product/productHeadbar";
import ProductButton from "../../component/product/productBtnAddCart";

import HomeNavbar from "../../component/home/homeNavbar";
import OrderTrack from "../../component/order/orderTrack";
import HistoryList from "../../component/history/historyList";
import RatingList from "../../component/rating/ratingList";

import useAuthStore from "../../store/authStore";

export default function login() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setToken = useAuthStore((state) => state.setToken);
  const loadToken = useAuthStore((state) => state.loadToken);

  const handleLogin = async () => {
    if (!phoneNumber) {
      setError("Please fill in your phone number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", {
        phone_number: phoneNumber,
      });

      await setToken(response.data.accessToken); // ✅ store in SecureStore & memory
      router.replace("/(main)");
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please try again.");
    } finally {
      await loadToken(); // ✅ force re-sync to Zustand memory
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

    // <View>
    //   <ProductHeader />
    //   <ProductDetail />
    //   <ProductButton />

    //   <View>
    //     <RatingList />
    //     <HomeNavbar />
    //   </View>
    // </View>

  );

}
