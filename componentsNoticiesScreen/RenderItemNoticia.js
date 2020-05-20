import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RenderItemNoticia = ({ titular, data, seccio, thumbnail }) => {
    //const noticia = useContext(UserContext);
    return (
      <View style={styles.itemLlistaNoticies}>
        <Image
          style={styles.itemLlistaNoticiesImatge}
          source={{ uri: thumbnail }}
        ></Image>
        <View style={styles.itemLlistaNoticiesCol}>
          <Text style={{ fontWeight: "bold" }}>{titular}</Text>
          <View style={styles.itemLlistaNoticiesSeccio}>
            <Text style={styles.itemLlistaNoticiesSeccioText}>{seccio}</Text>
          </View>
          <Text style={{ fontSize: 10 }}>{data}</Text>
        </View>
      </View>
    );
  };



  export default RenderItemNoticia;


  const styles = StyleSheet.create({
    itemLlistaNoticies: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        //padding: 5,
      },
      itemLlistaNoticiesImatge: {
        width: 160,
        height: 100,
      },
      itemLlistaNoticiesCol: {
        flex: 1,
        //flexWrap: "wrap",
        padding: 9,
      },
      itemLlistaNoticiesSeccio: {
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
        width: 60,
        height: 15,
        backgroundColor: "#EE3900",
    
        borderRadius: 5,
      },
      itemLlistaNoticiesSeccioText: {
        fontSize: 10,
        color: "#FFFFFF",
      },
  });