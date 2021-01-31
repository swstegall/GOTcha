import React from "react";
import { View, StyleSheet } from "react-native";

export const LeftRightBox = ({ leftComponent, rightComponent }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {leftComponent}
      </View>
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    width: "50%",
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#DDDDDD",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightContainer: {
    width: "50%",
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#DDDDDD",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default LeftRightBox;
