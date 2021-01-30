import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";

const BattleScreen = (props) => {
  return (
    <View>
      <Header navigation={props.navigation} title={"BATTLE"} />
      <Text>BattleScreen</Text>
    </View>
  );
};

export default BattleScreen;
