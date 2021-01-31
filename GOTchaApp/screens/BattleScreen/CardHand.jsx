import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const CardHand = ({hand, chooseSelectedCard}) => {
    return (
        <View style={styles.container}>
            {hand.map((card, index)=>
                <View key={index} style={styles.drawCard} onTouchStart={() => chooseSelectedCard(index)}>
                    {card.map((details, index) => 
                        <View key={index} style={styles.drawDetails}>
                            <Text style={styles.costStat}>{details[5]}</Text>
                            <Text style={styles.name}>{details[1]}</Text>
                            <Text style={styles.emoji}>{details[2]}</Text>
                            <View style={styles.statContainer}>
                                <Text style={styles.healthStat}>{details[3]}</Text>
                                <Text style={styles.defenseStat}>{details[4]}</Text>
                            </View>
                        </View>
                    )}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: "100%",
    },  
    drawCard: {
      width: "25%",
      height: "80%",
      marginTop: "10%",
      borderWidth: 2,
      backgroundColor: "#e2faff"
    },
    drawDetails: {
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        width: "100%"
    },
    name: {
        textAlign: "center"
    },
    emoji: {
        alignSelf: "center",
        fontSize: 50,
    },
    statContainer: {
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    healthStat: {
        width: "30%",
        textAlign: "center",
        backgroundColor: "red",
        fontSize: 25,
        borderRadius: 25
    },
    defenseStat: {
        backgroundColor: "cyan",
        position: "absolute",
        right: 0,
        fontSize: 25,
        width: "30%",
        textAlign: "center",
        borderRadius: 25
    },
    costStat: {
        position: "absolute",
        textAlign: "center",
        backgroundColor: "silver",
        left: 0,
        fontSize: 25
    }
  }
)


export default CardHand;