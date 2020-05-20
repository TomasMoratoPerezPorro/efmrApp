import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const ButtonNoticies = ({ text, navigation }) => {
  return (
    <View style={styles.BotoNoticiesContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          navigation.navigate("ContacteScreen", {
            infoContacte: ImgContacte,
          });
        }}
      >
        <View style={styles.BotoNoticies}>
          <Text style={styles.BotoNoticiesText}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ButtonNoticies;

const styles = StyleSheet.create({
  BotoNoticiesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  BotoNoticies: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 360,
    backgroundColor: "#EE3900",
    borderRadius: 5,
  },
  BotoNoticiesText: {
    color: "black",
    fontWeight: "bold",
  },
});
