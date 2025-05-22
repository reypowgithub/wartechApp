import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Calendar from '../../../assets/icon_calendar.svg';


export default function HistoryNotFound() {
    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-[#F2F2F2] pt-12">
            <Text className="text-[18px] font-bold mb-5">History</Text>

            <View className="px-8 py-10 rounded-xl items-center w-[85%] space-y-6">
                {/* Gambar */}
                <View>
                    <Calendar width={160} height={160} />
                </View>

            </View>
            {/* Pesan */}
            <Text className="text-center text-black font-bold text-4xl px-1 mb-8">
                Sejauh ini belum ada{"\n"}riwayat pesanan, euy!
            </Text>

            {/* Tombol */}
            <TouchableOpacity
                onPress={() => router.replace("./home")}
                className="bg-[#FA4A0C] w-11/12 py-4 rounded-full items-center px-8"
            >
                <Text className="text-white font-bold text-lg ">Cus Order</Text>
            </TouchableOpacity>
        </View>
    );
}

