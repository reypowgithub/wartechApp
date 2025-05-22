import {
    Button,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,

} from "react-native";

import ProductList from "../../../component/product/productList";
import ProductHeadBar from "../../../component/product/productHeadbar";

export default function Seeall() {
    return (
        <View className="flex-1 relative bg-white">
            <ProductHeadBar />
            <ScrollView contentContainerStyle={{ }}>
                <ProductList />
            </ScrollView>
        </View>
    );
}
