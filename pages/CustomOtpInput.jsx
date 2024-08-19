import React, { useRef } from "react";
import { View, TextInput } from "react-native";
import { styles } from "../style";
import { Clipboard } from "react-native-web";

const CustomOtpInput = ({ value, valueLength, onChange }) => {
  const inputsRef = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newCode = value.split("");
      newCode[index] = text;
      onChange(newCode.join(""));
      if (text && index < valueLength - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = async () => {
    try {
      const pasteData = await Clipboard.getString();
      if (/^\d+$/.test(pasteData)) {
        const newCode = pasteData.slice(0, valueLength).split("");
        onChange(newCode.join(""));
        newCode.forEach((char, index) => {
          if (inputsRef.current[index]) {
            inputsRef.current[index].focus();
          }
        });
      }
    } catch (error) {
      console.error("Paste handling error:", error);
    }
  };

  return (
    <View style={styles.otp_input} onTouchStart={handlePaste}>
      {Array(valueLength)
        .fill()
        .map((_, index) => (
          <TextInput
            key={index}
            style={styles.otp_input_index}
            value={value[index] || ""}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyDown(e, index)}
            ref={(input) => (inputsRef.current[index] = input)}
            keyboardType="numeric"
            maxLength={1}
            onFocus={handlePaste}
          />
        ))}
    </View>
  );
};

export default CustomOtpInput;
