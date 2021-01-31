import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { ResetScanButton } from "../../components/CircleButtons";
import SC from "../../styles/StyleConstants";

export const FailureOverlay = (props) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={() => props.toggleOverlay(false)}
      overlayStyle={styles.container}
    >
      <View>
        <Text style={styles.title}>Failure!</Text>
      </View>
      <View>
        <Text style={styles.body}>{props.message}</Text>
      </View>
      <View>
        <ResetScanButton
          color={SC.alternateColor2}
          onPress={() => props.toggleOverlay(false)}
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
  title: {
    fontSize: 34,
    color: SC.dangerColor,
  },
  body: {
    fontSize: 14,
  }
});
