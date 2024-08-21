import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

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
          <Text style={[styles.label, styles.registr_label]}>Пароль</Text>
          <TextInput
            style={[styles.input, styles.input_form]}
            placeholder="Введите пароль"
            placeholderTextColor="#AAAAAA"
            secureTextEntry={!visible}
            onChangeText={(text) =>
              setUserData((prev) => ({ ...prev, password: text }))
            }
          />
          <TouchableOpacity onPress={handlePassword}>
            <Icon
              name={visible ? "eye" : "eye-slash"}
              size={20}
              style={styles.ab_eye}
            />
          </TouchableOpacity>
          {error.password && (
            <Text style={styles.error_text_registr}>{error.password[0]}</Text>
          )}
        </View>
        <View style={styles.input_box}>
          <Text style={[styles.label, styles.registr_label]}>
            Повторите пароль
          </Text>
          <TextInput
            style={[styles.input, styles.input_form]}
            placeholder="Повторите пароль"
            placeholderTextColor="#AAAAAA"
            secureTextEntry={!visible2}
            onChangeText={(text) =>
              setUserData((prev) => ({ ...prev, confirm_password: text }))
            }
          />
          <TouchableOpacity onPress={handleConfirmPassword}>
            <Icon
              name={visible2 ? "eye" : "eye-slash"}
              size={20}
              style={styles.ab_eye}
            />
          </TouchableOpacity>
          {error.confirm_password && (
            <Text style={styles.error_text_registr}>
              {error.confirm_password[0]}
            </Text>
          )}
        </View>

        <TouchableOpacity style={[styles.btn_all, styles.who_btn]}>
          Сбросить пароль
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
