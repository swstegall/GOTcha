import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";
import ScreenStyle from "../styles/ScreenStyle";

const SocialScreen = (props) => {
  const footerOptions = props.route.params;


  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"SOCIAL"} />
      <Text>test</Text>      
      <Footer footerOptions={footerOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  ListItem: {
    width: 400,
    height: 300,
    padding: 20,
    marginBottom: 10,
    justifyContent: "center",
    fontSize: 40,
  },
  text: {
    fontWeight: "bold",
  }
});

export default SocialScreen;
