import React from "react";
import { Text, View } from "react-native";
import { styles } from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
  return (
    <View style={styles.profile_block}>
      <View style={styles.profile_box}>
        <View>
          <View>
            <MaterialIcons name="person" style={{ width: 30 }} />
            <Text>Мои данные</Text>
          </View>
          <View>
            <MaterialIcons name="person" style={{ width: 30 }} />
            <Text>История покупок</Text>
          </View>
          <View>
            <MaterialIcons name="person" style={{ width: 30 }} />
            <Text>Мои адреса</Text>
          </View>
          <View>
            <MaterialIcons name="person" style={{ width: 30 }} />
            <Text>Избанные товары</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
