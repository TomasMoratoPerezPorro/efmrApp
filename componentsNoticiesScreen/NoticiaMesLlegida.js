import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { NoticiesContext } from "../model/NoticiesModel";

const windowWidth = Dimensions.get("window").width;

const NoticiaMesLlegida = observer(({ navigation }) => {
  const Entities = require("html-entities").AllHtmlEntities;
  const entities = new Entities();
  const noticies = useContext(NoticiesContext);
  useEffect(() => {
    noticies.loadNoticiaMesLlegida();
  }, []);

  if (noticies.noticiaMesLlegidaMediaFlag == false) {
    return (
      <View style={styles.page}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    noticies.noticiaMesLlegida.title.rendered = entities.decode(
      noticies.noticiaMesLlegida.title.rendered
    );
    return (
      <View style={styles.NoticiaMesLlegidaContainer}>
        <ImageBackground
          style={styles.NoticiaMesLlegidaImage}
          source={{
            uri:
              noticies.noticiaMesLlegida.media.media_details.sizes.medium
                .source_url,
          }}
        >
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => {
              navigation.navigate("NoticiaScreen", {
                itemId: noticies.noticiaMesLlegida.id,
                itemTitle: noticies.noticiaMesLlegida.title,
                itemContent: noticies.noticiaMesLlegida.content,
                itemExcerpt: noticies.noticiaMesLlegida.excerpt,
                itemAuthor: noticies.noticiaMesLlegida.author,
                itemMedia: noticies.noticiaMesLlegida.featured_media,
              });
            }}
          >
            <View style={styles.NoticiaMesLlegidaFooterRow}>
              <View style={styles.NoticiaMesLlegidaFooterColVisites}>
                <Text style={styles.NoticiaMesLlegidaTextVisites}>
                  {noticies.noticiaMesLlegida.pageviews + " visites"}
                </Text>
              </View>
              <View style={styles.NoticiaMesLlegidaFooterColTitular}>
                <Text numberOfLines={2} style={styles.NoticiaMesLlegidaText}>
                  {noticies.noticiaMesLlegida.title.rendered}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
});

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
