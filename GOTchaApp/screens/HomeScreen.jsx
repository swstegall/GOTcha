import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomHeader as Header } from "../components/CustomHeader";
import ScreenStyle from "../styles/ScreenStyle";
import LeftRightBox from "../components/LeftRightBox";
import { getUserInfo } from "../util/ajax";

const HomeScreen = (props) => {
  const [playerParams, setPlayerParams] = React.useState({
    name: "",
    creature: "",
    level: 1,
    experience: 0,
    stamina: 0,
    maxStamina: 4,
  });

  React.useEffect(() => {
    async function userInfo() {
      const result = await getUserInfo();
      const {
        emoji,
        experience,
        staminaCurrent,
        staminaMax,
        username,
      } = result.payload;
      setPlayerParams({
        name: username,
        creature: emoji,
        level: experience / 100 < 1 ? 1 : (experience / 100) + 1,
        experience,
        stamina: staminaCurrent,
        maxStamina: staminaMax,
      });
    }
    userInfo();
  });

  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"HOME"} />
      <View style={styles.container}>
        <LeftRightBox
          leftComponent={<Text style={styles.text}>Name</Text>}
          rightComponent={<Text style={styles.text}>{playerParams.name}</Text>}
        />
        <LeftRightBox
          leftComponent={<Text style={styles.text}>Creature</Text>}
          rightComponent={
            <Text style={styles.text}>{playerParams.creature}</Text>
          }
        />
        <LeftRightBox
          leftComponent={<Text style={styles.text}>Level</Text>}
          rightComponent={<Text style={styles.text}>{playerParams.level}</Text>}
        />
        <LeftRightBox
          leftComponent={<Text style={styles.text}>Experience</Text>}
          rightComponent={
            <Text style={styles.text}>{playerParams.experience}</Text>
          }
        />
        <LeftRightBox
          leftComponent={<Text style={styles.text}>Current Stamina</Text>}
          rightComponent={
            <Text style={styles.text}>{playerParams.stamina}</Text>
          }
        />
        <LeftRightBox
          leftComponent={<Text style={styles.text}>Max Stamina</Text>}
          rightComponent={
            <Text style={styles.text}>{playerParams.stamina}</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 34,
  },
});

export default HomeScreen;
