import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Signal from '../../../assets/icon_Signal.svg';


export default function HistoryNotFound() {
    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-[#F2F2F2] pt-12">
            <View className="px-8 py-10 rounded-xl items-center w-[85%] space-y-6">
                {/* Gambar */}
                <View>
                    <Signal width={160} height={160} />
                </View>

            </View>
            {/* Pesan */}
            <Text className="text-center text-black font-bold text-4xl px-1 mb-8">
                Gak connect, sob!{"\n"} Cek WiFi/kuota dulu
            </Text>

            {/* Tombol */}
            <TouchableOpacity
                onPress={() => router.replace("./home")}
                className="bg-[#FA4A0C] w-11/12 py-4 rounded-full items-center px-8"
            >
                <Text className="text-white font-bold text-lg ">Coba lagi, bro!</Text>
            </TouchableOpacity>
        </View>
    );
}

