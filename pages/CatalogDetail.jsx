import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../style";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { instance } from "../components/api/AllRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CatalogDetail = ({ setShowFooter }) => {
  const navigation = useNavigation();
  const [tabs, setTabs] = useState([]);
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [subCat, setSubCat] = useState(0);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const route = useRoute();
  const [shopCart, setShopCart] = useState([]);
  const [isBasket, setIsBasket] = useState([]);
  const [basketStatus, setBasketStatus] = useState({});

  const { cat } = route.params || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await instance.get(`/product/list?cat=${cat}`);
        setData(response.data);
        setIsDataAvailable(response.data.length > 0);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cat]);

  const fetchCategoryData = async (dataID) => {
    try {
      const response = await instance.get(`/product/list?cat=${dataID}`);
      setData(response.data);
      setIsDataAvailable(response.data.length > 0);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleCategorySelection = () => {
    setSubCat(0);
    setSelectedIndex(-1);
    fetchCategoryData(cat);
  };

  const fetchData = async (subCatId) => {
    try {
      const response = await instance.get(`/product/list?sub_cat=${subCatId}`);
      setData(response.data);
      setIsDataAvailable(response.data.length > 0);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleTabClick = (selectedId) => {
    setSubCat(selectedId);
    setSelectedIndex(tabs.findIndex((el) => el.id === selectedId));
    fetchData(selectedId);
  };

  const OneFunc = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/product/sub-categories/${cat}`);
      setTabs(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    OneFunc();
  }, [cat]);

  useEffect(() => {
    const loadBasket = async () => {
      try {
        const basket = JSON.parse(await AsyncStorage.getItem("carts")) || [];
        const storedShopCart =
          JSON.parse(await AsyncStorage.getItem("shopCart")) || [];
        setShopCart(storedShopCart);
        setIsBasket(basket);

        // Initialize basket status
        const basketStatus = {};
        for (const item of storedShopCart) {
          basketStatus[item.id] = true;
        }
        setBasketStatus(basketStatus);
      } catch (error) {
        console.error("Error loading data from AsyncStorage", error);
      }
    };
    loadBasket();
  }, []);

  const Basket = async (el, id) => {
    try {
      const prevID = JSON.parse(await AsyncStorage.getItem("plus")) || {};
      const updatedPrevID = { ...prevID, [id]: 1 };
      await AsyncStorage.setItem("plus", JSON.stringify(updatedPrevID));
      await AsyncStorage.setItem("plusOne", JSON.stringify(updatedPrevID));

      const updatedCart = [...shopCart, el];
      await AsyncStorage.setItem("shopCart", JSON.stringify(updatedCart));
      setShopCart(updatedCart);

      await AsyncStorage.setItem(`activeItems_${id}`, id);

      const existingCart =
        JSON.parse(await AsyncStorage.getItem("carts")) || [];
      const updatedExistingCart = [...existingCart, el];
      await AsyncStorage.setItem("carts", JSON.stringify(updatedExistingCart));

      setBasketStatus((prevStatus) => ({ ...prevStatus, [id]: true }));

      Alert.alert("Товар добавлен в корзину!");
    } catch (error) {
      console.error("Error updating AsyncStorage", error);
    }
  };

  useEffect(() => {
    setShowFooter(false);

    return () => {
      setShowFooter(true);
    };
  }, [setShowFooter]);
  const renderProduct = (el) => {
    return (
      <View key={el.id} style={styles.categorio_shop}>
        <View style={styles.categorio_img_box}>
          <Image
            source={{ uri: el.img }}
            style={styles.categorio_img_box_img}
          />
        </View>
        <View>
          <Text style={styles.bek_shop_price}>
            {el.old_price ? el.old_price : el.price} сом
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <Text style={styles.cart_text}> По карте:</Text>
            <Text style={styles.bek_shop_price_old}>{el.price}</Text>
          </View>
          <Text style={styles.bek_shop_title} numberOfLines={1}>
            {el.title}
          </Text>
        </View>
        {basketStatus[el.id] ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("Basket")}
            style={[styles.btn_all, styles.btn_categories]}
          >
            <Text style={{ color: "#F9671C", fontSize: 14, fontWeight: 500 }}>
              В корзине
            </Text>
            <Icon name="shopping-cart" size={24} color="#F9671C" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => Basket(el, el.id)}
            style={[styles.btn_all, styles.btn_categories]}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={{ color: "#F9671C", fontSize: 14, fontWeight: 500 }}>
                В корзину
              </Text>
            )}
            <Icon name="shopping-cart" size={24} color="#F9671C" />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.catalog_detail}>
      <View style={styles.container}>
        <View style={styles.header_all}>
          <TouchableOpacity
            style={styles.back_button_right}
            onPress={() => navigation.navigate("Catalog")}
          >
            <Image
              source={require("../assets/image/more-right.svg")}
              style={styles.more_right}
            />
          </TouchableOpacity>
          <View style={styles.catalog_details_search}>
            <Icon name="search" size={24} />
            <TextInput
              value={value}
              onChangeText={setValue}
              style={[
                styles.input,
                styles.input_from_catalog,
                { outline: "none" },
              ]}
              placeholder="Поиск товаров"
            />
          </View>
        </View>
        <View style={styles.catalog_box}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.catalog_tab_block}>
              <TouchableOpacity
                style={[styles.tab, selectedIndex === -1 && styles.activeTab]}
                onPress={handleCategorySelection}
              >
                <Text
                  style={[
                    styles.tab_text,
                    selectedIndex === -1 && styles.tab_text_active,
                  ]}
                >
                  Все
                </Text>
              </TouchableOpacity>
              {tabs.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.tab,
                    selectedIndex === index && styles.activeTab,
                  ]}
                  onPress={() => handleTabClick(tab.id)}
                >
                  <Text
                    style={[
                      styles.tab_text,
                      selectedIndex === index && styles.tab_text_active,
                    ]}
                  >
                    {tab.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <ScrollView style={{ marginTop: 30 }}>
            {loading ? (
              <View style={styles.result_categorie_box}>
                <ActivityIndicator />
              </View>
            ) : !isDataAvailable ? (
              <View style={styles.result_categorie_box}>
                <Text style={styles.result_categorie}>Товаров нет!</Text>
              </View>
            ) : (
              <View style={styles.catalog_box_details}>
                {data
                  .filter((obj) =>
                    obj.title.toLowerCase().includes(value.toLowerCase())
                  )
                  .map(renderProduct)}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CatalogDetail;
