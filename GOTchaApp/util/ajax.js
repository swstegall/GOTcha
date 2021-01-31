import C from "./constants";

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