import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const CarrousselItem = ({ titular, thumbnail }) => {
  return (
    <View style={styles.CarrousselItemContainer}>
      <ImageBackground
        style={styles.CarrousselItemImage}
        source={{ uri: thumbnail }}
      >
        <View style={styles.CarrousselItemOverlay}>
          <Text style={styles.CarrousselText}>{titular}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};




export default CarrousselItem;


const styles = StyleSheet.create({
  CarrousselItemContainer: {
    flex: 1,
    width: windowWidth,
    height: 180,
    color: "black",
  },
  CarrousselItemImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    /* backgroundColor: "red",
        opacity: 0.6, */
  },
  CarrousselItemOverlay: {
    height: 180,
    backgroundColor: "rgba(106,57,55,0.6)",
    justifyContent: "flex-end",
  },
  CarrousselText: {
    margin: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
