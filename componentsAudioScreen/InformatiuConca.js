import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

const InformatiuConca = () => {
  return (
    <View>
      <Text style={styles.up}>INFORMATIU CONCA DE BARBERÀ</Text>
      <Image
        style={styles.imageSt}
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/782699654169395200/MyOr1nuV_400x400.jpg",
        }}
      />

      <Text style={styles.down}>
        Informatiu Conca de Barberà del dissabte 29 de febrer 2020
      </Text>
    </View>
  );
};
export default InformatiuConca;

const styles = StyleSheet.create({
  down: {
    backgroundColor: "#E7D219",
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 15,
    fontWeight: "bold",
  },
  imageSt: {
    width: screenWidth,
    height: 180,
  },
  up: {
    padding: 10,
    fontWeight: "bold",
  },
});
