import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Button, Dimensions, ScrollView, StyleSheet } from "react-native";
import ButtonNoticies from "../componentsNoticiesScreen/ButtonNoticies";
import CarrousselPortada from "../componentsNoticiesScreen/CarrousselPortada";
import EtiquetaList from "../componentsNoticiesScreen/EtiquetaList";
import NoticiaMesLlegida from "../componentsNoticiesScreen/NoticiaMesLlegida";
import NoticiesList from "../componentsNoticiesScreen/NoticiesList";
import SeparadorPortada from "../componentsNoticiesScreen/SeparadorPortada";

//DADES JAVI
const ImgContacte = {
  imgEspluga:
    "https://s3-alpha-sig.figma.com/img/b0fc/77af/c18ff98b6dd11a231fc9df57e1da4428?Expires=1588550400&Signature=aGZBfgGJcABqv0XDcSVjrOzTyFLMLdaoAj8d4i2bMc5iRjFvQNvF8rWD9odxRs-wtEleI7-4Qq9mizYKlxcCP-N6HPfPM5JnpObq37cai8YiHI8RIiXoQ-9dhYyGZZJjysgDgH32ukFNcvAAlHiMm9MwqQIqx61J81OjtJLamzSNOkupl0IVbXI1RyTGIuxDYOUju45KECKGPYiBbWp~dcWS9ZDKdJTTpUmR63y~xpFTDzftBf60kND9bw1wYIVCHz0m4Q2XRxLWZXTA7PG1-myMpnQzrvzaYMdo2ybVec7vy2u8MXcUdn6kgEDoRO5a2b35FZTGbzXCRzgG1hFDyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  imgTaco: "https://www.tacoalt.cat/images/TACOALT.png",
  imgEsplugaAud:
    "https://www.efmr.cat/wp-content/uploads/2018/03/Logo_EA4x.png",
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

const NoticiesScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerstyle={[styles.page]}>
      {/* <RenderItemNoticia></RenderItemNoticia> */}

      <SeparadorPortada text={"PORTADA"}></SeparadorPortada>
      <CarrousselPortada navigation={navigation}></CarrousselPortada>
      {/* <CarrousselItem {...fakeNoticiesList[2]}></CarrousselItem> */}
      <SeparadorPortada text={"NOTÍCIES"}></SeparadorPortada>
      <NoticiesList navigation={navigation}></NoticiesList>

      <ButtonNoticies text={"+ NOTÍCIES"}></ButtonNoticies>
      <SeparadorPortada text={"ETIQUETES"}></SeparadorPortada>
      <EtiquetaList array={fakeEtiquetes}></EtiquetaList>
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
