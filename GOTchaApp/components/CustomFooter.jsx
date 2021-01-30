import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CustomFooter = (props) => {
  const {
    characterImage,
    currentStamina,
    timeRemaining,
    totalStamina,
  } = props.footerOptions;
  const isSuccess = parseInt(currentStamina) !== 0 ? "success" : "danger";
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={[styles.textDecoration, styles.success]}>
          {timeRemaining}
        </Text>
      </View>
      <View style={styles.tabContainer}>
        <Text style={styles.textDecoration}>{characterImage}</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text
          style={[styles.textDecoration, styles[`${isSuccess}`]]}
        >{`${currentStamina}/${totalStamina}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabContainer: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textDecoration: {
    fontSize: 50,
  },
  success: {
    color: "#00C851",
  },
  danger: {
    color: "#FF4444",
  },
});
