import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPromotions from "../../pages/AllPromotions";
import Main from "../Main";
import PromotionId from "../../pages/PromotionId";
import React, { useEffect, useState } from "react";
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
import AlertData from "../../assets/UI/Alert/Alert";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [openAlert, setOpenAlert] = useState({
    open: false,
    props: "",
    text: "",
  });

  function FuncAlert(text, props) {
    setTimeout(() => {
      setOpenAlert({
        ...openAlert,
        open: true,
        text: text,
        props: props,
      });
    }, 200);
    setOpenAlert({ ...openAlert, open: false });
  }

  useEffect(() => {
    if (openAlert.open) {
      const timeoutId = setTimeout(() => {
        setOpenAlert({ ...openAlert, open: false });
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [openAlert.open]);

  {
    openAlert.open && (
      <AlertData
        state={openAlert}
        setState={setOpenAlert}
        propsData={openAlert.props}
        text={openAlert.text}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Promotion" component={AllPromotions} />
          <Stack.Screen name="PromotionDetail" component={PromotionId} />
          <Stack.Screen name="Catalog" component={Catalog} />
          <Stack.Screen name="Cart" component={QrCod} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="WhoSalesPage" component={WhoLesalePage} />
          <Stack.Screen
            name="Registration"
            component={RegistrationPage}
            Alert={FuncAlert}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </Provider>
  );
}
