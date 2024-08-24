import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { styles } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { ProducRedux } from "../Redux/reducer/ProductRedux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Catalog = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.products);
  const { width } = Dimensions.get("window");

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(ProducRedux());
    }
  }, [dispatch, products]);

  const stylesCatalog = StyleSheet.create({
    shop_box: {
      width: width > 400 ? "30%" : "48%",
      height: 140,
      borderRadius: 14,
      padding: 12,
      marginBottom: 10,
      cursor: "pointer",
      position: "relative",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{ flexDirection: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.catalog}>
        <View style={styles.container}>
          <View style={styles.header_all}>
            <TouchableOpacity
              style={styles.back_button_right}
              onPress={() => navigation.navigate("Main")}
            >
              <Image
                source={require("../assets/image/more-right.svg")}
                style={styles.more_right}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/image/alma-log.svg")}
              style={styles.img_logo}
            />
            <View></View>
          </View>
          <View style={styles.catalog_block}>
            <View style={styles.catalog_search}>
              <Icon name="search" size={24} />
              <TextInput
                style={[
                  styles.input,
                  styles.input_from_catalog,
                  { outline: "none" },
                ]}
                placeholder="Поиск товаров"
              />
            </View>
            <View style={styles.shop_all}>
              {products.map((el) => (
                <TouchableOpacity
                  style={[
                    stylesCatalog.shop_box,
                    { backgroundColor: el.color },
                  ]}
                  key={el.id}
                >
                  <Text style={styles.shop_name} numberOfLines={2}>
                    {el.name}
                  </Text>
                  <View style={styles.shop_img_block}>
                    <Image style={styles.shop_img} source={{ uri: el.img }} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Catalog;
