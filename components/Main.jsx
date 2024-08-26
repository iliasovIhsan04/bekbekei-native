import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../style";
import HarryBuyTo from "./HarryBuyTo";
import Header from "./Header";
import NewPromotion from "./NewPromotion";
import { fetchUserInfo } from "../Redux/reducer/UserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "./Footer";

const Main = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("tokenActivation");
      return token ? token : false;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return false;
    }
  };

  const token = getToken();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const data = useSelector((state) => state.users);
  const users = data?.user;

  return (
    <ScrollView
      contentContainerStyle={{ flexDirection: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.main}>
          <Header users={users} />
          {token && (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <ImageBackground style={styles.bonus_box}>
                <View style={styles.inner_box}>
                  <Text style={styles.bonus_cart}>Бонусная {"\n"} карта</Text>
                  <Text style={styles.bonus_score}>
                    {data.user.bonus}
                    <Text style={styles.bonus}>баллов </Text>
                  </Text>
                </View>
                <Image
                  source={{ uri: data.user.qrimg }}
                  style={styles.image_bonus}
                />
              </ImageBackground>
            </TouchableOpacity>
          )}
          <View style={styles.scanner_block}>
            <TouchableOpacity style={styles.scanner}>
              <Image source={require("../assets/image/scanning.svg")} />
              <Text style={styles.scanner_score}>Проверить цену</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scanner}>
              <Image source={require("../assets/image/interfaceRed.svg")} />
              <Text style={styles.scanner_score}>Избранные товары</Text>
            </TouchableOpacity>
          </View>
          <NewPromotion />
          <HarryBuyTo />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
