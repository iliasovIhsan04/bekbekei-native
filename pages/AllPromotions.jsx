import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../style";
import { instance } from "../components/api/AllRequest";
import { useNavigation } from "@react-navigation/native";

const AllPromotions = () => {
  const [allPromotions, setAllPromotions] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

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
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
          <Image source={require("../assets/image/alma-log.svg")} />
          <View></View>
        </View>

        <View style={styles.all_promotion_block}>
          {allPromotions.map((el, index) => (
            <TouchableOpacity
              key={index}
              style={styles.promotion_item}
              onPress={() =>
                navigation.navigate("PromotionDetail", { id: el.id })
              }
            >
              <Image source={{ uri: el.img }} style={styles.img_promotion} />
            </TouchableOpacity>
          ))}
          {error && (
            <Text style={styles.error_text}>
              Произошла ошибка при загрузке данных.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default AllPromotions;
