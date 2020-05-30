import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ActivityIndicator,Dimensions } from "react-native";
import { AllHtmlEntities } from "html-entities";

const numColumns = 2;
const photoSize = (screenWidth / 2).toString;
const screenWidth = Dimensions.get("window").width;

const _Imatge = ({ id }) => {
  const [mediaDetails, setMediaDetails] = useState("loading");

  const loadMediaDetails = async () => {
    try {
      setMediaDetails("loading");
      const responseMedia = await fetch(
        `https://www.efmr.cat/wp-json/wp/v2/media/${id}?_fields=id,source_url,media_details`
      );
      const jsonmedia = await responseMedia.json();
      setMediaDetails(jsonmedia.media_details);
    } catch (e) {
      setMediaDetails("error");
    }
  };

  useEffect(() => {
    loadMediaDetails();
  }, [id]);

  if (mediaDetails === "loading") {
    return (
      <View style={styles.viewTot}>
        <ActivityIndicator
          size="large"
          color="#3B0D11"
          style={styles.activityIndicator}
        />
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
      <View style={styles.viewTot}>
        <Image
          style={styles.photo}
          source={{
            uri:
              "https://escuelaeuropea.org/sites/default/files/inline-images/no_image_available_web_0.jpeg",
          }}
        />
      </View>
    );
  }

  return (
    <Image
      style={styles.photo}
      source={{ uri: mediaDetails.sizes.thumbnail.source_url }}
    />
  );
};

const RenderItemUltimsAudios = ({ title, featured_media }) => {
  const entities = new AllHtmlEntities();
  title.rendered = entities.decode(title.rendered);
  return (
    <View style={styles.viewTot}>
      <_Imatge id={featured_media} />
      <Text style={styles.textsota}>{title.rendered}</Text>
    </View>
  );
};

/* media.media_details.sizes.thumbnail.source_url */
/* media.source_url */

export default RenderItemUltimsAudios;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  photo: {
    width: screenWidth/2,
    height: 120,
    borderWidth: 1,
    borderColor: "white",
  },

  textsota: {
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 10,
  },

  viewTot: {
    width: screenWidth/2,
    paddingTop: 15,
  },
});
