import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const StatusBar = (props) => {
    const {
        money,
        health
    } = props.statusBarOptions;
    
    const getStyles = () => {
        const circleWidth = Dimensions.get("window").width * 0.25;
    
        return StyleSheet.create({
          drawCircle: {
            height: "100%",
            aspectRatio: 1,
            borderWidth: 2,
            borderColor: "black",
            backgroundColor: "#DDDDDD",
            flexDirection: "row",
            justifyContent: "center",
          },
          drawCircleLeft: {
            borderBottomRightRadius: 150
          }, 
          drawCircleRight: {
            position: "absolute",
            right: 0,
            borderBottomLeftRadius: 150,
          },
          centerCircleText: {
            fontSize : circleWidth*0.25,
          }
        })
    }
    
    const dynamicStyle = getStyles();

    return (
        <View style={styles.drawContainer}>
            <View style={[dynamicStyle.drawCircle, dynamicStyle.drawCircleLeft]}>
                <Text style={dynamicStyle.centerCircleText}>{health + " ❤"}</Text>
            </View>

            <View style={[dynamicStyle.drawCircle, dynamicStyle.drawCircleRight]}>
                <Text style={dynamicStyle.centerCircleText}>{money + " 💵"}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    drawContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }
  }
)

export default StatusBar;