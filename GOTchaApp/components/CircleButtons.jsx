import React from "react";
import { Icon } from "react-native-elements";

export const LoginButton = (props) => {
  return (
    <Icon
      reverse
      type="font-awesome"
      name="sign-in"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};

export const ScanButton = (props) => {
  return (
    <Icon
      reverse
      type="font-awesome"
      name="camera-retro"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};

export const ResetScanButton = (props) => {
  return (
    <Icon
      reverse
      type="font-awesome5"
      name="sync"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};


export const CompletedButton = (props) => {
  return (
    <Icon
      reverse
      type="font-awesome5"
      name="check-circle"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};