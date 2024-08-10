import React from "react";
import { Text, View } from "react-native";
import { styles } from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SettingsPage from "./SettingsPage"; // Ensure this path is correct

const ProfileScreen = () => {
  return (
    <View style={styles.profile_block}>
      <Text style={[styles.header_name_profile, styles.container]}>
        Добро пожаловать,
      </Text>
      <View style={styles.profile_box}>
        <View style={styles.container}>
          <View style={styles.profile_grid_block}>
            <View style={styles.grid_item}>
              <MaterialIcons name="person" size={24} color={"#F9671C"} />
              <Text style={styles.text16}>Мои данные</Text>
            </View>
            <View style={styles.grid_item}>
              <MaterialIcons name="location-pin" size={24} color={"#F9671C"} />
              <Text style={styles.text16}>Мои адреса</Text>
            </View>
            <View style={styles.grid_item}>
              <MaterialIcons name="shopping-bag" size={24} color={"#F9671C"} />
              <Text style={styles.text16}>История {"\n"} покупок</Text>
            </View>
            <View style={styles.grid_item}>
              <MaterialIcons name="favorite" size={24} color={"#F9671C"} />
              <Text style={styles.text16}>Избранные товары</Text>
            </View>
          </View>
          <SettingsPage />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
