import React from "react";
import { styles } from "../style";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistrationPage = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.registration_block}>
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
          <Text style={styles.header_name}>Регистрация</Text>
          <View></View>
        </View>
        <View style={styles.registr_box_block}>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Имя</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Введите имя"
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Имя</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Введите имя"
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Фамилия</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Введите фамилию"
              placeholderTextColor="#AAAAAA"
            />
          </View>
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
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>
              Повторите пароль
            </Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Повторите пароль"
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <TouchableOpacity style={[styles.btn_all, styles.who_btn]}>
            Зарегистрироваться
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: "auto",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text_registration}>Уже есть аккаунт? </Text>
            <Text style={styles.text_login_color}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationPage;
