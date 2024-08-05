import { styles } from "../style";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import HarryUpToBuy from "./HarryUpToBuy";

export default function Main() {
  return (
    <View style={styles.main}>
      <ImageBackground style={styles.bonus_box}>
        <View style={styles.inner_box}>
          <Text style={styles.bonus_cart}>Бонусная {"\n"} карта</Text>
          <Text style={styles.bonus_score}>
            0<Text style={styles.bonus}>баллов </Text>
          </Text>
        </View>
        <View style={styles.bonus_img}>
          <Image source={require("../assets/image/qr-cod.svg")} />
        </View>
      </ImageBackground>
      <View style={styles.scanner_block}>
        <TouchableOpacity style={styles.scanner}>
          <Image source={require("../assets/image/scanning.svg")} />
          <Text style={styles.scanner_score}>Проверить цену</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanner}>
          <Image source={require("../assets/image/interfaceRed.svg")} />
          <Text style={styles.scanner_score}>Избранные товары</Text>
        </TouchableOpacity>
      </View>
      <HarryUpToBuy />
    </View>
  );
}
