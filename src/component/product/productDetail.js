import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import api from '../../lib/api';

export default function FoodDetailCard({ id }) {
    const [foodDetail, setFoodDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFoodDetail();
    }, []);

    useEffect(() => {
        console.log(foodDetail);
    }, [foodDetail]);

    const fetchFoodDetail = async () => {
        try {
            const response = await api.get(`/menu/${id}`);
            setFoodDetail(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <View style={styles.stars}>
                {[...Array(fullStars)].map((_, i) => (
                    <Ionicons key={`full-${i}`} name="star" size={24} color="#FFD700" />
                ))}
                {hasHalfStar && (
                    <Ionicons name="star-half" size={24} color="#FFD700" />
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <Ionicons key={`empty-${i}`} name="star-outline" size={24} color="#FFD700" />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.card}>
            <Image
                source={require('../../../assets/food.png')} // ganti dengan gambar kamu
                style={styles.image}
                resizeMode="cover"
            />

            <Text style={styles.title}>{foodDetail.name}</Text>
            <Text style={styles.price}>Rp. {foodDetail.price}</Text>

            <Text style={styles.sectionTitle}>Food Description</Text>
            <Text style={styles.description}>
                {foodDetail.description}
            </Text>

            <Text style={styles.sectionTitle}>Rating</Text>
            {renderStars(foodDetail.rating || 0)}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 200,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    price: {
        color: '#FA4A0C',
        fontWeight: '600',
        marginBottom: 10,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'flex-start',
        marginTop: 12,
    },
    description: {
        textAlign: 'left',
        color: '#444',
        fontSize: 14,
        marginTop: 6,
        opacity: 0.5,
    },
    stars: {
        flexDirection: 'row',
        marginTop: 6,
        alignSelf: 'flex-start',
    },
});