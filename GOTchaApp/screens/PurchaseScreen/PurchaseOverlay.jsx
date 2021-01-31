import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider, Overlay, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CustomHeader as Header } from "../../components/CustomHeader";
import ScreenStyle from "../../styles/ScreenStyle";
import { PaymentConfirmationButton } from "../../components/RectangularButtons";

export const PurchaseOverlay = (props) => {
    return (
      <Overlay
        isVisible={props.isVisible}
        onBackdropPress={() => {
          props.toggleOverlay(false);
        }}
        overlayStyle={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Purchase</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}>First Name</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}>Last Name</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}>Email</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.body}></Text>
        </View>
        <View style={styles.buttonContainer}>
          <PaymentConfirmationButton
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
      marginTop: "10%",
    },
    title: {
      fontSize: 30,
      color: "#4682B4",
    },
    textContainer:{ 
      width: 200 ,
      height: 25,
      borderColor: "black",
      borderWidth: 3,
      alignItems: "center",
    }, 
    body:{
      fontSize: 14,
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonContainer: {
      marginBottom: "20%",
    },

  });
  