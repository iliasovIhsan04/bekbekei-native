import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../../pages/Registration";
import AllPromotions from "../../pages/AllPromotions";
import Main from "../Main";
import PromotionId from "../../pages/PromotionId";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [data, setData] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Promotion" component={AllPromotions} />
        <Stack.Screen name="PromotionDetail" component={PromotionId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
