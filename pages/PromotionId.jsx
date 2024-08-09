import React, { useEffect, useState } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";
import { instance } from "../components/api/AllRequest";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../style";

const PromotionId = () => {
  const route = useRoute();
  const { id } = route.params;
  const [promotionId, setPromotionId] = useState({});
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`card/${id}`);
        setPromotionId(res.data);
      } catch (error) {
        setError(error);
        console.error(error);
        Alert.alert("Ошибка", "Не удалось загрузить данные. Попробуйте позже.");
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return (
      <View style={styles.error_view}>
        <Text style={styles.error_text}>
          Произошла ошибка при загрузке данных.
        </Text>
      </View>
    );
  }

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
        {/* <Text style={[styles.header_name, styles.header_text_center]}>
          акции
        </Text> */}
        <Image
          source={require("../assets/image/alma-log.svg")}
          style={styles.img_logo}
        />
        <View></View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.d_flex}>
          <Text style={styles.prom_text}>{promotionId.title}! </Text>
          <Text style={[styles.prom_text, styles.prom_date]}>
            {promotionId.datefrom}-{promotionId.dateto}
          </Text>
        </View>
        {promotionId.img && (
          <Image
            source={{ uri: promotionId.img }}
            style={styles.image_promotion_id}
          />
        )}
      </View>
    </View>
  );
};

export default PromotionId;
