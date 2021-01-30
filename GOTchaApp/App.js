import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BattleScreen from "./screens/BattleScreen";
import ScanScreen from "./screens/ScanScreen";
import PurchaseScreen from "./screens/PurchaseScreen";
import SocialScreen from "./screens/SocialScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  const characterImage = "😎";
  const timeRemaining = "4:00";
  const currentStamina = "0";
  const totalStamina = "4";
  const footerParams = {
    characterImage,
    timeRemaining,
    currentStamina,
    totalStamina,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={"Home"}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            initialParams={footerParams}
          />
          <Drawer.Screen
            name="Battle"
            component={BattleScreen}
            initialParams={footerParams}
          />
          <Drawer.Screen
            name="Scan"
            component={ScanScreen}
            initialParams={footerParams}
          />
          <Drawer.Screen
            name="Purchase"
            component={PurchaseScreen}
            initialParams={footerParams}
          />
          <Drawer.Screen
            name="Social"
            component={SocialScreen}
            initialParams={footerParams}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
