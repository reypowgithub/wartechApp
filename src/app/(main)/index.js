import { View, Text } from 'react-native';
import { removeAccessToken } from "../../lib/auth";
import { router } from "expo-router";

import LoginHeader from '../../component/auth/loginHeader.js';
import Loginfield from '../../component/auth/loginField.js';
import LoginfieldOTP from '../../component/auth/loginFieldOTP.js';

import HomeTopBar from "../../component/home/homeTopbar.js";
import HomeNavbar from "../../component/home/homeNavbar.js";

// import FoodsHeadbar from "../../component/product/productHeadbar.js";
// import FoodsList from "../../component/product/productList.js";
// import FoodsDetail from "../../component/product/productDetail.js";

import ProductSection from "../../component/home/homeProductSection.js"

export default function Home() {

  // MARK: TOLONG APUS LOGOUT KALO UDAH BUAT YANG PROPER!!!!!!!! -BAPHOMET
  // const handleLogout = async () => {
  //   await removeAccessToken();
  //   router.replace("/auth/login");
  // };

  return (
    // <View style={styles.container}>
    //   <ProductSection />
    //   <Button 
    //     title="Log Out"
    //     onPress={handleLogout}
    //   />
    // </View>
    <View>
      <ProductSection />
    </View>
  );
}
