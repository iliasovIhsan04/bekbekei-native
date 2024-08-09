import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "../style";
import { instance } from "./api/AllRequest";
import { useNavigation } from "@react-navigation/native";

const NewPromotion = () => {
  const [promotion, setPromotion] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/card/type/two`);
        setPromotion(res.data);
      } catch (error) {
        setError(error);
        console.error(error);
        Alert.alert("Ошибка", "Не удалось загрузить данные. Попробуйте позже.");
      }
    };
    fetchData();
  }, []);

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
    <View style={styles.promotion_block}>
      <View style={styles.title_box}>
        <Text style={styles.title_page}>Акции</Text>
        <TouchableOpacity
          style={[styles.click_text, styles.back_button]}
          onPress={() => navigation.navigate("Promotion")}
        >
          <Text>Все</Text>
          <Image
            source={require("../assets/image/more-left.svg")}
            style={styles.more_left}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll_block_all}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {promotion.map((el) => (
          <TouchableOpacity
            key={el.id}
            style={styles.scroll_box}
            onPress={() =>
              navigation.navigate("PromotionDetail", { id: el.id })
            }
          >
            <Image source={{ uri: el.img }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewPromotion;
