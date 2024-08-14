import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export function AlertData({ state, setState, propsData, text }) {
  function FuncDelete() {
    setState({ ...state, open: false, opentwo: false });
  }

  const getIcon = () => {
    switch (propsData) {
      case "success":
        return (
          <Icon name="checkmark-circle" style={styles.iconSuccess} size={25} />
        );
      case "error":
        return <Icon name="close-circle" style={styles.iconError} size={25} />;
      case "info":
        return (
          <Icon name="information-circle" style={styles.iconInfo} size={25} />
        );
      case "warning":
        return <Icon name="warning" style={styles.iconWarning} size={25} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.colorAlert}>
      <View style={styles.alertContainer}>
        <View style={styles.crayContainer}>
          {propsData === "success" && <View style={styles.crayGreen}></View>}
          {propsData === "error" && <View style={styles.crayRed}></View>}
          {propsData === "info" && <View style={styles.crayBlue}></View>}
          {propsData === "warning" && <View style={styles.crayYellow}></View>}
        </View>
        <View style={styles.iconContainer}>{getIcon()}</View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <TouchableOpacity onPress={FuncDelete} style={styles.closeButton}>
          <Icon name="close" style={styles.iconClose} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AlertData;
