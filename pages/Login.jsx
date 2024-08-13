import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login}>
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
          <Text style={styles.header_name}>Вход</Text>
          <View></View>
        </View>
        <View style={styles.registr_box_block}>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Номер</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="+996 (704) 61-68-02"
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Пароль</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Введите пароль"
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <Text
            style={[styles.text_login_color, styles.text_forgot_password]}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Забыли пароль?
          </Text>
          <TouchableOpacity style={[styles.btn_all, styles.who_btn]}>
            Войти
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: "auto",
            }}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.text_registration}>Еще нет аккаунта?</Text>
            <Text style={styles.text_login_color}>Зарегистрироваться </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
