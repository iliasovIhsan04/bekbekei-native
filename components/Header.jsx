import React from "react";
import { Text, View } from "react-native";
import { styles } from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header_block}>
      <Text style={styles.header_name}>Добро пожаловать,</Text>
      <MaterialIcons
        name="notifications"
        size={30}
        color="#F9671C"
        onPress={() => navigation.navigate("Registration")}
      />
    </View>
  );
}
