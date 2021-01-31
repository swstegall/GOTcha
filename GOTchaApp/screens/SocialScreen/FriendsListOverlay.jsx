import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { CompletedButton } from "../../components/CircleButtons";
import SC from "../../styles/StyleConstants";
import { AddFriendButton } from "../../components/RectangularButtons";


export const FriendsListOverlay = (props) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => {
        props.toggleOverlay(false);
      }}
      overlayStyle={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Friends List</Text>
      </View>
      <View style={styles.addFriend}>
        < AddFriendButton
          color={"#4682B4"}
          onPress={() => {
            props.toggleOverlay(false);
          }}
          size={20}
        />
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
    color: SC.successColor,
  },
  buttonContainer: {
    marginBottom: "20%",
  },
  addFriend: {
    position: 'absolute',
    right: 5,
    top: 5,
    justifyContent: "space-around"
},
});
