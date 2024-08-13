import React from "react";
import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";

const WhoLesalePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.who_sales_block}>
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
            <Text style={styles.header_name}>Контрагент Бекбекей</Text>
            <View></View>
          </View>
          <View>
            <Image
              source={require("../assets/image/who-sales-img.svg")}
              style={styles.who_sales_img}
            />
            <View style={styles.who_sales_settins_block}>
              <Text style={styles.who_text_title}>
                Здесь вы можете отправить запрос на становление контрагента
              </Text>
              <View style={styles.who_block_box}>
                <View style={styles.who_box1}>
                  <Image
                    style={({ width: 36 }, { height: 36 })}
                    source={require("../assets/image/who-add-product.svg")}
                  />
                  <Text style={styles.who_text16}>
                    Возможность заказывать товары онлайн
                  </Text>
                </View>
                <View style={styles.who_box2}>
                  <View style={styles.who_box_item}>
                    <Image
                      style={({ width: 36 }, { height: 36 })}
                      source={require("../assets/image/paper-money-two.svg")}
                    />
                    <Text style={styles.who_text16}>Оптовые цены</Text>
                  </View>
                  <View style={styles.who_box_item}>
                    <Image
                      style={({ width: 36 }, { height: 36 })}
                      source={require("../assets/image/transporter.svg")}
                    />
                    <Text style={styles.who_text16}>Бесплатная доставка</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={[styles.btn_all, styles.who_btn]}>
                Отправить заявку
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WhoLesalePage;
