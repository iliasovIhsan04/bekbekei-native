import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "../Redux/slice/activationReducer";
import Toast from "react-native-toast-message";
import { instance } from "../components/api/AllRequest";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [local, setLocal] = useState(null);
  const dispatch = useDispatch();

  const handlePassword = () => setVisible(!visible);
  const handleConfirmPassword = () => setVisible2(!visible2);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem("token_block");
      setLocal(token);
    };
    fetchToken();
  }, []);

  const headers = {
    Authorization: `Token ${local}`,
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const newPasswordCredential = {
      password,
      confirm_password: confirmPassword,
    };
    dispatch(registerStart());
    try {
      const response = await instance.post(
        "/auth/change-password",
        newPasswordCredential,
        { headers }
      );

      dispatch(registerSuccess(response.data));
      if (response.data.response === true) {
        Toast.show({
          type: "success",
          text1: "Успешно!",
          text2: response.data.message,
        });
        navigation.navigate("Login");
      }
      if (response.data.password || response.data.confirm_password) {
        setError(response.data);
      }
      if (response.data.response === false) {
        Toast.show({
          type: "error",
          text1: "Ошибка!",
          text2: response.data.message + "!",
        });
      }
    } catch (error) {
      dispatch(registerFailure(error.message));
      Toast.show({
        type: "error",
        text1: "Ошибка!",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            value={password}
            onChangeText={setPassword}
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
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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

        <TouchableOpacity
          style={[styles.btn_all, styles.who_btn]}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Сбросить пароль</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
