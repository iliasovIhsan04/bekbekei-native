import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
  const [autoBrightness, setAutoBrightness] = useState(false);

  const toggleNotifications = async () => {
    const newValue = !toggle;
    setToggle(newValue);
    if (newValue) {
      await AsyncStorage.setItem("notifications", "toggleValue");
    } else {
      await AsyncStorage.removeItem("notifications");
    }
  };

  const toggleBrightness = async () => {
    const newValue = !autoBrightness;
    setAutoBrightness(newValue);
    if (newValue) {
      await AsyncStorage.setItem("autoBrightness", "autoValue");
    } else {
      await AsyncStorage.removeItem("autoBrightness");
    }
  };

  return (
    <View>
      <Text style={styles.block_title}>Настройки</Text>
      <View style={styles.settings_block_drection}>
        <View style={styles.toggleBlock}>
          <Text style={styles.settings_all_title}>Уведомления</Text>
          <CustomSwitch value={toggle} onValueChange={toggleNotifications} />
        </View>
        <View style={styles.toggleBlock}>
          <Text style={styles.settings_all_title}>Автояркость</Text>
          <CustomSwitch
            value={autoBrightness}
            onValueChange={toggleBrightness}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsPage;
