import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Vector from "../../../assets/qris.svg";
import Qrismock from "../../../assets/qrismock.svg";
import { router } from "expo-router";

const ModalQris = ({ modalVisible, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(252); // 4:12 in seconds

  useEffect(() => {
    let timer;
    if (modalVisible) {
      setTimeLeft(252); // reset saat modal muncul
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onClose(); // auto close saat habis
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // bersihin timer pas modal close
  }, [modalVisible]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        onClose();
      }}
    >
      <SafeAreaView className="flex-1 my-10 bg-white rounded-t-3xl p-6 justify-between items-center space-y-4">
        {/* Header */}
        <View className="w-full space-y-3">
          <View className="flex-row items-center space-x-2">
            <View className="w-8 h-8">
              <Vector width="100%" height="100%" />
            </View>
            <Text className="text-[20px] font-semibold text-orange-600">
              Pay With Qris
            </Text>
          </View>

          <Text className="text-[13px] text-gray-500">
            Scan QR Code below with your preferred Payment app to complete the
            payment of{" "}
            <Text className="font-extrabold text-orange-600">Rp 25.000</Text>
          </Text>
        </View>

        {/* QR Image */}
        <Qrismock width={257} height={256} />

        {/* Timer */}
        <Text className="text-[20px] text-orange-600 text-center my-5">
          {formatTime(timeLeft)}
        </Text>

        {/* Buttons */}
        <View className="flex-row items-center justify-center w-full space-x-10 ">
          <TouchableOpacity
            className="px-4 py-2 bg-gray-300 rounded-lg mr-5 my-5"
            onPress={onClose}
          >
            <Text className="text-sm text-white w-24 text-center">Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="px-4 py-2 bg-orange-600 rounded-lg"
            onPress={() => router.push("../(main)/order")}
          >
            <Text className="text-sm text-white w-24 text-center">
              Udah bayar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalQris;
