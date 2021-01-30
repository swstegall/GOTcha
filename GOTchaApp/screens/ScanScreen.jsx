import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";

const ScanScreen = (props) => {
  return (
    <View>
      <Header navigation={props.navigation} title={"SCAN"} />
      <Text>ScanScreen</Text>
    </View>
  );
};

export default ScanScreen;
