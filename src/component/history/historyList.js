import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import api from '../../lib/api';
import useAuthStore from '../../store/authStore';

const historyData = [
    {
        id: '12345678',
        time: 'Rabu, 21 Mei 2025 08.40 WIB',
        items: [
            'Pecel Sambal Lele [1x] - Rp 21.000',
            'Nasi Putih [3x] - Rp 15.000',
            'Jus Melon [1x] - Rp 5.000',
            'Sayur Kangkung [1x] - Rp 5.000',
            'Sayur Asem [1x] - Rp 5.000',
        ],
        slot: '21 May, 17:00 - 17:30',
        method: 'Pickup',
        total: 'Rp 51.000',
    },
    {
        id: '12345679',
        time: 'Selasa, 20 Mei 2025 11.10 WIB',
        items: [
            'Nasi Goreng Ayam [1x] - Rp 20.000',
            'Teh Manis [1x] - Rp 5.000',
        ],
        slot: '20 May, 12:00 - 12:30',
        method: 'Pickup',
        total: 'Rp 25.000',
    },
];

export default function HistoryList() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = useAuthStore((state) => state.token); // ✅ get token from Zustand

    useEffect(() => {
        if (token) {
        fetchHistoryList();
        }
    }, [token]); // ✅ only fetch after token is ready

    useEffect(() => {
        console.log("History updated:", history[0]);
    }, [history]);


    const fetchHistoryList = async () => {
        setLoading(true);
        try {
            const response = await api.get('/order/history', {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            setHistory(response.data);
        } catch (error) {
            console.error('Error fetching history:', error);
            setError(error);
        } finally {            
            setLoading(false);
        }
    };

    const mapOrderType = (type) => {
        switch (type) {
            case "dine_in":
                return "Dine In"
            case "pick_up":
                return "Pick Up"     
            default:
                break;
        }
    }


    return (
        <ScrollView style={styles.wrapper}>
            <Text style={styles.heading}>History</Text>

            {history.map((order) => (
                <View key={order.id} style={styles.card}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.orderId}>Order ID : {order.id}</Text>
                        <Text style={styles.completedBadge}>Completed</Text>
                    </View>

                    <Text style={styles.orderTime}>
                        <Text style={{ fontWeight: 'bold' }}>Order masuk:</Text> {order.time}
                    </Text>

                    <Text style={styles.sectionTitle}>Items</Text>
                    <View style={styles.itemList}>
                        {order?.items.map((item, idx) => (
                            <Text key={idx}>• {item?.menuItem.name}</Text>
                        ))}
                    </View>

                    <View style={[styles.rowBetween, { marginTop: 12 }]}>
                        <Text>{order.slot.start_time} - {order.slot.start_time}</Text>
                        
                        <Text style={{ fontWeight: '600' }}>{mapOrderType(order.type)}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={[styles.rowBetween, { marginTop: 12 }]}>
                        <Text style={{ fontWeight: 'bold' }}>Total :</Text>
                        <Text style={{ fontWeight: 'bold', color: '#FA4A0C' }}>Rp. {order.total_price}</Text>
                    </View>

                    <TouchableOpacity style={styles.feedbackButton}>
                        <Text style={styles.feedbackText}>Ceritain pengalaman makan lo yuk</Text>
                        <Ionicons name="star" size={18} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.repeatButton}>
                        <Text style={styles.repeatText}>Pengen Repeat !</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF8F5',
        paddingVertical: 30,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 26,
        marginTop: 40
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 16,
        marginBottom: 40,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderId: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    completedBadge: {
        backgroundColor: '#0BD004',
        color: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 12,
        overflow: 'hidden',
        fontWeight: '600',
    },
    orderTime: {
        fontSize: 12,
        color: '#888',
        marginVertical: 6,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 6,
    },
    itemList: {
        marginLeft: 4,
    },
    divider: {
        height: 1,
        backgroundColor: '#FA4A0C',
        opacity: 0.3,
        marginVertical: 16,
        marginTop: 24,
        marginBottom: 24
    },
    feedbackButton: {
        marginTop: 24,
        marginBottom: 24,
        backgroundColor: '#FA4A0C',
        borderRadius: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    feedbackText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 6,
        fontSize: 14,
        alignItems: 'left'
    },
    repeatButton: {
        marginTop: 4,
        backgroundColor: '#FFE6E0',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',

    },
    repeatText: {
        color: '#FA4A0C',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
