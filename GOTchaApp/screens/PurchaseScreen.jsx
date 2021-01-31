import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CustomHeader as Header } from "../components/CustomHeader";
import ScreenStyle from "../styles/ScreenStyle";

const PurchaseScreen = (props) => {
  return (
    <View style={ScreenStyle.container}>
      <Header navigation={props.navigation} title={"SHOP"} />
      <View style={styles.drawingContainer}>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            raised
            name="store"
            type="font-awesome"
            color="#3f729b"
            size={30}
            style={styles.iconRight}
          />
          <Text style={styles.text}>Stamina Store</Text>
        </View>
        <View style={{ justiftyContent: "center", alignItems: "center" }}>
          <Icon
            raised
            name="coins"
            type="font-awesome"
            color="#d4af37"
            size={100}
          />
          <Divider style={{ backgroundColor: "white", height: 5 }} />
          <Text style={styles.textMoney}>
            $ 1.00 for a quick stamina refill
          </Text>
        </View>
        <View style={styles.button} style={styles.btnContainer}>
          <Button
            title={"Purchase Here!"}
            type={"outline"}
            raised
            buttonStyle={(styles.btnSize, styles.btnText)}
            icon={
              <Icon
                name="credit-card"
                size={40}
                color="black"
                style={styles.iconRight}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  drawingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textMoney: {
    fontSize: 24,
  },
  btnContainter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#33b5e5",
    borderWidth: 30,
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnSize: {
    width: "150%",
    height: "20%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconRight: {
    marginRight: 10,
  },
});

export default PurchaseScreen;
