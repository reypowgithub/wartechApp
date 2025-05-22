import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Search from '../../../assets/icon_search.svg';


export default function OrderNotFound() {
    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-[#F2F2F2] pt-12">
            <View className="px-8 py-10 rounded-xl items-center w-[85%] space-y-6">
                {/* Gambar */}
                <View>
                    <Search width={160} height={160} />
                </View>

            </View>
            {/* Pesan */}
            <Text className="text-center text-black font-bold text-4xl px-1 mb-8">
                Yah, kosong—itemnya nggak ada! 🔍
            </Text>
        </View>
    );
}

