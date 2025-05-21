import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

export default function NotFoundModal({ visible, onClose }) {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Akun Tidak Ditemukan</Text>
                    <Text style={styles.description}>
                        Kami tidak dapat menemukan akun dengan email yang Anda masukkan. Pastikan email Anda masukkan sudah benar atau coba lagi dengan lebih hati-hati.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 16,
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FA4A0C',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
