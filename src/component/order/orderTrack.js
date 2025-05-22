import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import useAuthStore from '../../store/authStore';
import api from '../../lib/api';

export default function OrderTrackerCard() {
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const [loading, setLoading] = useState(false);

  console.log(orders);

  const statusList = [
    {
      key: 'confirmed',
      text: 'Confirmed',
      color: '#007BFF',
      background: '#E0F0FF',
      message: 'Order kamu udah dikonfirmasi, ditunggu ya!',
    },
    {
      key: 'preparing',
      text: 'Preparing',
      color: '#FCAB8E',
      background: '#FFF1E5',
      message: 'Tunggu sebentar lagi dimasakin nih, sabar ya',
    },
    {
      key: 'ready',
      text: 'Ready for Pickup',
      color: '#FA4A0C',
      background: '#FEECE5',
      message: 'Udah jadi, tinggal ambil aja jangan sampai dingin',
    },
  ];

  useEffect(() => {
    if (token) fetchOrderList();
  }, [token]);

  const fetchOrderList = async () => {
    setLoading(true);
    try {
      const response = await api.get("/order/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data || []);
    } catch (error) {
      console.error("Error fetching order status:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orders.length === 0) return null;

  const order = orders[0];
  const statusIndex = statusList.findIndex((s) => s.key === order.status);
  const currentStatus = statusList[statusIndex] || {
    text: 'Unknown',
    color: '#888',
    background: '#EEE',
    message: 'Status tidak diketahui',
  };

  const handleAdvanceStatus = async () => {
    const statusFlow = ['confirmed', 'preparing', 'ready', 'pickedup'];
    const patchEndpointMap = {
      confirmed: `/order/${order.id}/payment/mock`,   // ✅ confirmed ➜ preparing
      preparing: `/order/${order.id}/ready`,          // ✅ preparing ➜ ready
      ready: `/order/${order.id}/pickedup`,           // ✅ ready ➜ pickedup
    };
  
    const currentStatus = order.status;
    const nextStepIndex = statusFlow.indexOf(currentStatus) + 1;
  
    // Stop if unknown status or already at end
    if (!patchEndpointMap[currentStatus] || nextStepIndex >= statusFlow.length) {
      router.replace("/(main)/history");
      return;
    }
  
    try {
      await api.patch(patchEndpointMap[currentStatus], null, {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      // Update local state
      const updatedOrder = { ...order, status: statusFlow[nextStepIndex] };
      setOrders([updatedOrder, ...orders.slice(1)]);
  
      console.log(`✅ Status changed to: ${statusFlow[nextStepIndex]}`);
    } catch (error) {
      console.error(`❌ Failed to update from ${currentStatus}:`, error.response?.data || error.message);
    }
  };
  
  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>My Order</Text>
      <Text style={styles.subHeading}>Track Order Lo!</Text>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.orderId}>Order ID : {order.id}</Text>
          <Text style={[styles.statusBadge, {
            backgroundColor: currentStatus.background,
            color: currentStatus.color,
          }]}>
            {currentStatus.text}
          </Text>
        </View>

        <Text style={styles.orderTime}>
          Order masuk: {new Date(order.createdAt).toLocaleString('id-ID', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
          })} WIB
        </Text>

        <Text style={styles.sectionTitle}>Items</Text>
        <View style={styles.itemList}>
          {order.items.map((item, idx) => (
            <Text key={idx}>
              • {item.menuItem.name} [{item.quantity}x] - Rp {item.price_per_item}
            </Text>
          ))}
        </View>

        <View style={[styles.rowBetween, { marginTop: 12 }]}>
          <Text>{order.slot.start_time} - {order.slot.end_time}</Text>
          <Text style={{ fontWeight: '600' }}>{order.type === 'pick_up' ? 'Pickup' : 'Dine In'}</Text>
        </View>

        <View style={styles.divider} />

        <View style={[styles.rowBetween, { marginTop: 12 }]}>
          <Text style={{ fontWeight: 'bold' }}>Total :</Text>
          <Text style={{ fontWeight: 'bold', color: '#FA4A0C' }}>Rp {order.total_price}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#8EBEFC"
            style={styles.icon}
          />
          <Text style={styles.text}>{currentStatus.message}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAdvanceStatus}>
          <Text style={styles.buttonText}>Simulate: Advance to Next Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: '#FFF8F5', flex: 1 },
  heading: {
    fontSize: 16, fontWeight: 'bold', textAlign: 'center',
    marginBottom: 26, marginTop: 50,
  },
  subHeading: {
    fontSize: 34, fontWeight: '600', textAlign: 'left',
    marginBottom: 40, marginLeft: 32,
  },
  card: {
    backgroundColor: 'white', borderRadius: 16,
    padding: 16, marginHorizontal: 16,
  },
  orderId: { fontWeight: 'bold', fontSize: 16 },
  orderTime: { fontSize: 12, color: '#888', marginVertical: 4 },
  statusBadge: {
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 10, fontSize: 12, overflow: 'hidden',
  },
  sectionTitle: { fontWeight: 'bold', marginTop: 10, marginBottom: 4 },
  itemList: { marginLeft: 4 },
  rowBetween: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  button: {
    backgroundColor: '#FA4A0C', paddingVertical: 12,
    borderRadius: 10, marginTop: 12, alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  divider: {
    height: 1, backgroundColor: '#FA4A0C',
    opacity: 0.3, marginVertical: 16,
  },
  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 8, backgroundColor: '#EBF4FF',
    borderRadius: 10, marginTop: 16,
  },
  icon: { marginRight: 12, marginLeft: 8 },
  text: { fontSize: 12, flex: 1, flexWrap: 'wrap' },
});
