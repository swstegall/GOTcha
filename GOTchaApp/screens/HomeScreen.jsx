import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";

const HomeScreen = (props) => {
  return (
    <View>
      <Header navigation={props.navigation} title={"HOME"} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
