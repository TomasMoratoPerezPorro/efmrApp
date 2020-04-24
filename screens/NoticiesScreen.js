import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

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

//const UserContext = createContext(/* user */ {});

const windowWidth = Dimensions.get("window").width;

const fakeEtiquetes = [
  {
    nom: "POLÍTICA",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  },
  {
    nom: "SUCCESOS",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-22-at-12.31.55-218x150.jpeg",
  },
  {
    nom: "ESPORTS",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2018/07/IMG_2773-294x194.jpg",
  },
  {
    nom: "ECONOMIA",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2018/04/Sant-Jordi-Espluga-Gerard-Bosch_8073-294x194.jpg",
  },
  {
    nom: "SOCIETAT",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  },
  {
    nom: "CULTURA",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2017/10/IMG_9258-294x194.jpg",
  },
];

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

const noticiaMontblanc = {
  titular: "Montblanc serà la Vila Gitanera de Catalunya 2020",
  data: "8 de Març de 2020",
  seccio: "CULTURA",
  thumbnail:
    "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  visites: "2543",
};

const RenderItemNoticia = ({ titular, data, seccio, thumbnail }) => {
  //const noticia = useContext(UserContext);
  return (
    <View style={styles.itemLlistaNoticies}>
      <Image
        style={styles.itemLlistaNoticiesImatge}
        source={{ uri: thumbnail }}
      ></Image>
      <View style={styles.itemLlistaNoticiesCol}>
        <Text style={{ fontWeight: "bold" }}>{titular}</Text>
        <View style={styles.itemLlistaNoticiesSeccio}>
          <Text style={styles.itemLlistaNoticiesSeccioText}>{seccio}</Text>
        </View>
        <Text style={{ fontSize: 10 }}>{data}</Text>
      </View>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const NoticiesList = ({ navigation }) => {
  return (
    <FlatList
      data={fakeNoticiesList}
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
    ></FlatList>
  );
};

const ButtonNoticies = ({ text }) => {
  return (
    <View style={styles.BotoNoticiesContainer}>
      <View style={styles.BotoNoticies}>
        <Text style={styles.BotoNoticiesText}>{text}</Text>
      </View>
    </View>
  );
};

const CarrousselItem = ({ titular, thumbnail }) => {
  return (
    <View style={styles.CarrousselItemContainer}>
      <ImageBackground
        style={styles.CarrousselItemImage}
        source={{ uri: thumbnail }}
      >
        <View style={styles.CarrousselItemOverlay}>
          <Text style={styles.CarrousselText}>{titular}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const CarrousselPortada = ({ array }) => {
  return (
    <FlatList
      data={
        array
      } /* {array.map((item, index) => ({ key: index, item: item }))} */
      renderItem={({ item }) => <CarrousselItem {...item} />}
      horizontal={true}
    ></FlatList>
  );
};
const Portada = ({ text }) => {
  return (
    <View style={styles.portadaContainer}>
      <Text style={styles.portadaText}>{text}</Text>
    </View>
  );
};

const EtiquetaItem = ({ nom, thumbnail }) => {
  return (
    <View style={styles.EtiquetaItemContainer}>
      <ImageBackground
        style={styles.EtiquetaItemImage}
        source={{ uri: thumbnail }}
      >
        <View style={styles.EtiquetaItemOverlay}>
          <Text style={styles.EtiquetaItemText}>{nom}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const EtiquetaList = ({ array }) => {
  return (
    <FlatList
      data={array}
      renderItem={({ item }) => <EtiquetaItem {...item} />}
      numColumns={2}
    ></FlatList>
  );
};

const NoticiaMesLlegida = ({ bestnoticia }) => {
  console.log(bestnoticia.thumbnail);
  return (
    <View style={styles.NoticiaMesLlegidaContainer}>
      <ImageBackground
        style={styles.NoticiaMesLlegidaImage}
        source={{ uri: bestnoticia.thumbnail }}
      >
        <View style={styles.NoticiaMesLlegidaFooterRow}>
          <View style={styles.NoticiaMesLlegidaFooterColVisites}>
            <Text style={styles.NoticiaMesLlegidaTextVisites}>
              {bestnoticia.visites + " visites"}
            </Text>
          </View>
          <View style={styles.NoticiaMesLlegidaFooterColTitular}>
            <Text style={styles.NoticiaMesLlegidaText}>
              {bestnoticia.titular}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const NoticiesScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerstyle={[styles.page]}>
      {/* <RenderItemNoticia></RenderItemNoticia> */}
      <Button
        title="Pagina detall noticia de mostra"
        onPress={() => {
          navigation.navigate("NoticiaScreen", {
            itemId: 86,
            otherParam: fakeNoticia,
          });
        }}
      />
      <Portada text={"PORTADA"}></Portada>
      <CarrousselPortada array={fakeNoticiesList}></CarrousselPortada>
      {/* <CarrousselItem {...fakeNoticiesList[2]}></CarrousselItem> */}
      <Portada text={"NOTÍCIES"}></Portada>
      <NoticiesList></NoticiesList>

      <ButtonNoticies text={"+ NOTÍCIES"}></ButtonNoticies>
      <Portada text={"ETIQUETES"}></Portada>
      <EtiquetaList array={fakeEtiquetes}></EtiquetaList>
      <Portada text={"LA NOTÍCIA MÉS LLEGIDA"}></Portada>
      <NoticiaMesLlegida bestnoticia={noticiaMontblanc}></NoticiaMesLlegida>
      <ButtonNoticies text={"CONTACTA AMB NOSALTRES"}></ButtonNoticies>
    </ScrollView>
  );
};

NoticiesScreen.Icon = ({ color, size }) => (
  <FontAwesome name="home" size={size} color={color} />
);

export default NoticiesScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  portadaContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    height: 30,
  },
  portadaText: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  itemLlistaNoticies: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
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
  separator: {
    height: 20,
    color: "#FFFFFF",
  },
  BotoNoticiesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  BotoNoticies: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 360,
    backgroundColor: "#EE3900",
    borderRadius: 5,
  },
  BotoNoticiesText: {
    color: "black",
    fontWeight: "bold",
  },

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
  EtiquetaItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: windowWidth / 2,
    backgroundColor: "#EE3900",
    /* borderColor: "white",
    borderWidth: 3, */
  },
  EtiquetaItemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  EtiquetaItemOverlay: {
    height: 70,
    width: windowWidth / 2,
    backgroundColor: "rgba(106,57,55,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  EtiquetaItemImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    borderColor: "white",
    borderWidth: 1,
  },
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
