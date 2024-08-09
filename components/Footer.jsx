import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const handlePress = (index, route) => {
    setActiveIndex(index);
    navigation.navigate(route);
  };

  return (
    <View style={styles.footer_block}>
      <View style={styles.container}>
        <View style={styles.d_flex}>
          <TouchableOpacity
            style={[styles.footer_nav_link, activeIndex === 0 && styles.active]}
            onPress={() => handlePress(0, "Main")}
          >
            <MaterialIcons
              name="home"
              size={30}
              color={activeIndex === 0 ? "#F9671C" : "#AAAAAA"}
            />
            <Text
              style={[
                styles.footer_text,
                activeIndex === 0 && styles.activeText,
              ]}
            >
              Главная
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.footer_nav_link, activeIndex === 1 && styles.active]}
            onPress={() => handlePress(1, "Catalog")}
          >
            <MaterialIcons
              name="view-list"
              size={30}
              color={activeIndex === 1 ? "#F9671C" : "#AAAAAA"}
            />
            <Text
              style={[
                styles.footer_text,
                activeIndex === 1 && styles.activeText,
              ]}
            >
              Каталог
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cart_position}
            onPress={() => handlePress(null, "Cart")}
          >
            <Image source={require("../assets/image/footer-cart.svg")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.footer_nav_link, activeIndex === 2 && styles.active]}
            onPress={() => handlePress(2, "Promotion")}
          >
            <MaterialIcons
              name="local-offer"
              size={30}
              color={activeIndex === 2 ? "#F9671C" : "#AAAAAA"}
            />
            <Text
              style={[
                styles.footer_text,
                activeIndex === 2 && styles.activeText,
              ]}
            >
              Акции
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.footer_nav_link, activeIndex === 3 && styles.active]}
            onPress={() => handlePress(3, "Profile")}
          >
            <MaterialIcons
              name="person"
              size={30}
              color={activeIndex === 3 ? "#F9671C" : "#AAAAAA"}
            />
            <Text
              style={[
                styles.footer_text,
                activeIndex === 3 && styles.activeText,
              ]}
            >
              Профиль
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
