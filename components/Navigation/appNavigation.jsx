import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../../pages/Registration";
import AllPromotions from "../../pages/AllPromotions";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="registragtion" component={Registration} />
        <Stack.Screen name="all-promotion" component={AllPromotions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
