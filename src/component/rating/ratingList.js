import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyData = [
    {
        id: 1,
        name: 'Pecel Sambel Lele',
        image: require('../../../assets/food.png'),
        rating: 0,
        comment: '',
    },
    {
        id: 2,
        name: 'Nasi Putih',
        image: require('../../../assets/food.png'),
        rating: 0,
        comment: '',
    },
    {
        id: 3,
        name: 'Nasi Putih',
        image: require('../../../assets/food.png'),
        rating: 0,
        comment: '',
    },
    {
        id: 4,
        name: 'Nasi Putih',
        image: require('../../../assets/food.png'),
        rating: 0,
        comment: '',
    },
    {
        id: 5,
        name: 'Nasi Putih',
        image: require('../../../assets/food.png'),
        rating: 0,
        comment: '',
    },
];

export default function RatingList() {
    const [foods, setFoods] = useState(dummyData);

    const handleSendReview = () => {
        const updated = foods.map(food => ({
            ...food,
            rating: 5,
            comment: 'enak mantap',
        }));
        setFoods(updated);
    };

    const handleChangeComment = (id, newComment) => {
        const updated = foods.map(food =>
            food.id === id ? { ...food, comment: newComment } : food
        );
        setFoods(updated);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.topbar}>
                <Ionicons name="chevron-back-outline" size={24} color="#FA4A0C" style={styles.icon} />
            </View>

            <Text style={styles.header}>Rating</Text>

            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <Text style={styles.orderId}>Order ID : 12345678</Text>
                    <Text style={styles.statusBadge}>Completed</Text>
                </View>
                <Text style={styles.orderTime}>
                    <Text style={{ fontWeight: 'bold' }}>Order masuk: </Text>
                    Rabu, 21 Mei 2025 08.40 WIB
                </Text>

                {/* Scrollable only this section */}
                <ScrollView style={{ maxHeight: 300 }} showsVerticalScrollIndicator={false}>
                    {foods.map((food, index) => (
                        <View key={index} style={styles.foodRow}>
                            <Image source={food.image} style={styles.image} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.foodName}>{food.name}</Text>
                                <View style={styles.starRow}>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Ionicons
                                            key={i}
                                            name={i <= food.rating ? 'star' : 'star-outline'}
                                            size={20}
                                            color="#FFD700"
                                        />
                                    ))}
                                </View>
                                <TextInput
                                    placeholder="Tulis komentar lo..."
                                    placeholderTextColor="#CBCBCB"
                                    value={food.comment}
                                    style={styles.comment}
                                    editable={true}
                                    onChangeText={(text) => handleChangeComment(food.id, text)}
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSendReview}>
                <Text style={styles.buttonText}>Kirim review lo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F2F2F2',
        paddingVertical: 20,
    },
    header: {
        fontSize: 34,
        fontWeight: 'bold',
        marginLeft: 24,
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginHorizontal: 16,
        padding: 16,
    },
    orderId: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    orderTime: {
        fontSize: 12,
        color: '#888',
        marginVertical: 6,
    },
    statusBadge: {
        backgroundColor: '#0BD004',
        color: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: '600',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    foodRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 10,
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 8,
        marginRight: 12,
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
    },
    starRow: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    comment: {
        backgroundColor: '#FBFDFF',
        borderRadius: 8,
        padding: 6,
        fontSize: 12,
        color: '#FA4A0C',
        borderColor: '#E0EAF1'
    },
    button: {
        backgroundColor: '#FA4A0C',
        paddingVertical: 25,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 7,
        marginHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 40,
        marginBottom: 28
    }
});
