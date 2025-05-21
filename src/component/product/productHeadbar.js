import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconFavorit from '../../../assets/Heart.svg';

export default function FoodsHeadbar() {
    return (
        <View style={{ backgroundColor: "#F2F2F2" }}>
            <View style={styles.container}>
                <View style={{}}>
                    <Ionicons name="chevron-back-outline" size={24} color="#FA4A0C" style={styles.icon} />
                </View>
                <View style={{}}>
                    <View style={styles.glowWrapper}>
                        <IconFavorit width={16} height={16} />
                    </View>
                </View>
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
        marginTop: 48
    },
    icon: {
        marginRight: 8,
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
        shadowOpacity: 0.1,         // glow tipis
        shadowRadius: 30,           // efek blur menyebar
        elevation: 10,              // glow di Android
        alignSelf: 'center',        // center di parent jika diperlukan
        marginBottom: 10,
    },


});
