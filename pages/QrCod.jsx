import React, { useEffect } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUserInfo } from "../Redux/reducer/UserInfo";
import Footer from "../components/Footer";

const QrCod = () => {
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

  const user = useSelector((state) => state.users);
  return (
    <View style={styles.qr_cod_block}>
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
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.your_card_text}> Ваша карта</Text>
            <Text style={styles.gr_cod_bonus_id}>{user.user.bonus_id}</Text>
          </View>
          <View></View>
        </View>
        <View style={styles.or_cod_box}>
          <Image
            style={styles.gr_cod_img}
            source={{ uri: user?.user?.qrimg }}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default QrCod;
