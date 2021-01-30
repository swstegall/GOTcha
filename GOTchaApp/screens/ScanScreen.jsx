import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";
import { CustomFooter as Footer } from "../components/CustomFooter";
import ScreenStyle from "../styles/ScreenStyle";

const ScanScreen = (props) => {
  const footerOptions = props.route.params;
  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"SCAN"} />
      <Text>ScanScreen</Text>
      <Footer footerOptions={footerOptions} />
    </View>
  );
};

export default ScanScreen;
