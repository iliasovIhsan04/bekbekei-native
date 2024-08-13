import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.forgot_password}>
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
          <Text style={styles.header_name}>Забыли пароль</Text>
          <View></View>
        </View>
        <Text style={styles.registr_text}>
          Мы отправим 6ти значный код на ваш номер телефона
        </Text>
        <View style={styles.registr_box_block}>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Номер</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="+996 (704) 61-68-02"
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <TouchableOpacity
            style={[styles.btn_all, styles.who_btn]}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            Получить код
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
