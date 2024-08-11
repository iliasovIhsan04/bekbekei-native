import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HelpToPage = () => {
  return (
    <View>
      <Text
        style={[styles.block_title, { textAlign: "center" }, styles.bt_social]}
      >
        Связаться с нами:
      </Text>
      <View style={{ flexDirection: "column", gap: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
          }}
        >
          <TouchableOpacity style={styles.social_network_box}>
            <Image source={require("../assets/image/phone.svg")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_network_box}>
            <Image source={require("../assets/image/whatsapp.svg")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_network_box}>
            <Image source={require("../assets/image/telegram.svg")} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.our_store_text}>Адрес нашего магазина:</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <MaterialIcons name="location-pin" size={24} color={"#F9671C"} />
            <Text style={styles.our_store_title}>г. Бишкек, мкр. Ак-Орго </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HelpToPage;
