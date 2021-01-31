import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CustomHeader as Header } from "../../components/CustomHeader";
import ScreenStyle from "../../styles/ScreenStyle";
import { FriendsListOverlay } from "./FriendsListOverlay";
import { LeaderboardOverlay } from "./LeaderboardOverlay";
import { MessagesOverlay } from "./MessagesOverlay";
import { NotificationsOverlay } from "./NotificationsOverlay";

const SocialScreen = (props) => {
  const [friendsListVisible, setFriendsListVisible] = React.useState(false);
  const [leaderboardVisible, setLeaderboardVisible] = React.useState(false);
  const [messagesVisible, setMessagesVisible] = React.useState(false);
  const [notificationsVisible, setNotificationsListVisible] = React.useState(
    false
  );
  const footerOptions = props.route.params;
  return (
    <>
      <FriendsListOverlay
        isVisible={friendsListVisible}
        toggleOverlay={setFriendsListVisible}
      />
      <LeaderboardOverlay
        isVisible={leaderboardVisible}
        toggleOverlay={setLeaderboardVisible}
      />
      <MessagesOverlay
        isVisible={messagesVisible}
        toggleOverlay={setMessagesVisible}
      />
      <NotificationsOverlay
        isVisible={notificationsVisible}
        toggleOverlay={setNotificationsListVisible}
      />
      <View style={ScreenStyle.container}>
        <Header navigation={props.navigation} title={"SOCIAL"} />
        <View style={styles.drawingContainer}>
          <View
            style={{
              paddingVertical: 15,
              paddingTop: 150,
              paddingBottom: 200,
              paddingHorizontal: 10,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={styles.button}
              style={styles.btnContainer}
              style={styles.space}
            >
              <Button
                onPress={() => {
                  setLeaderboardVisible(true);
                }}
                title={"Leaderboard"}
                type={"outline"}
                buttonStyle={(styles.btnSize, styles.btnText)}
                icon={
                  <Icon
                    name="trophy"
                    size={30}
                    color="#3f729b"
                    type="font-awesome"
                    style={styles.iconRight}
                  />
                }
              />
            </View>
            <View
              style={styles.button}
              style={styles.btnContainer}
              style={styles.space}
            >
              <Button
                onPress={() => {
                  setFriendsListVisible(true);
                }}
                title={"Friends List"}
                type={"outline"}
                buttonStyle={(styles.btnSize, styles.btnText)}
                icon={
                  <Icon
                    name="user-friends"
                    size={30}
                    color="black"
                    style={styles.iconRight}
                  />
                }
              />
            </View>
            <View
              style={styles.button}
              style={styles.btnContainer}
              style={styles.space}
            >
              <Button
                onPress={() => {
                  setMessagesVisible(true);
                }}
                title={"Messages"}
                type={"outline"}
                buttonStyle={(styles.btnSize, styles.btnText)}
                icon={
                  <Icon
                    name="comment-dots"
                    size={30}
                    color="#3f729b"
                    style={styles.iconRight}
                  />
                }
              />
            </View>
            <View
              style={styles.button}
              style={styles.btnContainer}
              style={styles.space}
            >
              <Button
                onPress={() => {
                  setNotificationsListVisible(true);
                }}
                title={"Notifications"}
                type={"outline"}
                buttonStyle={(styles.btnSize, styles.btnText)}
                icon={
                  <Icon
                    name="bell"
                    size={30}
                    color="black"
                    style={styles.iconRight}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  btnContainter: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 50,
    marginBottom: 30,
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnSize: {
    width: "250%",
    height: "20%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  space: {
    width: 200,
    height: 100,
  },
  iconRight: {
    marginRight: 20,
  },
});

export default SocialScreen;
