import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../style";
// import harry_img1 from "../assets/image/harry-buy1.svg";
// import harry_img2 from "../assets/image/harry-buy2.svg";
// import harry_img3 from "../assets/image/harry-buy3.svg";
export default function HarryUpToBuy() {
  // const shop = [
  //   {
  //     id: 1,
  //     image: harry_img1,
  //   },
  //   {
  //     id: 2,
  //     image: harry_img2,
  //   },
  //   {
  //     id: 3,
  //     image: harry_img3,
  //   },
  // ];
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
      {/* <ScrollView contentContainerStyle={styles.scroll_block_all}>
        {shop.map((el) => (
          <TouchableOpacity key={el.id} style={styles.scroll_box}>
            <Image source={el.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView> */}
    </View>
  );
}
