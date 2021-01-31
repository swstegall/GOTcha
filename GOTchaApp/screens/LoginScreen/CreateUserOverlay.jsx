import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay, Input } from "react-native-elements";
import { RegisterUserButton } from "../../components/RectangularButtons";
import SC from "../../styles/StyleConstants";
import { register } from "../../util/ajax";

export const CreateUserOverlay = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const registerUser = async () => {
    await register(username, password);
    props.toggleOverlay();
  };

  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={props.toggleOverlay}
      overlayStyle={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create User</Text>
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
      <View style={styles.buttonContainer}>
        <RegisterUserButton
          onPress={registerUser}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: "20%",
  },
  title: {
    fontSize: 34,
  },
  userInfoContainer: {
    width: 250,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: "20%",
  },
});
