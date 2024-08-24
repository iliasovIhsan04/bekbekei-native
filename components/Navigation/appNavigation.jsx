import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPromotions from "../../pages/AllPromotions";
import Main from "../Main";
import PromotionId from "../../pages/PromotionId";
import Catalog from "../../pages/Catalog";
import QrCod from "../../pages/QrCod";
import Footer from "../Footer";
import ProfileScreen from "../../pages/ProfileScreen";
import WhoLesalePage from "../../pages/WhoLesalePage";
import RegistrationPage from "../../pages/RegistrationPage";
import Login from "../../pages/Login";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { View, Text, ActivityIndicator } from "react-native";
import ActivationCode from "../../pages/ActivationCode";
import ForgotActivationCode from "../../pages/ForgotActivationCode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "green",
        borderLeftWidth: 5,
        width: "90%",
        minHeight: 50,
        borderRightColor: "green",
        borderRightWidth: 5,
      }}
      contentContainerStyle={{ paddingHorizontal: 14 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "600",
      }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text2NumberOfLines={3}
      style={{
        borderLeftColor: "red",
        borderLeftWidth: 5,
        width: "90%",
        minHeight: 50,
        borderRightColor: "red",
        borderRightWidth: 5,
      }}
      contentContainerStyle={{ paddingHorizontal: 14 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "600",
      }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  tomatoToast: ({ text1, props }) => (
    <View style={{ minHeight: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export default function AppNavigation() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const tokenValue = await AsyncStorage.getItem("tokenActivation");
        setToken(tokenValue);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Registration" component={RegistrationPage} />
          <Stack.Screen name="ActivationCode" component={ActivationCode} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen
            name="ForgotActivationCode"
            component={ForgotActivationCode}
          />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Promotion" component={AllPromotions} />
          <Stack.Screen name="PromotionDetail" component={PromotionId} />
          <Stack.Screen name="Catalog" component={Catalog} />
          <Stack.Screen name="Cart" component={QrCod} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="WhoSalesPage" component={WhoLesalePage} />
        </Stack.Navigator>
        <Footer />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </Provider>
  );
}
