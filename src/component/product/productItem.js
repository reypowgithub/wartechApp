import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import icon from "../../../assets/icon.png";

export default function ProductItem({ menuData }) {
  const { name, price, rating } = menuData;
  const imageSource = '../../assets/images/pecel-sambal-lele.png'; // Update this to your image path

  console.log("Image Source:", imageSource);
    

  console.log(menuData);

  return (
    <View className="m-4 items-center justify-center mt-[70]">
      <View className="bg-white pt-12 p-4 rounded-[30px] items-center justify-center w-[220px] h-[300px] shadow-md relative">
        <Text className="font-bold mb-1 text-[20px] text-black text-center mt-10">
          {name}
        </Text>
        <View className="flex-row m-2">
          <Text className="text-red-500 font-light text-[17px]">Rp. </Text>
          <Text className="text-red-500 font-light text-[17px]">{price}</Text>
        </View>
        <View className="flex-row mt-2 mx-5 items-center space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              name={index < rating ? "star" : "star-o"}
              size={16}
              color="#FACC15"
            />
          ))}
        </View>
      </View>



      <Image
        source={require('../../../assets/images/pecel-sambal-lele.png')}
        className="w-[164px] h-[164px] rounded-full absolute -top-[60px]"
      />
    </View>
  );
}
