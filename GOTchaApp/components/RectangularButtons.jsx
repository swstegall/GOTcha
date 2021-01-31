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

export const StartBattleButton = (props) => {
  return (
    <Button
      title={"Start Battle"}
      onPress={props.onPress}
      icon={
        <Icon
          name="running"
          type="font-awesome-5"
          color={"#FFFFFF"}
          size={28}
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

export const AddFriendButton = (props) => {
  return (
    <Icon
      reverse
      type="font-awesome"
      name="user-plus"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};
export const PaymentConfirmationButton = (props) => {
  return (
    <Icon
      reverse
      type="font-awesome"
      name="credit-card"
      color={props.color}
      onPress={props.onPress}
      underlayColor={"#DDDDDD"}
      size={props.size}
    />
  );
};