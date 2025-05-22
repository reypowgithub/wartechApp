import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function OrderTrackerCard() {
    const [statusStep, setStatusStep] = useState(0);
    const router = useRouter();

    const statusList = [
        {
            text: 'Confirmed',
            color: '#007BFF',
            background: '#E0F0FF',
            message: 'Order kamu udah dikonfirmasi, ditunggu ya!',
        },
        {
            text: 'Preparing',
            color: '#FCAB8E',
            background: '#FFECEC',
            message: 'Tunggu sebentar lagi dimasakin nih, sabar ya',
        },
        {
            text: 'Ready for Pickup',
            color: '#FA4A0C',
            background: '#E9F9EE',
            message: 'Udah jadi, tinggal ambil aja jangan sampai dingin',
        },
    ];

    const handleAdvanceStatus = () => {
        if (statusStep < statusList.length - 1) {
            setStatusStep((prev) => prev + 1);
        } else {
            router.replace("/(main)/history"); // redirect ke home setelah status terakhir
        }
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>My Order</Text>
            <Text style={styles.subHeading}>Track Order Lo!</Text>

            <View style={styles.card}>
                {/* Order ID */}
                <View style={styles.rowBetween}>
                    <Text style={styles.orderId}>Order ID : 12345678</Text>
                    <Text
                        style={[
                            styles.statusBadge,
                            {
                                backgroundColor: statusList[statusStep].background,
                                color: statusList[statusStep].color,
                            },
                        ]}
                    >
                        {statusList[statusStep].text}
                    </Text>
                </View>

                {/* Order time */}
                <Text style={styles.orderTime}>
                    Order masuk: Rabu, 21 Mei 2025 08.42 WIB
                </Text>

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

                {/* Info Box */}
                <View style={styles.row}>
                    <Ionicons
                        name="information-circle-outline"
                        size={24}
                        color="#8EBEFC"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>{statusList[statusStep].message}</Text>
                </View>

                {/* Button */}
                <TouchableOpacity style={styles.button} onPress={handleAdvanceStatus}>
                    <Text style={styles.buttonText}>Simulate: Advance to Next Status</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF8F5',
        flex: 1,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 26,
        marginTop: 50,
    },
    subHeading: {
        fontSize: 34,
        fontWeight: '600',
        textAlign: 'left',
        marginBottom: 40,
        marginLeft: 32,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
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
        height: 1,
        backgroundColor: '#FA4A0C',
        opacity: 0.3,
        marginVertical: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#EBF4FF',
        borderRadius: 10,
        marginTop: 16,
    },
    icon: {
        marginRight: 12,
        marginLeft: 8,
    },
    text: {
        fontSize: 12,
        flex: 1,
        flexWrap: 'wrap',
    },
});
