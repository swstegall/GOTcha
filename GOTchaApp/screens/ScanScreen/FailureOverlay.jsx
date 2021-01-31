import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { ResetScanButton } from "../../components/CircleButtons";
import SC from "../../styles/StyleConstants";

export const FailureOverlay = (props) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => {
        props.toggleOverlay(false);
        props.setScannerVisible(false);
      }}
      overlayStyle={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Failure!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ResetScanButton
          color={SC.alternateColor2}
          onPress={() => {
            props.toggleOverlay(false);
            props.setScannerVisible(false);
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
    color: SC.dangerColor,
  },
  buttonContainer: {
    marginBottom: "20%",
  },
});
