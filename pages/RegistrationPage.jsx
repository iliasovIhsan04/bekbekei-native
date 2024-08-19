import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "../Redux/slice/activationReducer";
import { instance } from "../components/api/AllRequest";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { styles } from "../style";
import { TextInputMask } from "react-native-masked-text";

const RegistrationPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.getElement().focus();
    }
  }, []);

  const [userData, setUserData] = useState({
    last_name: "",
    first_name: "",
    phone: "",
    confirm_password: "",
    password: "",
  });

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
    setIsLoading(true);

    const phoneNumber =
      "+996 " +
      userData.phone.slice(0, 3) +
      userData.phone.slice(3, 6) +
      userData.phone.slice(6);

    const userDataWithPhone = {
      ...userData,
      phone: phoneNumber,
    };
    await AsyncStorage.setItem("phone", "996" + userData.phone);

    dispatch(registerStart());
    try {
      const response = await instance.post("/auth/register", userDataWithPhone);
      if (response.data.phone) {
        Toast.show({
          type: "error",
          text1: response.data.phone + "!",
        });
      }
      if (response.data.errors || response.data.non_field_errors) {
        const serverErrors =
          response.data.errors || response.data.non_field_errors;
        setError(serverErrors);
        Toast.show({
          type: "error",
          text1: Object.values(serverErrors).join(", ") + "!",
        });
      } else if (response.data.response === true) {
        Toast.show({
          type: "success",
          text1: response.data.message,
        });
        navigation.navigate("ActivationCode");
      } else {
        setError(response.data);
      }
      dispatch(registerSuccess(response.data));
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Произошла ошибка!",
        text2: "Пожалуйста, повторите попытку позже.",
      });
      dispatch(registerFailure(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  const handlePassword = () => setVisible(!visible);
  const handleConfirmPassword = () => setVisible2(!visible2);

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
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, first_name: text }))
              }
            />
            {error.first_name && (
              <Text style={styles.error_text_registr}>{error.first_name}</Text>
            )}
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Фамилия</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="Введите фамилию"
              placeholderTextColor="#AAAAAA"
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, last_name: text }))
              }
            />
            {error.last_name && (
              <Text style={styles.error_text_registr}>
                {error.last_name[0]}
              </Text>
            )}
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Номер</Text>
            <View style={styles.phone_input_mask_block}>
              <Text style={styles.prefix}>+996</Text>
              <TextInputMask
                ref={inputRef}
                type={"custom"}
                options={{
                  mask: "(999) 99-99-99",
                }}
                value={userData.phone}
                onChangeText={(text) =>
                  setUserData((prev) => ({ ...prev, phone: text }))
                }
                style={[styles.input, styles.input_form_mask]}
                placeholder="(700) 10-20-30"
                keyboardType="phone-pad"
              />
            </View>
            {error.phone && (
              <Text style={styles.error_text_registr}>{error.phone[0]}</Text>
            )}
          </View>
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
          <TouchableOpacity
            style={[styles.btn_all, styles.who_btn]}
            disabled={isLoading}
            onPress={handleSubmit}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Регистрация</Text>
            )}
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
