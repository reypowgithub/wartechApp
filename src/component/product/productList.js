import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconFavorit from '../../../assets/Heart.svg';

import { useRouter } from "expo-router";

export default function FoodsList() {
    const router = useRouter();

    const dummyFoods = [
        { id: 1, name: "Pecel Sambel Lele", price: "Rp 21.000" },
        { id: 2, name: "Ikan Telur Rebus", price: "Rp 21.000" },
        { id: 3, name: "Nasi Tempe Orek Telur", price: "Rp 28.000" },
        { id: 4, name: "Nasi Goreng Cabe Merah", price: "Rp 33.000" },
    ];
    return (
        <View style={{ backgroundColor: "#F2F2F2" }}>

            <View style={styles.hero}>
                <Text style={{ fontSize: 34, fontWeight: 'medium-bold', color: '#000' }}>Foods</Text>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Search"
                    style={styles.input}
                    placeholderTextColor="#000"
                />
            </View>

            {dummyFoods.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.card}
                    onPress={() => {
                        router.replace("/screen/productDetail");
                    }}
                >
                    <Image
                        source={require('../../../assets/food.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 60
    },
    hero: {
        backgroundColor: '#F2F2F2',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: 24,
    },
    searchContainer: {
        backgroundColor: '#EFEEEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 40,
        borderRadius: 20,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000', // input text color
        backgroundColor: '#EFEEEE'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 12,
        marginHorizontal: 20,
        marginBottom: 24,
        shadowColor: '#fff',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        color: '#111',
    },
    price: {
        color: '#FF4500',
        fontWeight: 'bold',
        fontSize: 15,
    },
    glowWrapper: {
        backgroundColor: 'white',
        width: 32,                  // buat lingkaran
        height: 32,
        borderRadius: 24,           // setengah dari width/height untuk bulat
        alignItems: 'center',       // center ikon horizontal
        justifyContent: 'center',   // center ikon vertikal
        shadowColor: '#FA4A0C',     // merah glow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,         // glow tipis
        shadowRadius: 25,           // efek blur menyebar
        elevation: 12,              // glow di Android
        alignSelf: 'center',        // center di parent jika diperlukan
    },


});
