import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "../style";
import { instance } from "../components/api/AllRequest";

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
    <View style={styles.all_promotion}>
      {allPromotions.map((el, index) => (
        <View key={index} style={styles.promotion_item}>
          <Text>{el.title}</Text>
          <Text>{el.description}</Text>
        </View>
      ))}
      {error && (
        <Text style={styles.error_text}>
          Произошла ошибка при загрузке данных.
        </Text>
      )}
    </View>
  );
};

export default AllPromotions;
