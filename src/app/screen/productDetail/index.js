import {
    Button,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,

} from "react-native";

import ProductHeadBar from "../../../component/product/productHeadbar";
import ProductDetail from "../../../component/product/productDetail";
import ProductBtnAddToCart from "../../../component/product/productBtnAddCart";

export default function HomeScreen() {
    return (
        <View>
            <ProductHeadBar />
            <ProductDetail />
            <ProductBtnAddToCart />
        </View>
    );
}
