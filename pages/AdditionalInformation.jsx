import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style";

const AdditionalInformation = () => {
  return (
    <View style={styles.additional_information}>
      <Text style={styles.block_title}>Дополнительная информация</Text>
      <View style={styles.settings_block_drection}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://docs.google.com/document/d/1_Gwdg1PZr3U_ws6ZNPNiufvj3QaRZJg5WQ5QN0E_uV8"
            )
          }
        >
          <View style={styles.application_person_box}>
            <Text style={styles.settings_all_title}>
              Правила программы лояльности
            </Text>
            <Image
              source={require("../assets/image/more-left.svg")}
              style={styles.image_addtional}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://docs.google.com/document/d/1mogXES8M3fNwr81zgFvzDH_NPcIGQuwrAvcz-llmV7w"
            )
          }
        >
          <View style={styles.application_person_box}>
            <Text style={styles.settings_all_title}>
              Пользовательское соглашение
            </Text>
            <Image
              source={require("../assets/image/more-left.svg")}
              style={styles.image_addtional}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdditionalInformation;
