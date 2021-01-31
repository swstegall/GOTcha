import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const StatusBar = (props) => {
  const {
    money,
    health,
    fieldPattern,
    opponentEmoji,
    opponentHealth,
  } = props.statusBarOptions;

  const [isShielded, setIsShielded] = useState(false);

  const getStyles = () => {
    return StyleSheet.create({
      drawCircle: {
        height: "100%",
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#DDDDDD",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
      },
      drawCircleLeft: {
        borderBottomRightRadius: 150,
      },
      drawCircleRight: {
        position: "absolute",
        right: 0,
        borderBottomLeftRadius: 150,
      },
      centerCircleText: {
        fontSize: 25,
      },
    });
  };

  useEffect(() => {
    let anyMonsters = false;
    for (let i = 0; i <= 1; ++i) {
      for (let z = 0; z <= 3; ++z) {
        if (fieldPattern[i][z] !== "") {
          anyMonsters = true;
          break;
        }
      }
      if (anyMonsters) break;
    }

    setIsShielded(anyMonsters);
  }, [fieldPattern]);

  const checkShield = () => {
    if (isShielded)
      return {
        borderColor: "cyan",
        borderWidth: 2,
        borderRadius: 30,
        width: "25%",
      };
    return { borderWidth: 0 };
  };

  const dynamicStyle = getStyles();

  return (
    <View style={styles.drawContainer}>
      <View style={[dynamicStyle.drawCircle, dynamicStyle.drawCircleLeft]}>
        <Text style={dynamicStyle.centerCircleText}>{health + " ❤"}</Text>
      </View>
      <View style={styles.emojiContainer}>
        <Text
          onPress={() => props.attackOpponent(isShielded)}
          style={[styles.drawEnemy, checkShield()]}
        >
          {opponentEmoji}
        </Text>
        <Text style={styles.statOHealth}>{opponentHealth}</Text>
      </View>
      <View style={[dynamicStyle.drawCircle, dynamicStyle.drawCircleRight]}>
        <Text style={dynamicStyle.centerCircleText}>{money + " 💵"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  emojiContainer: {
    flex: 4,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  drawEnemy: {
    left: "25%",
    fontSize: 50,
  },
  statOHealth: {
    fontSize: 20,
    left: "30%",
  },
});

export default StatusBar;
