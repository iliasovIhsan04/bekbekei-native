import { View, Text } from "react-native";
import { styles } from "../style";
import { useNavigation } from "@react-navigation/native";

export default function Registration() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.texting} onPress={() => navigation.navigate("Main")}>
        Ihsan
      </Text>
    </View>
  );
}
