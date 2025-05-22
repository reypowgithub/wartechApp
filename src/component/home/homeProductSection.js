import { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import ProductItem from "../product/productItem";
import ProductItem_outstock from "../product/productOutstock";
import api from "../../lib/api";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");

export default function ProductSection() {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("food");
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await api.get('/menu');
      setMenuData(response.data);
    } catch (error) {
      setError("Failed to load menu");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Move this inside render so it always gets the latest data
  const filteredData = menuData
    .filter(item =>
      item.category.toLowerCase() === activeCategory.toLowerCase()
    )
    .filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map(item => ({
      ...item,
      type: item.available_stock > 0 ? "available" : "outstock"
    }));

  const categories = ["food", "drinks", "additional"];

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: width - 40 }}>
        <Link href={`/screen/product/${item.id}`} asChild>
          <TouchableOpacity activeOpacity={0.8}>
            {item.type === "available" ? (
              <ProductItem menuData={item} />
            ) : (
              <ProductItem_outstock />
            )}
          </TouchableOpacity>
        </Link>
      </View>
    );
  };

  return (
    <View className="px-6 bg-[#F2F2F2]">
      <View className="flex-row items-center bg-[#EFEEEE] px-3 py-2 mx-5 mt-5 rounded">
        <Ionicons name="search" size={20} color="#000" className="mr-2" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#000"
          className="flex-1 text-[16px] text-black"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

      </View>

      {/* Kategori */}
      <View className="flex-row mt-10">
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            className="flex-1 items-center"
          >
            <Text
              className={`text-[17px] ${activeCategory === category
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
        <TouchableOpacity
          onPress={() => {
            router.replace("/screen/seeall");
          }}
        >
          <Text className="text-[#FA4A0C]  text-[15px]">See All</Text>
        </TouchableOpacity>
      </View>

      {/* Item List */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        className="mb-10 "
      />
    </View>
  );
}
