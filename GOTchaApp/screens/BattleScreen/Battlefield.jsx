import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Battlefield = ({fieldInformation, setSquare}) => {
    const {
        fieldPattern,
        attackState
    } = fieldInformation;

    const styleAttackState = (x, y) => {
        if (attackState[y][x] === 1) {
            return ((x + y) % 2 == 0)? {backgroundColor: "red"} : {backgroundColor: "#ffb6c1"}
        }
        return {}
    }

    return (
        <View style={styles.drawField}>
            { fieldPattern.map((row, rowIndex) => 
                <View key={rowIndex} style={styles.drawContainer}>{
                    row.map((spot, columnIndex) => {
                        let backgroundTemp = ((rowIndex + columnIndex) % 2 == 0)? "gray" : "white";
                        let dynamicTopMargin = (rowIndex > 1)? 50: 0;
                        let attackStyle = styleAttackState(columnIndex, rowIndex);
                        return (
                            <View onTouchStart={() => setSquare(columnIndex, rowIndex)} key={columnIndex} style={[styles.drawSpot, {backgroundColor: backgroundTemp, marginTop: dynamicTopMargin}, attackStyle]}>
                                <Text style={[styles.spotText]}>{spot[2]}</Text>
                                <Text style={(spot !== "")?styles.drawStatAttackToken:{}}>{spot[3]}</Text>
                                <Text style={(spot !== "")?styles.drawStatDefenseToken:{}}>{spot[4]}</Text>
                            </View> 
                        )
                    })
                }</View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    drawContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    drawField: {
        flexDirection: "column",
        height: "90%",
        width: "75%",
        left: "12.5%",
        justifyContent: "center",
        alignContent: "center",
    },
    drawSpot: {
        borderColor: "black",
        borderWidth: 2,
        width: "25%",
        height: "100%",
    },
    spotText: {
        alignSelf: "center",
        fontSize: 40,
    },
    drawStatAttackToken: {
        position: "absolute",
        borderRadius: 30,
        width: "20%",
        bottom: 0,
        textAlign: "center",
        backgroundColor: "red"
    },
    drawStatDefenseToken: {
        position: "absolute",
        borderRadius: 30,
        width: "20%",
        bottom: "0%",
        textAlign: "center",
        right: 0,
        backgroundColor: "cyan"
    },
  }
)

export default Battlefield;
