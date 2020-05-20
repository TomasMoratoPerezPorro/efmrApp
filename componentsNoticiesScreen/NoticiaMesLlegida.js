import React from "react";
import { ImageBackground, StyleSheet, Text, View,Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const NoticiaMesLlegida = ({ bestnoticia }) => {
    console.log(bestnoticia.thumbnail);
    return (
      <View style={styles.NoticiaMesLlegidaContainer}>
        <ImageBackground
          style={styles.NoticiaMesLlegidaImage}
          source={{ uri: bestnoticia.thumbnail }}
        >
          <View style={styles.NoticiaMesLlegidaFooterRow}>
            <View style={styles.NoticiaMesLlegidaFooterColVisites}>
              <Text style={styles.NoticiaMesLlegidaTextVisites}>
                {bestnoticia.visites + " visites"}
              </Text>
            </View>
            <View style={styles.NoticiaMesLlegidaFooterColTitular}>
              <Text style={styles.NoticiaMesLlegidaText}>
                {bestnoticia.titular}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  export default NoticiaMesLlegida;

  const styles = StyleSheet.create({
        
    NoticiaMesLlegidaContainer: {
      height: 200,
      width: windowWidth,
      flex: 1,
      flexDirection: "column",
    },
    NoticiaMesLlegidaImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
    },
    NoticiaMesLlegidaFooterRow: {
      height: 60,
      flexDirection: "row",
      backgroundColor: "#EE3900",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    NoticiaMesLlegidaFooterColVisites: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    NoticiaMesLlegidaFooterColTitular: {
      flex: 2,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  
    NoticiaMesLlegidaText: {
      flex: 1,
  
      fontSize: 14,
      fontWeight: "bold",
      color: "white",
    },
  });
  
  