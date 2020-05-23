import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const CarrousselItem = ({ title, media }) => {
  const Entities = require('html-entities').AllHtmlEntities;
  const entities = new Entities();
  

  title.rendered = entities.decode(title.rendered);
  try {
    return (
      <View style={styles.CarrousselItemContainer}>
        <ImageBackground
          style={styles.CarrousselItemImage}
          source={{ uri: media.media_details.sizes.thumbnail.source_url }}
        >
          <View style={styles.CarrousselItemOverlay}>
            <Text style={styles.CarrousselText}>{title.rendered}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }catch{
    return (
      <View style={styles.CarrousselItemContainer}>
        <ImageBackground
          style={styles.CarrousselItemImage}
          source={{ uri: "https://escuelaeuropea.org/sites/default/files/inline-images/no_image_available_web_0.jpeg" }}
        >
          <View style={styles.CarrousselItemOverlay}>
            <Text style={styles.CarrousselText}>{title.rendered}</Text>
          </View>
        </ImageBackground>
      </View>
    );

  }
  
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
