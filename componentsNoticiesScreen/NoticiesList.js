import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RenderItemNoticia from "../componentsNoticiesScreen/RenderItemNoticia";
import Separator from "../componentsNoticiesScreen/Separator";
import { NoticiesContext } from "../model/NoticiesModel";
import NoticiaDetailsScreen from "../screens/NoticiaDetailsScreen";

const NoticiesList = observer(({ navigation, etiqueta }) => {
  const noticies = useContext(NoticiesContext);

  useEffect(() => {
    if (etiqueta == null) {
      noticies.loadNoticies();
    } else {
      noticies.loadNoticiesEtiqueta(etiqueta);
    }
  }, []);

  if (etiqueta == null) {
    if (noticies.noticies == null) {
      return (
        <View style={styles.page}>
          <ActivityIndicator
            size="large"
            color="#3B0D11"
            style={styles.activityIndicator}
          />
        </View>
      );
    } else {
      return (
        <FlatList
          data={noticies.noticies}
          renderItem={({ item }) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                navigation.navigate("NoticiaScreen", {
                  itemId: item.id,
                  itemTitle: item.title,
                  itemContent: item.content,
                  itemExcerpt: item.excerpt,
                  itemAuthor: item.author,
                  itemMedia: item.featured_media,
                });
              }}
            >
              <RenderItemNoticia {...item} />
            </TouchableHighlight>
          )}
          keyExtractor={(noticia) => noticia.id.toString()}
          ItemSeparatorComponent={Separator}
        />
      );
    }
  }else{
    if (noticies.noticiesEtiqueta == null) {
      return (
        <View style={styles.page}>
          <ActivityIndicator
            size="large"
            color="#3B0D11"
            style={styles.activityIndicator}
          />
        </View>
      );
    } else {
      return (
        <FlatList
          data={noticies.noticiesEtiqueta}
          renderItem={({ item }) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                navigation.navigate("NoticiaScreen", {
                  itemId: item.id,
                  itemTitle: item.title,
                  itemContent: item.content,
                  itemExcerpt: item.excerpt,
                  itemAuthor: item.author,
                  itemMedia: item.featured_media,
                });
              }}
            >
              <RenderItemNoticia {...item} />
            </TouchableHighlight>
          )}
          keyExtractor={(noticia) => noticia.id.toString()}
          ItemSeparatorComponent={Separator}
        />
      );
    }
  }
});

{
  /* <View style={styles.page}>
        <Text>{JSON.stringify(noticies.noticies[0].media.source_url)}</Text>
      </View> */
}

{
  /* <View style={styles.page}>
      <Text>{JSON.stringify(noticies.noticies[0])}</Text>
    </View> */
}

/* <FlatList
      data={noticies.noticies}
      renderItem={({ item }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate("NoticiaScreen", {
              itemId: 86,
              otherParam: fakeNoticia,
            });
          }}
        >
          <RenderItemNoticia {...item} />
        </TouchableHighlight>
      )}
      keyExtractor={(noticia) => noticia.data}
      ItemSeparatorComponent={Separator}
    ></FlatList> */

export default NoticiesList;

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
});
