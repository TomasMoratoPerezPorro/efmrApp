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
  Linking
} from "react-native";
import { SocialIcon } from "react-native-elements";
import HTMLView from "react-native-htmlview";

const { width } = Dimensions.get("window");

/* 
CODI PER A UN CUSTOM RENDER NODE (NO ACONSEGUEIXO EL EFECTEDESITJAT)

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
} */

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == "img") {
    return null;
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

const FooterFoto = ({ author, caption }) => {
  return (
    <View style={styles.stats}>
      <View style={styles.statsCol}>
        {/* <Text >{caption.rendered}</Text> */}
        <View style={styles.statsHeader}>
          <HTMLView
            value={`<div>${caption.rendered.replace(
              /(\r\n|\n|\r)/gm,
              ""
            )}</div>`}
            stylesheet={htmlstyles_footer}
          />
        </View>
      </View>
      <VerticalSep />
    </View>
  );
};

const BgImage = ({ mediaId }) => {
  const [mediaDetails, setMediaDetails] = useState("loading");

  const loadMediaDetails = async () => {
    try {
      setMediaDetails("loading");
      const responseMedia = await fetch(
        `https://www.efmr.cat/wp-json/wp/v2/media/${mediaId}?_fields=id,source_url,media_details,caption,author`
      );
      const jsonmedia = await responseMedia.json();
      setMediaDetails(jsonmedia);
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
    !mediaDetails.media_details ||
    !mediaDetails.media_details.sizes ||
    !mediaDetails.media_details.sizes.medium_large
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
    <View>
      <ImageBackground
        style={styles.header}
        source={{
          uri: mediaDetails.media_details.sizes.medium_large.source_url,
        }}
      ></ImageBackground>
      <FooterFoto
        author={mediaDetails.author}
        caption={mediaDetails.caption}
      ></FooterFoto>
    </View>
  );
};

const About = () => {
  const Noticia = useContext(NoticiaContext);

  return (
    <View style={styles.about}>
      <BgImage mediaId={Noticia.mediaId}></BgImage>

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
            onPress={ ()=>{ Linking.openURL('https://google.com')}}
          />

          <SocialIcon
            style={styles.socialico}
            type="facebook"
            onPress={ ()=>{ Linking.openURL('https://google.com')}}
          />

          <SocialIcon
            style={styles.socialico}
            type="youtube"
            onPress={ ()=>{ Linking.openURL('https://google.com')}}
          />

          <SocialIcon
            style={styles.socialico}
            type="instagram"
            onPress={ ()=>{ Linking.openURL('https://google.com')}}
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
  h2: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  strong: {
    fontWeight: "bold",
    fontSize: 13,
  },
  li: {
    fontSize: 13,
  },
});

var htmlstyles_footer = StyleSheet.create({
  p: {
    fontSize: 13,
    color: "#0008",
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  statsCol: {
    alignItems: "center",
    justifyContent: "center",
  },
  statsHeader: {
    fontSize: 12,
    color: "#0008",
    marginRight: 10,
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
    marginVertical:40,
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
