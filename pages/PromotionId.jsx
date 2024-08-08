import React, { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, Image } from "react-native";
import { instance } from "../components/api/AllRequest";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../style";

const PromotionId = () => {
  const route = useRoute();
  const { id } = route.params;
  const [promotionId, setPromotionId] = useState({});
  const [error, setError] = useState(null);

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
    <View style={{ flex: 1 }}>
      <View style={styles.header_block}>
        <Text style={styles.header_name}>Добро пожаловать,</Text>
        <MaterialIcons name="notifications" size={30} color="#F9671C" />
      </View>
      {promotionId.img && (
        <Image
          source={{ uri: promotionId.img }}
          style={styles.image_promotion_id}
        />
      )}
    </View>
  );
};

export default PromotionId;
