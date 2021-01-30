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
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={"Home"}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Battle" component={BattleScreen} />
          <Drawer.Screen name="Scan" component={ScanScreen} />
          <Drawer.Screen name="Purchase" component={PurchaseScreen} />
          <Drawer.Screen name="Social" component={SocialScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
