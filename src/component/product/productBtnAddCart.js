import { router, useRouter } from "expo-router";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";


export default function CartButtton({ }) {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => router.replace('/cart')}
            className="bg-[#FA4A0C] p-4 mx-8 rounded-[30px] h-[70px] justify-center items-center"
        >
            <Text className="text-white text-[17px]">Add To Cart</Text>
        </TouchableOpacity>
    );
}
