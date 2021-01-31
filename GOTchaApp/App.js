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

  async function checkAuth() {
    const isAuthorized = await checkAuthorization();
    setAuthorized(isAuthorized);
  }

  React.useEffect(() => {
    async function checkAuth() {
      const isAuthorized = await checkAuthorization();
      setAuthorized(isAuthorized);
    }
    AsyncStorage.clear();
    checkAuth();
  }, []);

  React.useEffect(() => {
    async function getPlayerObjectFromStorage() {
      const jsonValue = await AsyncStorage.getItem("player");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
  });

  return (
    <SafeAreaProvider>
      {authorized ? (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName={"Home"}>
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
            />
            <Drawer.Screen
              name="Battle"
              component={BattleScreen}
            />
            <Drawer.Screen
              name="Scan"
              component={ScanScreen}
            />
            <Drawer.Screen
              name="Purchase"
              component={PurchaseScreen}
            />
            <Drawer.Screen
              name="Social"
              component={SocialScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen checkAuthorization={checkAuth} />
      )}
    </SafeAreaProvider>
  );
}
