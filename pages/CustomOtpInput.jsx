import React, { useRef } from "react";
import { View, TextInput, Clipboard } from "react-native";
import { styles } from "../style";

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
    if (e.nativeEvent.key === "Backspace") {
      const newCode = value.split("");
      if (!newCode[index] && index > 0) {
        newCode[index - 1] = "";
        onChange(newCode.join(""));
        inputsRef.current[index - 1].focus();
      } else {
        newCode[index] = "";
        onChange(newCode.join(""));
      }
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
            inputsRef.current[index].setNativeProps({ text: char });
          }
        });
        const firstEmptyIndex = newCode.findIndex((char) => char === "");
        if (
          inputsRef.current[
            firstEmptyIndex !== -1 ? firstEmptyIndex : valueLength - 1
          ]
        ) {
          inputsRef.current[
            firstEmptyIndex !== -1 ? firstEmptyIndex : valueLength - 1
          ].focus();
        }
      }
    } catch (error) {
      console.error("Ошибка вставки:", error);
    }
  };

  return (
    <View style={styles.otp_input}>
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
            onPress={handlePaste}
          />
        ))}
    </View>
  );
};

export default CustomOtpInput;
