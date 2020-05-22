import React, { createContext, useContext } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SocialIcon } from "react-native-elements";

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
        media: itemMedia,
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

const About = () => {
  const Noticia = useContext(NoticiaContext);
  
  
  return (
    <View style={styles.about}>
      <ImageBackground
        style={styles.header}
        source={{ uri: Noticia.media.media_details.sizes.medium_large.source_url }} 
      ></ImageBackground>

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
        <Text style={styles.paragraf}>{Noticia.content.rendered}</Text>
        <Text style={styles.paragraf}>{Noticia.Content}</Text>
        <Text style={styles.paragraf}>{Noticia.Content}</Text>

        <View style={{ flexDirection: "row" }}>
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

        <Text style={styles.similar}>NOTÍCIES SIMILARS</Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <View style={styles.grid}>
            <ImageBackground
              style={styles.imagnoti}
              source={{ uri: Noticia.imag1 }}
            ></ImageBackground>
            <Text style={styles.notitext}>
              "L’espluguí, Ferran Lozano, participarà en una cursa solidària"
            </Text>
          </View>

          <View style={styles.grid}>
            <ImageBackground
              style={styles.imagnoti}
              source={{ uri: Noticia.imag2 }}
            ></ImageBackground>
            <Text style={styles.notitext}>
              "La víctima mortal de l’accident de trànsit de l’Espluga era un
              ..."
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NoticiaDetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
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

  socialico: {
    backgroundColor: "#7E0000",
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
