import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Battlefield = ({fieldInformation, setSquare}) => {
    const {
        fieldPattern
    } = fieldInformation;

    return (
        <View style={styles.drawField}>
            { fieldPattern.map((row, rowIndex) => 
                <View key={rowIndex} style={styles.drawContainer}>{
                    row.map((spot, columnIndex) => {
                        let backgroundTemp = ((rowIndex + columnIndex) % 2 == 0)? "gray" : "white";
                        let dynamicTopMargin = (rowIndex > 1)? 50: 0;

                        return (
                            <View onTouchStart={() => setSquare(columnIndex, rowIndex)} key={columnIndex} style={[styles.drawSpot, {backgroundColor: backgroundTemp, marginTop: dynamicTopMargin}]}>
                                <Text style={styles.spotText}>{spot}</Text>
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

        justifyContent: "center"
    },
    spotText: {
        alignSelf: "center",
        fontSize: 40,
    }
  }
)

export default Battlefield;
