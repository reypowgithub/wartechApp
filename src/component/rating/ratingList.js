import React, { useEffect, useState } from 'react';
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
import api from '../../lib/api';
import useAuthStore from '../../store/authStore';
import { useRouter } from 'expo-router';

import dummyImage from '../../../assets/food.png'

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
    const router = useRouter();
    const [foods, setFoods] = useState(dummyData);
    const [menuItems, setMenuItems] = useState([]);
    const [totalRating, setTotalRating] = useState(null);
    const [ratingCount, setRatingCount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = useAuthStore((state) => state.token); // ✅ get token from Zustand

    useEffect(() => {
        if (token) {
            fetchOrderDetails();
        }
    }, [token]); // ✅ only fetch after token is ready

    const fetchOrderDetails = async () => {
        const id = 1;
        try {
            const response = await api.get(`/order/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const withRating = response.data.items.map(item => ({
                ...item,
                rating: 0, // Local-only field
            }));

            setMenuItems(withRating);
        } catch (error) {
            console.error(error);
        }
    };

    const addRatings = async (menuItemId, value) => {
        try {
            await api.post(`/rate/${menuItemId}`, { rating: value });
            console.log(`Rated ${value} for menu item ${menuItemId}`);
        } catch (error) {
            console.error('Rating error:', error.response?.data || error.message);
        }
    };


    const handleSendReview = async () => {
        try {
            setLoading(true);
            const ratedItems = menuItems.filter(item => item.rating > 0);

            if (ratedItems.length === 0) {
                alert("Please rate at least one item.");
                return;
            }

            await Promise.all(
                ratedItems.map(item =>
                    api.post(`/rate/${item.menuItem.id}`, {
                        rating: item.rating
                    })
                )
            );

            alert("Thanks! Your reviews have been submitted.");
        } catch (error) {
            console.error("Submission failed:", error.response?.data || error.message);
            alert("Failed to submit reviews. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChangeComment = (id, newComment) => {
        const updated = foods.map(food =>
            food.id === id ? { ...food, comment: newComment } : food
        );
        setFoods(updated);
    };

    return (
        // tombol back
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => router.replace("/history")}>
                <View View style={styles.topbar} >
                    <Ionicons name="chevron-back-outline" size={24} color="#FA4A0C" style={styles.icon} />
                </View>
            </TouchableOpacity >

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
                    {menuItems.map((item) => (
                        <View key={item.id} style={styles.foodRow}>
                            <Image source={dummyImage} style={styles.image} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.foodName}>{item.menuItem.name}</Text>
                                <View style={styles.starRow}>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <TouchableOpacity
                                            key={i}
                                            onPress={() => {
                                                const updated = menuItems.map(f =>
                                                    f.id === item.id ? { ...f, rating: i } : f
                                                );
                                                setMenuItems(updated);
                                            }}
                                        >
                                            <Ionicons
                                                name={i <= item.rating ? 'star' : 'star-outline'}
                                                size={20}
                                                color="#FFD700"
                                            />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity
                style={[styles.button, loading && { opacity: 0.5 }]}
                onPress={handleSendReview}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Submitting...' : 'Kirim review lo'}
                </Text>
            </TouchableOpacity>
        </View >
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
