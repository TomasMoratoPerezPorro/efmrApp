import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import HTMLView from "react-native-htmlview";

const { width } = Dimensions.get("window");

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == "img") {
    const { src, height } = node.attribs;
    const imageHeight = height || 300;
    return (
      <Image
        key={index}
        style={{
          width: 300,
          height: 150,
          resizeMode: "cover",
        }}
        source={{ uri: src }}
      />
    );
  }
}

const NoticiaContext = createContext({});

function NoticiaDetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { itemTitle } = route.params;
  const { itemContent } = route.params;
  const { itemExcerpt } = route.params;
  const { itemAuthor } = route.params;
  const { itemMedia } = route.params;

  /* console.log(itemTitle);  */
  return (
    <NoticiaContext.Provider
      value={{
        id: itemId,
        title: itemTitle,
        content: itemContent,
        Excerpt: itemExcerpt,
        author: itemAuthor,
        mediaId: itemMedia,
      }}
    >
      <ScrollView style={styles.page}>
        <About />
      </ScrollView>
    </NoticiaContext.Provider>
  );
}

const VerticalSep = () => (
  <View
    style={{
      width: 1,
      backgroundColor: "#0002",
      marginTop: 10,
      marginBottom: 10,
    }}
  />
);

const BgImage = ({ mediaId }) => {
  const [mediaDetails, setMediaDetails] = useState("loading");

  const loadMediaDetails = async () => {
    try {
      setMediaDetails("loading");
      const responseMedia = await fetch(
        `https://www.efmr.cat/wp-json/wp/v2/media/${mediaId}?_fields=id,source_url,media_details`
      );
      const jsonmedia = await responseMedia.json();
      setMediaDetails(jsonmedia.media_details);
    } catch (e) {
      setMediaDetails("error");
    }
  };

  useEffect(() => {
    loadMediaDetails();
  }, [mediaId]);

  if (mediaDetails === "loading") {
    return (
      <View style={styles.header}>
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
    !mediaDetails.sizes.medium_large
  ) {
    return (
      <ImageBackground
        style={styles.header}
        source={{
          uri:
            "https://escuelaeuropea.org/sites/default/files/inline-images/no_image_available_web_0.jpeg",
        }}
      ></ImageBackground>
    );
  }
  return (
    <ImageBackground
      style={styles.header}
      source={{
        uri: mediaDetails.sizes.medium_large.source_url,
      }}
    ></ImageBackground>
  );

  /* const Noticia = useContext(NoticiaContext);
  try {
    return (
      <ImageBackground
        style={styles.header}
        source={{
          uri: Noticia.media.media_details.sizes.medium_large.source_url,
        }}
      ></ImageBackground>
    );
  } catch {
    return (
      <ImageBackground
        style={styles.header}
        source={{
          uri:
            "https://escuelaeuropea.org/sites/default/files/inline-images/no_image_available_web_0.jpeg",
        }}
      ></ImageBackground>
    );
  } */
};

const About = () => {
  const Noticia = useContext(NoticiaContext);

  return (
    <View style={styles.about}>
      <BgImage mediaId={Noticia.mediaId}></BgImage>

      <View style={styles.stats}>
        <View style={styles.statsCol}>
          <Text style={styles.statsHeader}>
            Zona afectada per la riuada del 2019
          </Text>
        </View>
        <VerticalSep />
        <View style={styles.statsCol}>
          <Text style={styles.statsHeader}>Imatge: Pep Morató</Text>
        </View>
      </View>

      <View style={styles.aboutInner}>
        <Text style={styles.aboutTitle}>{Noticia.title.rendered}</Text>
        <Text style={styles.redactortitle}>{Noticia.author}</Text>
        {/* <Text style={styles.paragraf}>{Noticia.content.rendered}</Text> */}
        {/* value={`<div>${data.replace(/(\r\n|\n|\r)/gm, "")}</div>`} */}
        {/* value={Noticia.content.rendered} */}
        <HTMLView
          value={`<div>${Noticia.content.rendered.replace(
            /(\r\n|\n|\r)/gm,
            ""
          )}</div>`}
          stylesheet={htmlstyles}
          renderNode={renderNode}
        />

        <View style={styles.redes}>
          <SocialIcon
            style={styles.socialico}
            type="twitter"
            onPress={() => {
              this._toggleBottomNavigationView();
              alert("twitter");
            }}
          />

          <SocialIcon
            style={styles.socialico}
            type="facebook"
            onPress={() => {
              this._toggleBottomNavigationView();
              alert("facebook");
            }}
          />

          <SocialIcon
            style={styles.socialico}
            type="youtube"
            onPress={() => {
              this._toggleBottomNavigationView();
              alert("youtube");
            }}
          />

          <SocialIcon
            style={styles.socialico}
            type="instagram"
            onPress={() => {
              this._toggleBottomNavigationView();
              alert("instagram");
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonText}
            onPress={() => Alert.alert("Right button pressed")}
            title="+ NOTÍCES"
            color="#000000"
          />
        </View>

        <Text style={styles.similar}>{Noticia.id}</Text>
      </View>
    </View>
  );
};

export default NoticiaDetailsScreen;

var htmlstyles = StyleSheet.create({
  a: {
    fontWeight: "300",
    fontSize: 13,
    color: "#516bf0",
  },
  p: {
    fontSize: 13,
  },
  strong: {
    fontWeight: "bold",
    fontSize: 13,
  },
  li: {
    fontSize: 13,
  },
});

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    //backgroundColor: "red",
    paddingBottom: 20,
  },
  stats: {
    height: 30,
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  statsCol: {
    alignItems: "center",
    justifyContent: "center",
  },
  statsHeader: {
    fontSize: 12,
    color: "#0008",
  },
  paragraf: {
    padding: 8,
  },

  aboutInner: {
    backgroundColor: "white",
    padding: 22,
  },
  aboutTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 2,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  Noticianame: {
    color: "white",
    fontSize: 16,
  },
  redactortitle: {
    color: "#999",
    fontSize: 10,
    textAlign: "right",
    padding: 5,
  },

  buttonContainer: {
    margin: 20,
    backgroundColor: "#EE3900",
    borderRadius: 10,
  },

  buttonText: {
    fontWeight: "bold",
  },
  redes: {
    alignSelf: "center",
    flexDirection: "row",
    color: "#3B0D11",
  },

  socialico: {
    backgroundColor: "#7E0000",
    height: 46,
    width: 46,
  },

  grid: {
    width: "50%",
    height: 300,
  },

  imagnoti: {
    height: 130,
    alignItems: "center",
    backgroundColor: "red",
    paddingBottom: 2,
  },

  notitext: {
    fontSize: 15,
    padding: 10,
  },

  similar: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
});
