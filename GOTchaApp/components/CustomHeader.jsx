import React from "react";
import { Header } from "react-native-elements";
import HamburgerMenu from "./HamburgerMenu";

export const CustomHeader = (props) => {
  return (
    <Header
      leftComponent={<HamburgerMenu navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontWeight: "bold" },
      }}
      statusBarProps={{ barStyle: "light-content" }}
    />
  );
};
