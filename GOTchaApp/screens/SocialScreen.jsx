import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { CustomHeader as Header } from "../components/CustomHeader";
import { CustomFooter as Footer } from "../components/CustomFooter";
import ScreenStyle from "../styles/ScreenStyle";

const SocialScreen = (props) => {
  const footerOptions = props.route.params;

  const list = [
    {
      title: "Leaderboard",
      icon: "star",
    },
    {
      title: "Friends",
      icon: "person",
    },
    {
      title: "Notifications",
      icon: "mail",
    },
  ];

  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"SOCIAL"} />
      <View style={styles.ListItem}>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
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
  },
});

export default SocialScreen;
