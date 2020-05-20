import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const EtiquetaItem = ({ nom, thumbnail }) => {
  return (
    <View style={styles.EtiquetaItemContainer}>
      <ImageBackground
        style={styles.EtiquetaItemImage}
        source={{ uri: thumbnail }}
      >
        <View style={styles.EtiquetaItemOverlay}>
          <Text style={styles.EtiquetaItemText}>{nom}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EtiquetaItem;

const styles = StyleSheet.create({
  EtiquetaItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: windowWidth / 2,
    backgroundColor: "#EE3900",
    /* borderColor: "white",
        borderWidth: 3, */
  },
  EtiquetaItemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  EtiquetaItemOverlay: {
    height: 70,
    width: windowWidth / 2,
    backgroundColor: "rgba(106,57,55,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  EtiquetaItemImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    borderColor: "white",
    borderWidth: 1,
  },
});
