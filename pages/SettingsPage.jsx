import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../style";

const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      style={[
        styles.switchContainer,
        { backgroundColor: value ? "#4CAF50" : "#d3d3d3" },
      ]}
      onPress={onValueChange}
    >
      <View
        style={[
          styles.switchThumb,
          { alignSelf: value ? "flex-end" : "flex-start" },
        ]}
      />
    </TouchableOpacity>
  );
};

const SettingsPage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNotifications = async () => {
    const newValue = !toggle;
    setToggle(newValue);
    if (newValue) {
      await AsyncStorage.setItem("notifications", "toggleValue");
    } else {
      await AsyncStorage.removeItem("notifications");
    }
  };

  return (
    <View style={styles.toggleBlock}>
      <Text style={styles.settingsTitle}>Настройки</Text>
      <CustomSwitch value={toggle} onValueChange={toggleNotifications} />
    </View>
  );
};

export default SettingsPage;
