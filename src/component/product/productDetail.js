import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function FoodsList() {
    const dummyFoods = [
        { id: 1, name: "Pecel Sambel Lele", price: "Rp 21.000" },
    ];
    return (
        <View style={{}}>

            {dummyFoods.map((item) => (
                <TouchableOpacity key={item.id} style={styles.card}>
                    <Image
                        source={require('../../../assets/food.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </TouchableOpacity>

            ))}

            <View style={styles.textContainer}>
                <Text style={styles.title}>a</Text>
                <Text style={styles.price}>a</Text>
            </View>
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
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
        width: 280,
        height: 280,
        borderRadius: 300,
        marginRight: 16,
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
});
