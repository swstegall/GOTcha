import React from "react";
import { Button, Icon } from "react-native-elements";
import SC from "../styles/StyleConstants";

export const CreateUserButton = (props) => {
  return (
    <Button
      title={"Create User"}
      type={"clear"}
      onPress={props.onPress}
      icon={
        <Icon
          name="check-circle"
          type="font-awesome"
          color={SC.primaryHighlightColor}
          size={14}
          iconStyle={{ paddingRight: 5 }}
        />
      }
    />
  );
};

export const RegisterUserButton = (props) => {
  return (
    <Button
      title={"Create User"}
      onPress={props.onPress}
      icon={
        <Icon
          name="check-circle"
          type="font-awesome"
          color={"#FFFFFF"}
          size={14}
          iconStyle={{ paddingRight: 5 }}
        />
      }
    />
  );
};