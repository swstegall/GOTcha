import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";

const PurchaseScreen = (props) => {
  return (
    <View>
      <Header navigation={props.navigation} title={"PURCHASE"} />
      <Text>PurchaseScreen</Text>
    </View>
  );
};

export default PurchaseScreen;
