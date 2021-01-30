import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";
import { CustomFooter as Footer } from "../components/CustomFooter";
import ScreenStyle from "../styles/ScreenStyle";

const HomeScreen = (props) => {
  const footerOptions = props.route.params;
  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"HOME"} />
      <Text>HomeScreen</Text>
      <Footer footerOptions={footerOptions} />
    </View>
  );
};

export default HomeScreen;
