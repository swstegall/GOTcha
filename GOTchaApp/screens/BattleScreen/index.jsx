import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomHeader as Header } from "../../components/CustomHeader";
import { CustomFooter as Footer } from "../../components/CustomFooter";
import ScreenStyle from "../../styles/ScreenStyle";
import { Button } from "react-native-elements";
import StatusBar from './StatusBar';
import Battlefield from './Battlefield';
import CardHand from './CardHand';
import { attackDef, skillDef } from '../../util/Definitions'

const BattleScreen = (props) => {
  const defaultAttackState = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

  const [money, setMoney] = useState(10);
  const [health, setHealth] = useState(25);

  const [opponentHealth, setOpponentHealth] = useState(25);
  const [opponentMoney, setOpponentMoney] = useState(10);

  const footerOptions = props.route.params;
  const [isBattle, setIsBattle] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [fieldPattern, setFieldPattern] = useState([ 
    ["", "", "", ""],
    ["", "", "", ""], 
    ["", "", "", ""], 
    ["", "", "", ""]
  ]);

  const [hand, setHand] = useState([])
  //ID, name, emoji, attack, defense, cost
  const [deck, setDeck] = useState([    [0, "King of Tigers", "🐅", 3, 1, 9, attackDef.any, skillDef.none],
                                        [1, "Zombie1","🧟", 1, 1, 1, attackDef.any, skillDef.none],
                                        [2, "Zombie2","🧟", 1, 1, 1, attackDef.any, skillDef.none],
                                        [3, "Zombie3","🧟", 1, 1, 1, attackDef.any, skillDef.none],
                                        [4, "Zombie4","🧟", 1, 1, 1, attackDef.any, skillDef.none],
                                        [5, "Zombie5","🧟", 1, 1, 1, attackDef.any, skillDef.none]]);
  const [deckShuffled, setDeckShuffled] = useState(false);

  useEffect(() => {
      if(!deckShuffled) {
          shuffleDeck();
      }
  }, [deckShuffled])

  useEffect(() => {
      drawRandomCard();
  }, [hand])

  const shuffleDeck = () => {
      let tempDeck = [];
      let holdDeck = [...deck];

      while(holdDeck.length > 0) {
          let index = Math.floor( Math.random() * holdDeck.length );
          tempDeck.push( holdDeck.splice(index, 1) );
      }

      setDeck(tempDeck);
      setDeckShuffled(true);
  } 

  const drawRandomCard = () => {
      if (deck.length > 0 && hand.length < 4) {
          let tempHand = [...hand];
          let tempDeck = [...deck];

          let index = Math.floor( Math.random() * deck.length );

          tempHand.push( tempDeck.splice(index, 1) );

          setDeck(tempDeck);
          setHand(tempHand);
      }
  }

  const setSquare = (x, y) => {
    if(selectedCard !== null && y > 1) {
      let tempPattern = [...fieldPattern];
      let tempHand = [...hand];

      let tempCard = (tempHand.splice(selectedCard, 1))[0][0];
      if ( tempCard[5] <= money ) {
        tempPattern[y][x] = tempCard[2];

        setMoney( money - tempCard[5] );

        setHand(tempHand);
        setFieldPattern(tempPattern);
        setSelectedCard(null);
      }
    }
  }

  const chooseSelectedCard = (index) => {
    setSelectedCard(index);
  }

  const handleBattleBegin = () => {
    if (footerOptions.currentStamina > 0) {
      setIsBattle(!isBattle);
    }
  }

  const handleNextTurnButton = () => {

  }

  return (
    <>
      <View style={ScreenStyle.container}>
        <Header navigation={props.navigation} title={"BATTLE"} />
        {(!isBattle) ? (
            <>
              <Text>BattleScreen</Text>
              <Button title="Begin Battle" onPress={() => handleBattleBegin()}/>
              <Footer footerOptions={footerOptions} />
            </>
          ) : (
            <>
            <View style={styles.drawContainer}>
              <StatusBar statusBarOptions={{money, health}} />
            </View>
            <View style={styles.drawField}>
              <Battlefield fieldInformation={{fieldPattern}} setSquare={setSquare}/>
            </View>
            <View style={styles.drawCards}>
              <CardHand hand={hand} chooseSelectedCard={chooseSelectedCard}/>
            </View>
            <Button title="Next turn" onPress={() => handleNextTurnButton()}/>
            </>
          )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    drawContainer: {
      width: "100%",
      flex: 1.5,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    drawField: {
      flex: 4.5,
      width: "100%",
      justifyContent:"flex-start",
    },
    drawCards: {
      width: "100%",
      flex: 4,
    }
  }
)

export default BattleScreen;
