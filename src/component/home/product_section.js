import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import ProductItem from "../product/product_item";
import ProductItem_outstock from "../product/product_outstock";

const { width } = Dimensions.get("window");

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("Foods");

  const data = {
    Foods: [
      { id: "1", type: "available" },
      { id: "2", type: "available" },
      { id: "3", type: "outstock" },
    ],
    Drinks: [
      { id: "4", type: "available" },
      { id: "5", type: "outstock" },
    ],
    Additional: [
      { id: "6", type: "outstock" },
      { id: "7", type: "outstock" },
    ],
  };

  const categories = ["Foods", "Drinks", "Additional"];

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: width - 40 }}>
        {item.type === "available" ? <ProductItem /> : <ProductItem_outstock />}
      </View>
    );
  };

  return (
    <View className="px-6 mt-10 ">
      {/* Kategori */}
      <View className="flex-row mt-10">
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            className="flex-1 items-center"
          >
            <Text
              className={`text-[17px] ${
                activeCategory === category
                  ? "text-[#FA4A0C] font-bold"
                  : "text-gray-500"
              }`}
            >
              {category}
            </Text>
            {activeCategory === category && (
              <View className="w-10 h-[2px] bg-[#FA4A0C] mt-1 rounded-full" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* See All */}
      <View className="mt-[15] flex-row justify-end px-5">
        <TouchableOpacity onPress={() => console.log("See All pressed")}>
          <Text className="text-[#FA4A0C]  text-[15px]">See All</Text>
        </TouchableOpacity>
      </View>

      {/* Item List */}
      <FlatList
        data={data[activeCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        className="mb-10 mt-8"
      />
    </View>
  );
}
