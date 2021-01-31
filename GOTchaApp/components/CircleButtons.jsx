import React from "react";
import { Icon } from "react-native-elements";

export const LoginButton = (props) => {
  return (
    <Icon
      reverse
      name="sign-in"
      type="font-awesome"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};
