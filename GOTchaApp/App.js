import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BattleScreen from "./screens/BattleScreen";
import ScanScreen from "./screens/ScanScreen";
import PurchaseScreen from "./screens/PurchaseScreen";
import SocialScreen from "./screens/SocialScreen";
import LoginScreen from "./screens/LoginScreen";
import { checkAuthorization } from "./util/authorization";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

export default function App() {
  const [authorized, setAuthorized] = React.useState(false);
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

  async function checkAuth() {
    const isAuthorized = await checkAuthorization();
    setAuthorized(isAuthorized);
  };

  React.useEffect(() => {
    async function checkAuth() {
      const isAuthorized = await checkAuthorization();
      setAuthorized(isAuthorized);
    };
    // AsyncStorage.clear();
    checkAuth();
  }, []);

  return (
    <SafeAreaProvider>
      {authorized ? (
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
      ) : (
        <LoginScreen checkAuthorization={checkAuth} />
      )}
    </SafeAreaProvider>
  );
}
