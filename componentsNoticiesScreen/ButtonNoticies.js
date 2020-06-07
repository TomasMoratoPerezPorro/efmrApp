import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

//DADES JAVI
const ImgContacte = {
  imgEspluga:
    "https://s3-alpha-sig.figma.com/img/b0fc/77af/c18ff98b6dd11a231fc9df57e1da4428?Expires=1588550400&Signature=aGZBfgGJcABqv0XDcSVjrOzTyFLMLdaoAj8d4i2bMc5iRjFvQNvF8rWD9odxRs-wtEleI7-4Qq9mizYKlxcCP-N6HPfPM5JnpObq37cai8YiHI8RIiXoQ-9dhYyGZZJjysgDgH32ukFNcvAAlHiMm9MwqQIqx61J81OjtJLamzSNOkupl0IVbXI1RyTGIuxDYOUju45KECKGPYiBbWp~dcWS9ZDKdJTTpUmR63y~xpFTDzftBf60kND9bw1wYIVCHz0m4Q2XRxLWZXTA7PG1-myMpnQzrvzaYMdo2ybVec7vy2u8MXcUdn6kgEDoRO5a2b35FZTGbzXCRzgG1hFDyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  imgTaco: "https://www.tacoalt.cat/images/TACOALT.png",
  imgEsplugaAud:
    "https://www.efmr.cat/wp-content/uploads/2018/03/Logo_EA4x.png",
};

const ButtonNoticies = ({ text, navigation }) => {
  if (text == "+ NOTÍCIES") {
    return (
      <View style={styles.BotoNoticiesContainer}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate("MesNoticiesScreen", {
              etiqueta: "Categoria",
            });
          }}
        >
          <View style={styles.BotoNoticies}>
            <Text style={styles.BotoNoticiesText}>{text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  } else {
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
  }
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
