import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../style";
import { instance } from "./api/AllRequest";

const HarryBuyTo = () => {
  const [harryBuy, setHarryBuy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/card/type/one`);
        setHarryBuy(res.data);
      } catch (error) {
        setError(error);
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
    <View style={styles.harry_buy_block}>
      <View style={styles.title_box}>
        <Text style={styles.title_page}>Успей купить</Text>
        <TouchableOpacity style={[styles.click_text, styles.back_button]}>
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
        {harryBuy.map((el, id) => (
          <TouchableOpacity key={id} style={styles.harry_scroll_box}>
            <Image source={{ uri: el.img }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HarryBuyTo;
