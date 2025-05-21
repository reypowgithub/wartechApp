import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderTrackerCard() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>My Order</Text>
            <Text style={styles.subHeading}>Track Order Lo!</Text>

            <View style={styles.card}>
                {/* Order ID */}
                <View style={styles.rowBetween}>
                    <Text style={styles.orderId}>Order ID : 12345678</Text>
                    <Text style={styles.statusBadge}>Confirmed</Text>
                </View>

                {/* Order time */}
                <Text style={styles.orderTime}>Order masuk: Rabu, 21 Mei 2025 08.42 WIB</Text>

                {/* Items */}
                <Text style={styles.sectionTitle}>Items</Text>
                <View style={styles.itemList}>
                    <Text>• Pecel Sambel Lele [1x] - Rp 21.000</Text>
                    <Text>• Nasi Putih [2x] - Rp 10.000</Text>
                    <Text>• Jus Melon [1x] - Rp 6.000</Text>
                    <Text>• Sayur Kangkung [1x] - Rp 5.000</Text>
                    <Text>• Sayur Asem [1x] - Rp 5.000</Text>
                </View>

                {/* Slot & Method */}
                <View style={[styles.rowBetween, { marginTop: 12 }]}>
                    <Text>21 May, 17:00 - 17:30</Text>
                    <Text style={{ fontWeight: '600' }}>Pickup</Text>
                </View>

                <View style={styles.divider} />

                {/* Total */}
                <View style={[styles.rowBetween, { marginTop: 12 }]}>
                    <Text style={{ fontWeight: 'bold' }}>Total :</Text>
                    <Text style={{ fontWeight: 'bold', color: '#FA4A0C' }}>Rp 51.000</Text>
                </View>

                {/* Input & Button */}
                <View style={styles.row}>
                    <Ionicons
                        name="information-circle-outline"
                        size={24}
                        color='#8EBEFC'
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Tunggu sebentar lagi dimasakin nih, sabar ya
                    </Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Simulate: Advance to Next Status</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF8F5',
    },
    heading: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 26,
        marginTop: 50,
        fontWeight: 'bold'
    },
    subHeading: {
        fontSize: 34,
        fontWeight: 'semi-bold',
        textAlign: 'left',
        marginBottom: 40,
        marginLeft: 32
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginLeft: 16,
        marginRight: 16
    },
    orderId: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    orderTime: {
        fontSize: 12,
        color: '#888',
        marginVertical: 4,
    },
    statusBadge: {
        backgroundColor: '#E0F0FF',
        color: '#007BFF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        fontSize: 12,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
    },
    itemList: {
        marginLeft: 4,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#FCAB8E',
        backgroundColor: '#FEF7F7',
        padding: 10,
        borderRadius: 10,
        marginTop: 16,
        fontSize: 12,

    },
    button: {
        backgroundColor: '#FA4A0C',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    divider: {
        alignItems: 'center',
        height: 0.1,         // h-px
        backgroundColor: '#FA4A0C',
        width: 300,        // w-60 → 60 * 4
        paddingVertical: 2, // py-0.5 → 0.5 * 4 = 2
        marginTop: 24,
        marginBottom: 24,
        opacity: 0.5
    },
    row: {
        flexDirection: 'row',     // ➜ bikin horizontal
        alignItems: 'center',     // ➜ sejajarkan secara vertikal
        paddingVertical: 8,
        backgroundColor: '#EBF4FF',
        borderColor: '#8EBEFC',
        marginTop: 16,
        borderRadius: 10,

    },
    icon: {
        marginRight: 12,           // ➜ jarak antara icon dan teks
        left: 8,
    },
    text: {
        fontSize: 12,
    },
});
