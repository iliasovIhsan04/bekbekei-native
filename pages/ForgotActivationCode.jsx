import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { instance } from "../components/api/AllRequest";
import Toast from "react-native-toast-message";
import { styles } from "../style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import {
  registerFailure,
  registerSuccess,
} from "../Redux/slice/activationReducer";
import CustomOtpInput from "./CustomOtpInput";

const ForgotActivationCode = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

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

  const handleSubmit = async () => {
    setLoading(true);
    if (!code) {
      Toast.show({
        type: "error",
        text1: "Введите код подтверждения!",
      });
      setLoading(false);
      return;
    }

    if (code.length === 6) {
      const phone = await AsyncStorage.getItem("phone");
      if (!phone) {
        Toast.show({
          type: "error",
          text1: "Phone number not found!",
        });
        setLoading(false);
        return;
      }
      try {
        const phone = await AsyncStorage.getItem("phone");
        const response = await instance.post("/auth/reset-password-verify", {
          phone,
          code,
        });
        dispatch(registerSuccess(response.data));
        if (response.data.response === true) {
          Toast.show({
            type: "success",
            text1: "Успешно!",
            text2: response.data.message,
          });
          navigation.navigate("ResetPassword");
        }
        setLoading(false);
        if (response.data.response === false) {
          Toast.show({
            type: "error",
            text1: "Ошибка!",
            text2: response.data.message + "!",
          });
        }
        if (response.data.code) {
          setError(response.data);
        }
        if (response.data.code) {
          setError(response.data);
          Toast.show({
            type: "error",
            text1: "Ошибка!",
            text2: response.data.code + "!",
          });
        }
        if (response.data.token) {
          await AsyncStorage.setItem("token_block", response.data.token);
        }
      } catch (error) {
        setError(error.response?.data);
        dispatch(registerFailure(error.message));
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Ошибка!",
        text2: "Заполните все поля!",
      });
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_all}>
        <TouchableOpacity
          style={styles.back_button_right}
          onPress={() => navigation.navigate("Registration")}
        >
          <Image
            source={require("../assets/image/more-right.svg")}
            style={styles.more_right}
          />
        </TouchableOpacity>
        <Text style={styles.header_name}>Код подтверждения</Text>
        <View></View>
      </View>
      <Text style={styles.registr_text}>
        Мы отправим 6ти значный код на ваш номер телефона
      </Text>
      <View
        style={{ flexDirection: "column", justifyContent: "center", gap: 20 }}
      >
        <View>
          <Text style={[styles.label, styles.label_activation]}>
            Код подтверждения
          </Text>
          <CustomOtpInput value={code} valueLength={6} onChange={setCode} />
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.btn_all, styles.who_btn]}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Отправить</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotActivationCode;
