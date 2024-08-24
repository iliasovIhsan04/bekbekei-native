import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../Redux/reducer/UserInfo";

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const data = useSelector((state) => state.users);
  return (
    <View style={styles.header_block}>
      <Text style={styles.header_name}>
        Добро пожаловать, {data.user.first_name} {data.user.last_name}
      </Text>
      <MaterialIcons
        name="notifications"
        size={30}
        color="#F9671C"
        onPress={() => navigation.navigate("Registration")}
      />
    </View>
  );
}
