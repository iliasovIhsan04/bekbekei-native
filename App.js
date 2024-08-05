import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./style";
import Header from "./components/Header";
import AppNavigation from "./components/Navigation/appNavigation";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      {/* <AppNavigation /> */}

      <StatusBar style="auto" />
    </View>
  );
}
