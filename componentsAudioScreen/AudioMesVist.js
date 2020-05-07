import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

const VerticalSep = () => (
  <View
    style={{
      width: 20,
      marginTop: 10,
      marginBottom: 10,
    }}
  />
);

const AudioMesVist = () => {
  return (
    <View>
      <Text style={styles.up}>ÀUDIO MÉS VIST DE LA SETMANA</Text>
      <Image
        style={styles.imageSt}
        source={{
          uri: "https://www.efmr.cat/wp-content/uploads/2018/12/IMG_3473.jpg",
        }}
      />

      <View style={styles.down}>
        <View>
          <Text>1.223 visites</Text>
        </View>
        <VerticalSep />
        <View>
          <Text style={styles.textS}>
            L'ajuntament a Casa del diumenge 7 de març del 2020
          </Text>
        </View>
      </View>
    </View>
  );
};
export default AudioMesVist;

const styles = StyleSheet.create({
  textS: {
    paddingRight: 110,
    fontWeight: "bold",
    fontSize: 16,
  },

  down: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#E7D219",
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 15,
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
