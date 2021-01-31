import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";
import ScreenStyle from "../styles/ScreenStyle";

const BattleScreen = (props) => {
  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"BATTLE"} />
      <Text>BattleScreen</Text>
    </View>
  );
};

export default BattleScreen;
