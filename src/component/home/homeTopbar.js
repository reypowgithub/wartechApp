import { View, Text, TextInput, StyleSheet } from 'react-native';

import Logo from '../../../assets/wartech_logo.svg';
import IconFavorit from '../../../assets/icon_favorit.svg';

export default function HomeTopBar() {
    return (
        <View style={{ backgroundColor: "#F2F2F2" }}>
            <View style={styles.container}>
                <View><Logo width={72} height={72} /></View>
                <View style={styles.glowWrapper}>
                    <IconFavorit width={72} height={72} />
                </View>
            </View>

            <View style={styles.hero}>
                <Text style={{ fontSize: 34 }}>Santapan enak bwanget buat lo!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 30
    },
    hero: {
        backgroundColor: '#F2F2F2',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    searchContainer: {
        backgroundColor: '#EFEEEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        borderRadius: 0,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000', // input text color
        backgroundColor: '#EFEEEE'
    },
});
