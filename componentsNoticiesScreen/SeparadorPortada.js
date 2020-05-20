import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SeparadorPortada = ({ text }) => {
  return (
    <View style={styles.portadaContainer}>
      <Text style={styles.portadaText}>{text}</Text>
    </View>
  );
};

export default SeparadorPortada;

const styles = StyleSheet.create({
  portadaContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    height: 30,
  },
  portadaText: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
});
