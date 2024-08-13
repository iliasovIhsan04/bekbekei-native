import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../style";

const ResetPassword = () => {
  return (
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
        <Text style={styles.header_name}>Новый пароль</Text>
        <View></View>
      </View>
      <Text style={styles.registr_text}>Придумайте новый пароль</Text>
      <View style={styles.registr_box_block}>
        <View style={styles.input_box}>
          <Text style={[styles.label, styles.registr_label]}>Новый пароль</Text>
          <TextInput
            style={[styles.input, styles.input_form]}
            placeholder="Введите новый пароль"
            placeholderTextColor="#AAAAAA"
          />
        </View>
        <View style={styles.input_box}>
          <Text style={[styles.label, styles.registr_label]}>
            Повторите новый пароль
          </Text>
          <TextInput
            style={[styles.input, styles.input_form]}
            placeholder="Введите пароль"
            placeholderTextColor="#AAAAAA"
          />
        </View>
        <TouchableOpacity style={[styles.btn_all, styles.who_btn]}>
          Сбросить пароль
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
