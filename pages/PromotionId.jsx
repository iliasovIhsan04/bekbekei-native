import React, { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, Image } from "react-native";
import { instance } from "../components/api/AllRequest";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

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
    <View>
      <View style={styles.header_block}>
        <Text style={styles.header_name}>Добро пожаловать,</Text>
        <MaterialIcons name="notifications" size={30} color="#F9671C" />
      </View>
      {promotionId.title && <Text>{promotionId.title}</Text>}
      {promotionId.img && (
        <Image
          source={{ uri: promotionId.img }}
          style={styles.image_promotion_id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error_text: {
    color: "red",
    fontSize: 16,
  },
  header_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  header_name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image_i: {
    width: 260,
    height: 260,
  },
});

export default PromotionId;
