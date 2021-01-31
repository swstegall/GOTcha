import C from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const register = async (username, password) => {
  try {
    const response = await fetch(`${C.localUrl}addUser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${C.localUrl}login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export const checkBarcode = async (code) => {
  try {
    const unformattedToken = await AsyncStorage.getItem("auth_token");
    const token = `Bearer ${unformattedToken}`;
    const response = await fetch(`${C.localUrl}checkBarcode`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        barcode: code,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
