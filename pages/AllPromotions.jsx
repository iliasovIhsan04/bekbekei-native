import React, { useEffect, useState } from "react";
import { View, Text, Alert, Image, ScrollView } from "react-native";
import { styles } from "../style";
import { instance } from "../components/api/AllRequest";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AllPromotions = () => {
  const [allPromotions, setAllPromotions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get("/card/all");
        setAllPromotions(res.data);
      } catch (error) {
        setError(error);
        Alert.alert("Ошибка", "Не удалось загрузить данные. Попробуйте позже.");
      }
    };
    fetchData();
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{ flexDirection: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.header_block}>
        <Text style={styles.header_name}>Добро пожаловать,</Text>
        <MaterialIcons name="notifications" size={30} color="#F9671C" />
      </View>
      <View style={styles.all_promotion_block}>
        {allPromotions.map((el, index) => (
          <View key={index} style={styles.promotion_item}>
            <Image source={{ uri: el.img }} style={styles.img_promotion} />
          </View>
        ))}
        {error && (
          <Text style={styles.error_text}>
            Произошла ошибка при загрузке данных.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default AllPromotions;
