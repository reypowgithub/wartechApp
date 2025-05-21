import "../../../global.css";

import { View, Text } from 'react-native';
import LoginHeader from '../../../component/Login/loginHeader';
import Loginfield from '../../../component/Login/loginField';
import LoginfieldOTP from '../../../component/Login/loginFieldOTP';

import HomeTopBar from "../../../component/Home/homeTopbar";
import HomeNavbar from "../../../component/Home/homeNavbar";

import FoodsHeadbar from "../../../component/foods/foodsHeadbar";
import FoodsList from "../../../component/foods/foodsList";
import FoodsDetail from "../../../component/foods/foodsDetail";


export default function App() {
  return (
    <View>
      {/* LOGIN */}
      {/* <LoginHeader />
      <Loginfield />
      <LoginfieldOTP /> */}

      {/* MENU HOME */}
      {/* <HomeTopBar />
      <HomeNavbar /> */}

      {/* MENU FOOD */}
      <FoodsHeadbar />
      {/* <FoodsList /> */}
      <FoodsDetail />
    </View>
  );
}
