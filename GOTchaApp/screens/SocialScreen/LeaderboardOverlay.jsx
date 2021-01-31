import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { CompletedButton } from "../../components/CircleButtons";

export const LeaderboardOverlay = (props) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => {
        props.toggleOverlay(false);
      }}
      overlayStyle={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Leader board</Text>
      </View>
      <View style={{ justifyContent: "centered" }}>
        <Text>🥇1st place --- NAME</Text>
        <Text>🥈deal2nd place --- NAME</Text>
        <Text>🥉3st place --- NAME</Text>
        <Text>4th place --- NAME</Text>
        <Text>5th place --- NAME</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CompletedButton
          color={"#4682B4"}
          onPress={() => {
            props.toggleOverlay(false);
          }}
          size={36}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: "20%",
  },
  title: {
    fontSize: 34,
    color: "#696969",
  },
  buttonContainer: {
    marginBottom: "20%",
  },
  icon: {
    alignItems: "center",
  },
});
