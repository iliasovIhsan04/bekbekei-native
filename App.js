import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./style";
import AppNavigation from "./components/Navigation/AppNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
      <StatusBar style="auto" />
    </View>
  );
}
