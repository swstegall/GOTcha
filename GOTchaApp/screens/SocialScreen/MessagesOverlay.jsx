import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ListItem } from "react-native-elements";
import { CompletedButton } from "../../components/CircleButtons";
import SC from "../../styles/StyleConstants";
import { NewMessageButton } from "../../components/CircleButtons";

const list = [
  {
    title: "New Message from: John",
    icon: "square",
    from: "font-awesome",
  },
  {
    title: "New Message from: Elle the Elephant",
    icon: "square",
    from: "font-awesome",
  },
];

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
          size={20}
        />
      </View>
      <View style={{width: 300, height:50}}>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title style={styles.text}>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
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
    marginTop: "10%",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    color: "#20b2aa",
  },
  buttonContainer: {
    marginBottom: "10%",
  },
  newMessage: {
    position: "absolute",
    right: 5,
    top: 5,
    justifyContent: "space-around",
  },
  ListItem: {
    width: 100,
    marginBottom: 10,
  },
  text:{
    fontSize: 12,
  },
});
