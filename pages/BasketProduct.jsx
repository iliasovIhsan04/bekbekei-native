import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BasketProduct = ({ setShowFooter }) => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const [plus, setPlus] = useState({});
  const [shopCart, setShopCart] = useState([]);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const basketData =
          JSON.parse(await AsyncStorage.getItem("carts")) || [];
        const storedCart = JSON.parse(await AsyncStorage.getItem("cart")) || [];
        const storedShopCart =
          JSON.parse(await AsyncStorage.getItem("shopCart")) || [];
        const storedPlus = JSON.parse(await AsyncStorage.getItem("plus")) || {};
        setCart(storedCart);
        setBasket(basketData);
        setShopCart(storedShopCart);
        setPlus(storedPlus);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePlus = async (id) => {
    try {
      const itemTo = basket.find((el) => el.id === id);
      const itemToLocal = shopCart.find((el) => el.id === id);
      const item = itemTo || itemToLocal;

      if (item) {
        const updatedCart = [...shopCart, item];
        await AsyncStorage.setItem("shopCart", JSON.stringify(updatedCart));
        setShopCart(updatedCart);

        const newPlus = { ...plus, [id]: (plus[id] || 0) + 1 };
        await AsyncStorage.setItem("plus", JSON.stringify(newPlus));
        setPlus(newPlus);

        PriceCalculation();
      }
    } catch (error) {
      console.error("Ошибка добавления элемента:", error);
    }
  };

  const handleMinus = async (id) => {
    try {
      const itemIndex = shopCart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const updatedCart = [...shopCart];
        updatedCart.splice(itemIndex, 1);
        await AsyncStorage.setItem("shopCart", JSON.stringify(updatedCart));
        setShopCart(updatedCart);

        const newPlus = { ...plus, [id]: (plus[id] || 0) - 1 };
        await AsyncStorage.setItem("plus", JSON.stringify(newPlus));
        setPlus(newPlus);
        if (newPlus[id] <= 0) {
          await handleRemoveItem(id);
        }
        PriceCalculation();
      }
    } catch (error) {
      console.error("Ошибка уменьшения элемента:", error);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      const currentCart = JSON.parse(await AsyncStorage.getItem("carts")) || [];
      const updatedCart = currentCart.filter((item) => item.id !== id);
      await AsyncStorage.setItem("carts", JSON.stringify(updatedCart));
      setBasket(updatedCart);
      setShopCart(shopCart.filter((item) => item.id !== id));
      PriceCalculation();
    } catch (error) {
      console.error("Ошибка удаления элемента:", error);
    }
  };

  const PriceCalculation = async () => {
    try {
      const shopCartData = JSON.parse(await AsyncStorage.getItem("shopCart"));
      if (shopCartData && Array.isArray(shopCartData)) {
        const total = shopCartData.reduce(
          (acc, item) => acc + parseFloat(item.price),
          0
        );
        setCount(total);
      } else {
        setCount(0);
      }
    } catch (error) {
      console.error("Ошибка расчета цены:", error);
    }
  };

  useEffect(() => {
    PriceCalculation();
  }, [shopCart]);

  useEffect(() => {
    const checkEmptyCart = async () => {
      try {
        const carts = JSON.parse(await AsyncStorage.getItem("carts"));
        if (!carts || carts.length === 0) {
          await AsyncStorage.removeItem("carts");
        }
      } catch (error) {
        console.error("Ошибка проверки пустой корзины:", error);
      }
    };

    checkEmptyCart();
  }, []);

  useEffect(() => {
    setShowFooter(false);

    return () => {
      setShowFooter(true);
    };
  }, [setShowFooter]);

  const logoutPage = () => {
    navigation.navigate("Catalog");
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.modal_white}>
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
          <Text style={styles.header_name}>Корзина</Text>
          <View></View>
        </View>
        <View style={styles.basket_block}>
          {basket.length === 0 ? (
            <Text>Корзина пуста</Text>
          ) : (
            basket.map((el) => (
              <View style={styles.basket_box} key={el.id}>
                <View style={styles.basket_img_box}>
                  <Image source={{ uri: el.img }} style={styles.basket_image} />
                </View>
                <View style={styles.title_plus_box}>
                  <Text style={styles.basket_title} numberOfLines={2}>
                    {el.title}
                  </Text>
                  <Text style={styles.price_for}>{el.price_for}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text>{el.price} сом</Text>
                    <View style={styles.plus_minus_box}>
                      <MaterialIcons
                        name="remove"
                        size={24}
                        color="white"
                        onPress={() => handleMinus(el.id)}
                      />
                      <Text style={styles.basketTxt}>{plus[el.id] || 0}</Text>
                      {plus[el.id] === 0 && (
                        <TouchableOpacity
                          onPress={() => handleRemoveItem(el.id)}
                        />
                      )}
                      <MaterialIcons
                        name="add"
                        size={24}
                        color="white"
                        onPress={() => handlePlus(el.id)}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.placing_price_block}>
                  <View style={{ flexDirection: "column", gap: 10 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.basketSpan}>Сумма:</Text>
                      <Text style={styles.basketTotal}>{count.toFixed(2)}</Text>
                    </View>
                    <View
                      style={[
                        styles.placingPriceBox,
                        {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                      ]}
                    >
                      <Text style={styles.basketSpan}>Доставка:</Text>
                      <Text style={styles.basketTotal}>0 сом</Text>
                    </View>
                    <View
                      style={[
                        styles.placingPriceBox,
                        {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                      ]}
                    >
                      <Text style={styles.basketSpan}>Итого:</Text>
                      <Text style={styles.basketTotal}>{count.toFixed(2)}</Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.btn_all,
                      styles.who_btn,
                      styles.plaking_basket_btn,
                    ]}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ActivityIndicator color="#FFF" />
                    ) : (
                      <Text style={styles.buttonText}>
                        Перейти к оформлению
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </View>
    </View>
  );
};

export default BasketProduct;
