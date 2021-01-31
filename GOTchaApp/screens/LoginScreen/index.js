import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Input } from "react-native-elements";
import { LoginButton } from "../../components/CircleButtons";
import { CreateUserButton } from "../../components/RectangularButtons";
import ScreenStyle from "../../styles/ScreenStyle";
import SC from "../../styles/StyleConstants";
import { login } from "../../util/ajax";
import { CreateUserOverlay } from "./CreateUserOverlay";
import { setAuthorization } from "../../util/authorization";

const LoginScreen = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [createUserVisible, setCreateUserVisible] = React.useState(false);
  const [spinLockActive, setSpinLockActive] = React.useState(false);

  const handleLogin = async () => {
    setSpinLockActive(true);
    const result = await login(username, password);
    if (result.success) {
      await setAuthorization(result.token);
      await props.checkAuthorization();
    }
    setSpinLockActive(false);
  };

  return (
    <>
      <CreateUserOverlay
        isVisible={createUserVisible}
        toggleOverlay={() => setCreateUserVisible(false)}
      />
      <View style={ScreenStyle.container}>
        {spinLockActive ? (
          <>
            <Text>Loading...</Text>
          </>
        ) : (
          <>
            <View style={styles.drawContainer}>
              <View>
                <Image
                  style={styles.image}
                  source={require("../../assets/logo.png")}
                />
              </View>
              <View style={styles.userInfoContainer}>
                <Input
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Username"
                  leftIcon={{
                    type: "font-awesome",
                    color: SC.primaryColor,
                    name: "user",
                  }}
                />
                <Input
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={true}
                  leftIcon={{
                    type: "font-awesome",
                    color: SC.primaryColor,
                    name: "lock",
                  }}
                />
              </View>
              <LoginButton
                size={36}
                color={SC.successColor}
                onPress={handleLogin}
              />
            </View>
            <View style={styles.createUserContainer}>
              <CreateUserButton onPress={() => setCreateUserVisible(true)} />
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  userInfoContainer: {
    width: 250,
  },
  image: {
    width: 200,
    height: 200,
  },
  createUserContainer: {
    paddingBottom: 40,
  },
});

export default LoginScreen;
