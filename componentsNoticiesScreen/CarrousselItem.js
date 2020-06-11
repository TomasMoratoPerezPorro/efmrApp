import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const CarrousselItem = ({ title, featured_media }) => {
  const [mediaDetails, setMediaDetails] = useState("loading");
  const Entities = require("html-entities").AllHtmlEntities;
  const entities = new Entities();

  title.rendered = entities.decode(title.rendered);

  const loadMediaDetails = async () => {
    try {
      setMediaDetails("loading");
      const responseMedia = await fetch(
        `https://www.efmr.cat/wp-json/wp/v2/media/${featured_media}?_fields=id,source_url,media_details`
      );
      const jsonmedia = await responseMedia.json();
      setMediaDetails(jsonmedia.media_details);
    } catch (e) {
      setMediaDetails("error");
    }
  };

  useEffect(() => {
    loadMediaDetails();
  }, [featured_media]);

  if (mediaDetails === "loading") {
    return (
      <View style={styles.CarrousselItemContainer}>
        <View style={styles.CarrousselItemOverlay}>
          <ActivityIndicator
            size="large"
            color="#3B0D11"
            style={styles.activityIndicator}
          />
          <Text numberOfLines={2} style={styles.CarrousselText}>{title.rendered}</Text>
        </View>
      </View>
    );
  }
  if (
    mediaDetails == "error" ||
    !mediaDetails ||
    !mediaDetails.sizes ||
    !mediaDetails.sizes.thumbnail
  ) {
    return (
      <View style={styles.CarrousselItemContainer}>
        <ImageBackground
          style={styles.CarrousselItemImage}
          source={{
            uri:
              "https://escuelaeuropea.org/sites/default/files/inline-images/no_image_available_web_0.jpeg",
          }}
        >
          <View style={styles.CarrousselItemOverlay}>
            <Text numberOfLines={2} style={styles.CarrousselText}>{title.rendered}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.CarrousselItemContainer}>
      <ImageBackground
        style={styles.CarrousselItemImage}
        source={{ uri: mediaDetails.sizes.medium_large.source_url }}
      >
        <View style={styles.CarrousselItemOverlay}>
          <Text numberOfLines={2} style={styles.CarrousselText}>{title.rendered}</Text>
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
    resizeMode: "center",
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
