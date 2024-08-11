import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../../pages/Registration";
import AllPromotions from "../../pages/AllPromotions";
import Main from "../Main";
import PromotionId from "../../pages/PromotionId";
import React, { useState } from "react";
import Catalog from "../../pages/Catalog";
import QrCod from "../../pages/QrCod";
import Footer from "../Footer";
import ProfileScreen from "../../pages/ProfileScreen";
import WhoLesalePage from "../../pages/WhoLesalePage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Promotion" component={AllPromotions} />
        <Stack.Screen name="PromotionDetail" component={PromotionId} />
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen name="Cart" component={QrCod} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="WhoSalesPage" component={WhoLesalePage} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
