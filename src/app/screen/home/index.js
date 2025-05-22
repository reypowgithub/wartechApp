import {
    Button,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,

} from "react-native";

import HomeTopBar from "../../../component/home/homeTopbar";
import HomeProductSession from "../../../component/home/homeProductSection";
import HomeNavbar from "../../../component/home/homeNavbar";

export default function HomeScreen() {
    return (
        <View className="flex-1 relative bg-white">
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <HomeTopBar />
                <HomeProductSession />
            </ScrollView>
            <HomeNavbar />
        </View>
    );
}
