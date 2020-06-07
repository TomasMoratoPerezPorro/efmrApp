import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Button, Dimensions, ScrollView, StyleSheet } from "react-native";
import ButtonNoticies from "../componentsNoticiesScreen/ButtonNoticies";
import CarrousselPortada from "../componentsNoticiesScreen/CarrousselPortada";
import EtiquetaList from "../componentsNoticiesScreen/EtiquetaList";
import NoticiaMesLlegida from "../componentsNoticiesScreen/NoticiaMesLlegida";
import NoticiesList from "../componentsNoticiesScreen/NoticiesList";
import SeparadorPortada from "../componentsNoticiesScreen/SeparadorPortada";



//const UserContext = createContext(/* user */ {});

const windowWidth = Dimensions.get("window").width;

const fakeEtiquetes = [
  {
    nom: "Política",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  },
  {
    nom: "Succesos",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-22-at-12.31.55-218x150.jpeg",
  },
  {
    nom: "Esports",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2018/07/IMG_2773-294x194.jpg",
  },
  {
    nom: "Economia",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2018/04/Sant-Jordi-Espluga-Gerard-Bosch_8073-294x194.jpg",
  },
  {
    nom: "Societat",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  },
  {
    nom: "Cultura",
    thumbnail:
      "https://www.efmr.cat/wp-content/uploads/2017/10/IMG_9258-294x194.jpg",
  },
];

const NoticiesScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerstyle={[styles.page]}>
      {/* <RenderItemNoticia></RenderItemNoticia> */}

      <SeparadorPortada text={"PORTADA"}></SeparadorPortada>
      <CarrousselPortada navigation={navigation}></CarrousselPortada>
      {/* <CarrousselItem {...fakeNoticiesList[2]}></CarrousselItem> */}
      <SeparadorPortada text={"NOTÍCIES"}></SeparadorPortada>
      <NoticiesList navigation={navigation}></NoticiesList>

      <ButtonNoticies text={"+ NOTÍCIES"} navigation={navigation}></ButtonNoticies>
      <SeparadorPortada text={"ETIQUETES"}></SeparadorPortada>
      <EtiquetaList array={fakeEtiquetes} navigation={navigation}></EtiquetaList>
      <SeparadorPortada text={"LA NOTÍCIA MÉS LLEGIDA"}></SeparadorPortada>
      <NoticiaMesLlegida navigation={navigation}></NoticiaMesLlegida>
      <ButtonNoticies
        text={"CONTACTA AMB NOSALTRES"}
        navigation={navigation}
      ></ButtonNoticies>
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
});
