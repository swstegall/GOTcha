import React from "react";
import { View, Text } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";

const SocialScreen = (props) => {
  return (
    <View>
      <Header navigation={props.navigation} title={"SOCIAL"} />
      <Text>SocialScreen</Text>
    </View>
  );
};

export default SocialScreen;
