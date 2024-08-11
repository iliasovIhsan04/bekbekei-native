import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "../style";

const WhoLesalePage = () => {
  return (
    <View style={styles.who_sales_block}>
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
          <View>
            <Text>
              Здесь вы можете отправить запрос на становление контрагента
            </Text>
            <View style={styles.who_block_box}>
              <View style={styles.who_box1}>
                <Image
                  style={({ width: 45 }, { height: 45 })}
                  source={require("../assets/image/who-add-product.svg")}
                />
                <Text style={styles.text16}>
                  Возможность заказывать товары онлайн
                </Text>
              </View>
              <View style={styles.who_box2}>
                <View style={styles.who_box_item}>
                  <Image
                    style={({ width: 45 }, { height: 45 })}
                    source={require("../assets/image/paper-money-two.svg")}
                  />
                  <Text style={styles.text16}>Оптовые цены</Text>
                </View>
                <View style={styles.who_box_item}>
                  <Image
                    style={({ width: 45 }, { height: 45 })}
                    source={require("../assets/image/transporter.svg")}
                  />
                  <Text style={styles.text16}>Бесплатная доставка</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WhoLesalePage;
