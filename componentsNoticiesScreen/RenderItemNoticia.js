import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { AllHtmlEntities } from "html-entities";

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
      <View style={styles.itemLlistaNoticiesImatge}>
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
      <Image
        style={styles.itemLlistaNoticiesImatge}
        source={{
          uri:
            "https://escuelaeuropea.org/sites/default/files/inline-images/no_image_available_web_0.jpeg",
        }}
      />
    );
  }

  return (
    <Image
      style={styles.itemLlistaNoticiesImatge}
      source={{ uri: mediaDetails.sizes.thumbnail.source_url }}
    />
  );
};

function categoria(arrayCategoria) {
  let idCategoria = null;

  arrayCategoria.forEach((element) => {
    if (element != 96 && element != 101) {
      idCategoria = element;
    }
  });
  var StringCategoria = "Categoria";
  switch (idCategoria) {
    case 26:
      StringCategoria = "Cultura";
      break;
    case 28:
      StringCategoria = "Economia";
      break;
    case 30:
      StringCategoria = "Esports";
      break;
    case 33:
      StringCategoria = "Política";
      break;
    case 34:
      StringCategoria = "Societat";
      break;
    case 6563:
      StringCategoria = "Succesos";
      break;
    case 6564:
      StringCategoria = "Territori";
      break;

    default:
      StringCategoria = "Categoria";
      break;
  }
  return StringCategoria;
}

const RenderItemNoticia = ({ title, date, categories, featured_media }) => {
  const entities = new AllHtmlEntities();
  title.rendered = entities.decode(title.rendered);
  return (
    <View style={styles.itemLlistaNoticies}>
      <_Imatge id={featured_media} />
      <View style={styles.itemLlistaNoticiesCol}>
        <Text style={{ fontWeight: "bold" }}>{title.rendered}</Text>
        <View style={styles.itemLlistaNoticiesSeccio}>
          <Text style={styles.itemLlistaNoticiesSeccioText}>
            {categoria(categories)}
          </Text>
        </View>
        <Text style={{ fontSize: 10 }}>{date}</Text>
      </View>
    </View>
  );
};

/* media.media_details.sizes.thumbnail.source_url */
/* media.source_url */

export default RenderItemNoticia;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemLlistaNoticies: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
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
