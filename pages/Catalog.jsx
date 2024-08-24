import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { ProducRedux } from "../Redux/reducer/ProductRedux";
import { useNavigation } from "@react-navigation/native";

const Catalog = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(ProducRedux());
    }
  }, [dispatch, products]);
  console.log(products);

  return (
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
    </View>
  );
};

export default Catalog;
