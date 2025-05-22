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
import { useLocalSearchParams } from 'expo-router';

export default function ProductItemDetail() {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <ProductHeadBar />
            <ProductDetail id={id} />
            <ProductBtnAddToCart />
        </View>
    );
}
