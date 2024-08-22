import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import {
  registerFailure,
  registerSuccess,
} from "../Redux/slice/activationReducer";
import { instance } from "../components/api/AllRequest";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const route = useRoute();

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
    if (!phone.trim()) {
      setError({ phone: "Пожалуйста, введите номер телефона." });
      return;
    }

    setLoading(true);
    const phoneNumber =
      "+996 " + phone.slice(0, 3) + phone.slice(3, 6) + phone.slice(6);
    try {
      const response = await instance.post("/auth/reset-password", {
        phone: phoneNumber,
      });
      const formattedPhone = "+996 " + phone;
      await AsyncStorage.setItem("phone", JSON.stringify(formattedPhone));
      dispatch(registerSuccess(response.data));
      if (response.data.response === true) {
        navigation.navigate("ForgotActivationCode");
        Toast.show({
          type: "success",
          text1: "Успешно!",
          text2: response.data.message,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Ошибка!",
          text2: response.data.message || "Произошла ошибка",
        });
      }
      if (response.data.phone) {
        setError(response.data);
        Toast.show({
          type: "error",
          text1: "Ошибка!",
          text1: response.data.phone || "Произошла ошибка",
        });
      }
    } catch (error) {
      dispatch(registerFailure(error.message));
      Toast.show({
        type: "error",
        text1: "Ошибка!",
        text1: error.message || "Произошла непредвиденная ошибка",
      });
    } finally {
      setLoading(false);
    }
  };

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
            <View style={styles.phone_input_mask_block}>
              <Text style={styles.prefix}>+996</Text>
              <TextInputMask
                type={"custom"}
                options={{ mask: "(999) 99-99-99" }}
                value={phone}
                onChangeText={setPhone}
                style={[styles.input, styles.input_form_mask]}
                placeholder="(700) 10-20-30"
                keyboardType="phone-pad"
              />
            </View>
            {error.phone && (
              <Text style={styles.error_text_registr}>{error.phone}</Text>
            )}
          </View>
          <TouchableOpacity
            style={[styles.btn_all, styles.who_btn]}
            disabled={loading}
            onPress={handleLoginEvent}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Получить код</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
