import React, { useState } from "react";
import { styles } from "../style";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "../Redux/slice/activationReducer";
import { instance } from "../components/api/AllRequest";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const RegistrationPage = ({ Alert }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { message, phone } = useSelector((state) => state.auth);
  const [error, setError] = useState([]);

  const [userData, setUserData] = useState({
    last_name: "",
    first_name: "",
    phone: "",
    confirm_password: "",
    password: "",
  });

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

    if (userDataWithPhone) {
      dispatch(registerStart());
      try {
        const response = await axios.post(
          instance + "/auth/register",
          userDataWithPhone
        );

        // Check if response contains errors
        if (response.data.errors || response.data.non_field_errors) {
          setError(response.data.errors || response.data.non_field_errors);
          Alert(
            response.data.errors || response.data.non_field_errors,
            "error"
          );
        } else if (response.data.response === true) {
          Alert(response.data.message, "success");
          navigation.navigate("Login");
        } else {
          Alert("Unexpected response format", "error");
        }

        dispatch(registerSuccess(response.data));
      } catch (error) {
        // Handle network or server errors
        Alert("An error occurred. Please try again later.", "error");
        dispatch(registerFailure(error.message));
      } finally {
        setIsLoading(false);
      }
    }
  };

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
              <Text style={styles.error}>{error.last_name}</Text>
            )}
          </View>
          <View style={styles.input_box}>
            <Text style={[styles.label, styles.registr_label]}>Номер</Text>
            <TextInput
              style={[styles.input, styles.input_form]}
              placeholder="+996 (704) 61-68-02"
              textContentType="telephoneNumber"
              placeholderTextColor="#AAAAAA"
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, phone: text }))
              }
            />
            {error.phone && <Text style={styles.error}>{error.phone}</Text>}
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
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Icon name={visible ? "eye" : "eye-slash"} size={20} />
            </TouchableOpacity>
            {error.password && (
              <Text style={styles.error}>{error.password}</Text>
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
            <TouchableOpacity onPress={() => setVisible2(!visible2)}>
              <Icon name={visible2 ? "eye" : "eye-slash"} size={20} />
            </TouchableOpacity>
            {error.confirm_password && (
              <Text style={styles.error}>{error.confirm_password}</Text>
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
