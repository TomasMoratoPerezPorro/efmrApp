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

const fakeNoticiesList = [
  {
    titular: "Montblanc serà la Vila Gitanera de Catalunya 2020",
    data: "2 de Març de 2020",
    seccio: "CULTURA",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  },
  {
    titular:
      "Conflicte laboral entre una llevadora de Santa Coloma de Queralt i l’Institut Català de la Salut",
    data: "3 de Març de 2020",
    seccio: "SOCIETAT",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-22-at-12.31.55-218x150.jpeg",
  },
  {
    titular:
      "Presentació de les coreografies de l’Escola de Dansa del Casal d’aquest 2020",
    data: "4 de Març de 2020",
    seccio: "CULTURA",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2018/07/IMG_2773-294x194.jpg",
  },
  {
    titular:
      "El GEPEC presenta informes contraris a la instal·lació dels nous parcs eòlics a la Conca",
    data: "5 de Març de 2020",
    seccio: "TERRITORI",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2018/04/Sant-Jordi-Espluga-Gerard-Bosch_8073-294x194.jpg",
  },
  {
    titular:
      "La Diputació de Tarragona aprova ajuts per a habitatge municipal per revertir el despoblament rural i ...",
    data: "6 de Març de 2020",
    seccio: "CULTURA",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2017/10/IMG_9258-294x194.jpg",
  },
];

//Dades Pep
const fakeNoticia = {
  name: "Desconcert pel retard dels ajuts de la riuada, mig any després",
  avatar: "http://files.pauek.info/harriet.jpg",
  background:
    "https://www.efmr.cat/wp-content/uploads/2020/04/IMG_7291-1068x712.jpg",
  title: "Desconcert pel retard dels ajuts de la riuada, mig any després",
  redactor: "Per Redacció | EFMR.cat - 20 d'Abril de 2020",
  paragraf1:
    "Aquest dimecres es complirà mig any de la riuada del Francolí del 22 d’octubre i els municipis encara no coneixeran la quantitat dels ajuts econòmics ni quan arribaran. És la principal preocupació dels alcaldes després de sis mesos en els quals s’ha treballat per restablir els serveis bàsics i les principals connexions. Amb l’actual crisi sanitària i després del temporal Glòria, els Ajuntaments de la Conca de Barberà se senten abandonats per part de l’Estat perquè ja ha esgotat el termini per ampliar el reial decret dels ajuts de Múrcia i Alacant que vencia aquest passat 31 de març.",
  paragraf2:
    "La incertesa plana entre les declaracions dels representants polítics de la comarca, ja que no poden defninir el calendari de recuperació de tots els danys de l’aiguat ni tampoc adjudicar determinades intervencions perquè no poden justificar amb quins recursos econòmics els afrontaran. La Generalitat s’havia compromès a aportar la meitat dels fons i l’altra part l’Estat a través del reial decret de mesures urgents per danys de temporals.",
  paragraf3:
    "A finals de gener, els sis alcaldes van conparèixer conjuntament per demostrar la seva indignació, però l’acció no va causar la reacció desitjada. Tot continua igual o pitjor tenint en compte les noves problemàtiques generades per la crisi del coronavirus.",
  imag1: "https://www.efmr.cat/wp-content/uploads/2018/01/Ara-i-sempre.jpg",
  imag2:
    "https://www.efmr.cat/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-21-at-13.42.28-1536x768.jpeg",
};

const NoticiesList = observer(({ navigation }) => {
  const noticies = useContext(NoticiesContext);
  useEffect(() => {
    noticies.loadNoticies();
  }, []);

  if (noticies.noticies == null) {
    return (
      <View style={styles.page}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (noticies.noticies[9].media == null) {
    noticies.loadMedia();

    return (
      <FlatList
        data={noticies.noticies}
        renderItem={({ item }) => <RenderItemNoticia {...item} />}
        keyExtractor={(noticia) => noticia.id.toString()}
        ItemSeparatorComponent={Separator}
      ></FlatList>
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
                itemMedia: item.media,
              });
            }}
          >
            <RenderItemNoticia {...item} />
          </TouchableHighlight>
        )}
        keyExtractor={(noticia) => noticia.id.toString()}
        ItemSeparatorComponent={Separator}
      ></FlatList>
    );
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
  page: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
