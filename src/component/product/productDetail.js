import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FoodDetailCard() {
    return (
        <View style={styles.card}>
            <Image
                source={require('../../../assets/food.png')} // ganti dengan gambar kamu
                style={styles.image}
                resizeMode="cover"
            />

            <Text style={styles.title}>Pecel Sambal Lele</Text>
            <Text style={styles.price}>Rp. 21.000</Text>

            <Text style={styles.sectionTitle}>Food Description</Text>
            <Text style={styles.description}>
                Lele goreng yang gurih dan renyah dipadukan dengan sambal khas yang pedas menyegarkan. Dilengkapi dengan aneka sayuran rebus dan siraman bumbu pecel yang kaya rasa.
            </Text>

            <Text style={styles.sectionTitle}>Rating</Text>
            <View style={styles.stars}>
                {[1, 2, 3, 4].map((i) => (
                    <Ionicons key={i} name="star" size={24} color="#FFD700" />
                ))}
                <Ionicons name="star-half" size={24} color="#FFD700" />
            </View>
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
