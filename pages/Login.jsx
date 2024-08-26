import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../style";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  registerFailure,
  registerSuccess,
} from "../Redux/slice/activationReducer";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";
import { instance } from "../components/api/AllRequest";
import { loginUser } from "../Redux/slice/loginUserSlice";
import { MaskedTextInput } from "react-native-mask-text";

const Login = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (route.params?.welcome) {
      Toast.show({
        type: "success",
        text1: "Welcome",
        text2: "HiBoddy",
        visibilityTime: 5000,
      });
    }
  }, [route.params]);

  const handleLoginEvent = async () => {
    setIsLoading(true);
    const phoneNumber =
      "+996 " + phone.slice(0, 3) + phone.slice(3, 6) + phone.slice(6);
    try {
      const response = await instance.post("/auth/login", {
        phone: phoneNumber,
        password,
      });

      dispatch(registerSuccess(response.data));

      if (response.data.response === true) {
        navigation.navigate("Main");
        Toast.show({
          type: "success",
          text1: "Успешно!",
          text2: "Вы успешно вошли в систему.",
        });
      } else if (response.data.response === false) {
        Toast.show({
          type: "error",
          text1: "Ошибка!",
          text2: response.data.message || "Произошла ошибка",
        });
      }
      if (response.data) {
        setError(response.data);
      }
      if (response.data.isactivated === false) {
        await AsyncStorage.setItem("phone", phone.replace(/\D/g, ""));
        navigation.navigate("Activation");
      }
      if (response.data.phone) {
        Toast.show({
          type: "error",
          text1: "Ошибка!",
          text2: response.data.phone || "Произошла ошибка",
        });
      }
      if (response.data.token) {
        await AsyncStorage.setItem("tokenActivation", response.data.token);
      }
      setIsLoading(false);
    } catch (error) {
      dispatch(registerFailure(error.message));
      Toast.show({
        type: "error",
        text1: "Ошибка!",
        text2: error.message + "!" || "Произошла непредвиденная ошибка",
      });
      setIsLoading(false);
    }
    dispatch(loginUser({ phone: phoneNumber, password })).then((result) => {
      if (result.payload) {
        setPhone("");
        setPassword("");
        navigation.navigate("Main");
      }
    });
  };

  const handlePassword = () => setVisible(!visible);

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
            <View style={styles.phone_input_mask_block}>
              <Text style={styles.prefix}>+996</Text>
              <MaskedTextInput
                mask="(999) 99-99-99"
                value={phone}
                onChangeText={setPhone}
                style={[
                  styles.input,
                  styles.input_form_mask,
                  { outline: "none" },
                ]}
                placeholder="(700) 10-20-30"
                keyboardType="phone-pad"
              />
            </View>
            {error.phone && (
              <Text style={styles.error_text_registr}>{error.phone}</Text>
            )}
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Пароль</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Введите пароль"
              placeholderTextColor="#AAAAAA"
              secureTextEntry={!visible}
              onChangeText={setPassword}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
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
          <Text
            style={[styles.text_login_color, styles.text_forgot_password]}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Забыли пароль?
          </Text>
          <TouchableOpacity
            style={[styles.btn_all, styles.who_btn]}
            disabled={isLoading}
            onPress={handleLoginEvent}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Войти</Text>
            )}
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
