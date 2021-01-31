import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Settings } from "react-native";
import { CustomHeader as Header } from "../../components/CustomHeader";
import ScreenStyle from "../../styles/ScreenStyle";
import { Button } from "react-native-elements";
import StatusBar from "./StatusBar";
import Battlefield from "./Battlefield";
import CardHand from "./CardHand";
import { attackDef, skillDef } from "../../util/Definitions";
import { StartBattleButton } from "../../components/RectangularButtons";

const BattleScreen = (props) => {
  const defaultAttackState = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const enemyEmoji = ["👿", "🧐", "🤠", "🧑‍", "🎅", "🧘"];

  const [money, setMoney] = useState(10);
  const [health, setHealth] = useState(25);
  const [moneyPT] = useState(1);
  const [attackingSquare, setAttackingSquare] = useState(null);

  const [opponentHealth, setOpponentHealth] = useState(25);
  const [opponentMoney, setOpponentMoney] = useState(10);
  const [opponentHand, setOpponentHand] = useState([]);
  const [opponentEmoji, setOpponentEmoji] = useState();
  const [opponentDeck, setOpponentDeck] = useState([
    [0, "King of Tigers", "🐅", 3, 2, 4, attackDef.any, skillDef.none],
    [1, "Zombie", "🧟", 1, 1, 1, attackDef.any, skillDef.none],
    [1, "Zombie", "🧟", 1, 1, 1, attackDef.any, skillDef.none],
    [2, "Zombie", "🧟", 1, 1, 1, attackDef.any, skillDef.none],
    [3, "Monkee", "🙊", 2, 2, 3, attackDef.any, skillDef.none],
    [4, "Sus", "👺", 6, 1, 2, attackDef.any, skillDef.none],
    [4, "Sus", "👺", 6, 1, 2, attackDef.any, skillDef.none],
  ]);
  const [opponentMoneyPT] = useState(1);
  const [isBattle, setIsBattle] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [isHumanTurn, setIsHumanTurn] = useState(true);

  const [fieldPattern, setFieldPattern] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);
  const [attackState, setAttackState] = useState(defaultAttackState);

  const [hand, setHand] = useState([]);
  //ID, name, emoji, attack, defense, cost
  const [deck, setDeck] = useState([
    [0, "King of Tigers", "🐅", 3, 2, 4, attackDef.any, skillDef.none],
    [0, "King of Tigers", "🐅", 3, 2, 4, attackDef.any, skillDef.none],
    [1, "Zombie", "🧟", 1, 1, 1, attackDef.any, skillDef.none],
    [2, "Zombie", "🧟", 1, 1, 1, attackDef.any, skillDef.none],
    [3, "Monkee", "🙊", 2, 2, 3, attackDef.any, skillDef.none],
    [4, "Sus", "👺", 6, 1, 2, attackDef.any, skillDef.none],
    [5, "Spooki", "👻", 1, 6, 1, attackDef.any, skillDef.none],
  ]);
  const [deckShuffled, setDeckShuffled] = useState(false);

  const fieldInformation = {
    fieldPattern,
    attackState,
  };

  useEffect(() => {
    if (!deckShuffled) {
      shuffleDeck();
      selectRandomEnemyEmoji();
      shuffleDeckOpponent();
    }
  }, [deckShuffled]);

  useEffect(() => {
    drawRandomCard();
  }, [hand]);

  useEffect(() => {
    drawRandomCardOpponent();
  }, [opponentHand]);

  useEffect(() => {
    if (!isHumanTurn) {
      //Randomized AI
      let cardsCanAfford = [];

      for (let i = 0; i < opponentHand.length; ++i) {
        let card = opponentHand[i][0];
        if (card[5] <= opponentMoney && cardsCanAfford.indexOf(card) === -1) {
          cardsCanAfford.push(card);
        }
      }

      //Select random card
      let maxCard = Math.floor(Math.random() * 3);

      if (cardsCanAfford.length > 0) {
        let randomCardIndex = Math.floor(Math.random() * cardsCanAfford.length);
        let randomRow = Math.floor(Math.random() * 2);
        let randomColumn = Math.floor(Math.random() * 4);

        if (fieldPattern[randomRow][randomColumn] == "") {
          cardsCanAfford.splice(randomCardIndex, 1);
          setSquareOpponent(randomColumn, randomRow, randomCardIndex);
        }
      }

      //Attack
      let attackers = [];
      for (let a = 0; a < 2; ++a) {
        for (let aa = 0; aa < 4; ++aa) {
          if (fieldPattern[a][aa] !== "") {
            attackers.push([fieldPattern[a][aa], [a, aa]]);
          }
        }
      }

      let defenders = [];
      for (let a = 0; a < 2; ++a) {
        for (let aa = 0; aa < 4; ++aa) {
          if (fieldPattern[a + 2][aa] !== "") {
            defenders.push([fieldPattern[a + 2][aa], [a + 2, aa]]);
          }
        }
      }

      let tempField = [...fieldPattern];
      let tempAttackState = [...attackState];

      let deadQueue = [];
      let deadDefenders = 0;
      for (let a = 0; a < attackers.length; ++a) {
        let attacker = attackers[a];
        if (tempAttackState[attacker[1][0]][attacker[1][1]] === 1) continue;

        let attacked = false;
        for (let d = 0; d < defenders.length; ++d) {
          let defender = defenders[d];
          let defenderDead = false;
          for (let dq = 0; dq < deadQueue.length; ++dq) {
            if (
              deadQueue[dq][0] === defender[1][0] &&
              deadQueue[dq][1] === defender[1][1]
            )
              defenderDead = true;
          }

          if (!defenderDead) {
            attacked = true;
            let valid = false;
            if (attacker[0][3] >= defender[0][4]) {
              deadQueue.push(defender[1]);
              console.log("dead", defender[1]);
              deadDefenders++;
              valid = true;
            }
            if (defender[0][3] == attacker[0][4]) {
              deadQueue.push(attacker[1]);
              console.log("dead", attacker[1]);
            }

            if (valid) break;
          }
        }

        if (
          (deadDefenders === defenders.length && !attacked) ||
          defenders.length <= 0
        )
          setHealth(health - attacker[0][3]);
      }

      for (let d = 0; d < deadQueue.length; ++d) {
        if (tempField[deadQueue[d][0]][deadQueue[d][1]] !== "") {
          tempField[deadQueue[d][0]][deadQueue[d][1]] = "";
        }
      }

      setFieldPattern(tempField);
      setAttackState(tempAttackState);

      setOpponentMoney(opponentMoney + opponentMoneyPT);
      //End
      setIsHumanTurn(true);
    }
  }, [isHumanTurn]);

  const selectRandomEnemyEmoji = () => {
    let index = Math.floor(Math.random() * enemyEmoji.length);
    let emoji = enemyEmoji[index];

    setOpponentEmoji(emoji);
  };

  const attackOpponent = (shielded) => {
    if (!shielded) {
      let card = fieldPattern[attackingSquare[1]][attackingSquare[0]];

      if (attackState[attackingSquare[1]][attackingSquare[0]] !== 1) {
        setOpponentHealth(opponentHealth - card[3]);

        let tempAttackState = [...attackState];
        tempAttackState[attackingSquare[1]][attackingSquare[0]] = 1;

        if (opponentHealth <= 0) {
          //Win
        }
      }
    }
  };

  const shuffleDeck = () => {
    let tempDeck = [];
    let holdDeck = [...deck];

    while (holdDeck.length > 0) {
      let index = Math.floor(Math.random() * holdDeck.length);
      tempDeck.push(holdDeck.splice(index, 1));
    }

    setDeck(tempDeck);
    setDeckShuffled(true);
  };

  const drawRandomCard = () => {
    if (deck.length > 0 && hand.length < 4) {
      let tempHand = [...hand];
      let tempDeck = [...deck];

      let index = Math.floor(Math.random() * deck.length);

      tempHand.push(tempDeck.splice(index, 1));

      setDeck(tempDeck);
      setHand(tempHand);
    }
  };

  const setSquare = (x, y) => {
    if (selectedCard !== null && y > 1) {
      let tempPattern = [...fieldPattern];
      let tempAttackState = [...attackState];
      let tempHand = [...hand];

      let tempCard = tempHand.splice(selectedCard, 1)[0][0];
      if (tempCard[5] <= money && tempPattern[y][x] === "") {
        tempPattern[y][x] = tempCard;
        tempAttackState[y][x] = 1;

        setMoney(money - tempCard[5]);

        setHand(tempHand);
        setFieldPattern(tempPattern);
        setSelectedCard(null);
      }
    } else if (y > 1 && fieldPattern[y][x] !== "" && attackState[y][x] === 0) {
      setAttackingSquare([x, y]);
    } else if (
      y <= 1 &&
      attackingSquare !== null &&
      attackState[attackingSquare[1]][attackingSquare[0]] !== 1
    ) {
      if (fieldPattern[y][x] !== "") {
        let tempField = [...fieldPattern];
        let tempAttackState = [...attackState];

        let enemyCard = fieldPattern[y][x];
        let friendlyCard = fieldPattern[attackingSquare[1]][attackingSquare[0]];
        if (enemyCard[3] >= friendlyCard[4]) {
          tempField[attackingSquare[1]][attackingSquare[0]] = "";
          tempAttackState[attackingSquare[1]][attackingSquare[0]] = 0;
        }
        if (friendlyCard[3] >= enemyCard[4]) {
          tempField[y][x] = "";
          tempAttackState[y][x] = 0;
        }

        tempAttackState[attackingSquare[1]][attackingSquare[0]] = 1;

        setAttackState(tempAttackState);
        setFieldPattern(tempField);
      }
    }
  };

  const chooseSelectedCard = (index) => {
    setSelectedCard(index);
  };

  const handleBattleBegin = () => {
    setIsBattle(!isBattle);
  };

  const handleNextTurnButton = () => {
    if (isHumanTurn) {
      setAttackState(defaultAttackState);
      setIsHumanTurn(false);
      setMoney(money + moneyPT);
    }
  };

  //Opponent Logic
  const shuffleDeckOpponent = () => {
    let tempDeck = [];
    let holdDeck = [...opponentDeck];

    while (holdDeck.length > 0) {
      let index = Math.floor(Math.random() * holdDeck.length);
      tempDeck.push(holdDeck.splice(index, 1));
    }

    setOpponentDeck(tempDeck);
  };

  const drawRandomCardOpponent = () => {
    if (opponentDeck.length > 0 && opponentHand.length < 4) {
      let tempHand = [...opponentHand];
      let tempDeck = [...opponentDeck];

      let index = Math.floor(Math.random() * deck.length);

      tempHand.push(tempDeck.splice(index, 1));

      setOpponentDeck(tempDeck);
      setOpponentHand(tempHand);
    }
  };

  const setSquareOpponent = (x, y, opponentSelectedCard) => {
    if (opponentSelectedCard !== null) {
      let tempPattern = [...fieldPattern];
      let tempAttackState = [...attackState];
      let tempHand = [...opponentHand];

      let tempCard = tempHand.splice(selectedCard, 1)[0][0];

      tempPattern[y][x] = tempCard;
      tempAttackState[y][x] = 1;

      setOpponentMoney(opponentMoney - tempCard[5]);

      setOpponentHand(tempHand);
      setFieldPattern(tempPattern);
    }
  };

  return (
    <>
      <View style={ScreenStyle.container}>
        <Header navigation={props.navigation} title={"BATTLE"} />
        {!isBattle ? (
          <View style={styles.centeredFullContainer}>
            <StartBattleButton onPress={handleBattleBegin} />
          </View>
        ) : (
          <>
            <View style={styles.drawContainer}>
              <StatusBar
                statusBarOptions={{
                  money,
                  health,
                  fieldPattern,
                  opponentEmoji,
                  opponentHealth,
                }}
                attackOpponent={attackOpponent}
              />
            </View>
            <View style={styles.drawField}>
              <Battlefield
                fieldInformation={fieldInformation}
                setSquare={setSquare}
              />
            </View>
            <View style={styles.drawCards}>
              <CardHand hand={hand} chooseSelectedCard={chooseSelectedCard} />
            </View>
            <Button
              title={isHumanTurn ? "Next turn" : "Please Wait"}
              onPress={() => handleNextTurnButton()}
            />
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
  centeredFullContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  drawField: {
    flex: 4.5,
    width: "100%",
    justifyContent: "flex-start",
  },
  drawCards: {
    width: "100%",
    flex: 4,
  },
});

export default BattleScreen;
