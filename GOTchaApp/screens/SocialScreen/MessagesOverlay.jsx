import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { CompletedButton } from "../../components/CircleButtons";
import SC from "../../styles/StyleConstants";

export const MessagesOverlay = (props) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => {
        props.toggleOverlay(false);
      }}
      overlayStyle={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Messages</Text>
      </View>
      <View style={styles.buttonContainer} style={styles.newMessage}>
        <NewMessageButton
          color={"#4682b4"}
          onPress={() => {
            props.toggleOverlay(false);
          }}
          size={36}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CompletedButton
          color={"#4682b4"}
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
    color: "#20b2aa",
  },
  buttonContainer: {
    marginBottom: "20%",
  },
  newMessage: {
      alignSelf: "flex-end",
      marginTop: -5,
  },
});
