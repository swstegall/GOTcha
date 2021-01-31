import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { CustomHeader as Header } from "../../components/CustomHeader";
import { CustomFooter as Footer } from "../../components/CustomFooter";
import ScreenStyle from "../../styles/ScreenStyle";
import { SuccessOverlay } from "./SuccessOverlay";
import { FailureOverlay } from "./FailureOverlay";
import { ScanButton } from "../../components/CircleButtons";
import SC from "../../styles/StyleConstants";

const ScanScreen = (props) => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scannerVisible, setScannerVisible] = React.useState(false);
  const [successOverlayVisible, setSuccessOverlayVisible] = React.useState(
    false
  );
  const [failureOverlayVisible, setFailureOverlayVisible] = React.useState(
    false
  );
  const footerOptions = props.route.params;

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    // Is this a valid barcode?
    // setSuccessOverlayVisible(true);
    setFailureOverlayVisible(true);
    // TODO: Give user some stamina on a successful scan.
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <SuccessOverlay
        isVisible={successOverlayVisible}
        toggleOverlay={setSuccessOverlayVisible}
        setScannerVisible={setScannerVisible}
      />
      <FailureOverlay
        isVisible={failureOverlayVisible}
        toggleOverlay={setFailureOverlayVisible}
        setScannerVisible={setScannerVisible}
      />
      <View style={ScreenStyle.container}>
        <Header navigation={props.navigation} title={"SCAN"} />
        {scannerVisible ? (
          <>
            <BarCodeScanner
              onBarCodeScanned={handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          </>
        ) : (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Scanning barcodes can earn you stamina!
              </Text>
              <Text style={styles.title}>
                Scan a barcode using the button below.
              </Text>
            </View>
            <View>
              <ScanButton
                onPress={() => setScannerVisible(true)}
                size={54}
                color={SC.alternateColor1}
              />
            </View>
          </View>
        )}
        <Footer footerOptions={footerOptions} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});

export default ScanScreen;
