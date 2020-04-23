import React, { Component } from "react";
import { StyleSheet, Image, View, Dimensions, Text } from "react-native";

const screenWidth = Dimensions.get("window").width / 2;

const UltimsProgrames = () => {
  return (
    <View>
      <View style={styles.styleView}>
        <View>
          <Image
            style={styles.fourImages}
            source={{
              uri:
                "https://www.efmr.cat/wp-content/uploads/2019/10/Dami%C3%A0-Amor%C3%B3s.jpg",
            }}
          />
          <Text style={styles.textover}>PRODUCTE DE PROXIMITAT</Text>
        </View>

        <View>
          <Image
            style={styles.fourImages}
            source={{
              uri:
                "https://www.efmr.cat/wp-content/uploads/2019/10/Ester-Català.jpg",
            }}
          />
          <Text style={styles.textover}>ENTRE VINS I FOGONS</Text>
        </View>
      </View>

      <View style={styles.styleView}>
        <View>
          <Image
            style={styles.fourImages}
            source={{
              uri:
                "https://www.efmr.cat/wp-content/uploads/2019/10/Joan-Casanovas.jpg",
            }}
          />
          <Text style={styles.textover}>ARA I SEMPRE</Text>
        </View>

        <View>
          <Image
            style={styles.fourImages}
            source={{
              uri:
                "https://www.efmr.cat/wp-content/uploads/2019/10/Rosa-i-Dulci.jpg",
            }}
          />
          <Text style={styles.textover}>MUSEOFÒNICS</Text>
        </View>
      </View>
    </View>
  );
};
export default UltimsProgrames;

const styles = StyleSheet.create({
  fourImages: {
    width: screenWidth,
    height: 160,
  },

  styleView: {
    flexDirection: "row",
  },

  textover: {
    flex: 1,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "30%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 21,
  },
});
