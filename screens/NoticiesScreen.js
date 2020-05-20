import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Button, Dimensions, ScrollView, StyleSheet } from "react-native";
import ButtonNoticies from "../componentsNoticiesScreen/ButtonNoticies";
import CarrousselPortada from "../componentsNoticiesScreen/CarrousselPortada";
import EtiquetaList from "../componentsNoticiesScreen/EtiquetaList";
import NoticiaMesLlegida from "../componentsNoticiesScreen/NoticiaMesLlegida";
import NoticiesList from "../componentsNoticiesScreen/NoticiesList";
import SeparadorPortada from "../componentsNoticiesScreen/SeparadorPortada";

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

const noticiaMontblanc = {
  titular: "Montblanc serà la Vila Gitanera de Catalunya 2020",
  data: "8 de Març de 2020",
  seccio: "CULTURA",
  thumbnail:
    "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
  visites: "2543",
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
      <SeparadorPortada text={"PORTADA"}></SeparadorPortada>
      <CarrousselPortada array={fakeNoticiesList}></CarrousselPortada>
      {/* <CarrousselItem {...fakeNoticiesList[2]}></CarrousselItem> */}
      <SeparadorPortada text={"NOTÍCIES"}></SeparadorPortada>
      <NoticiesList></NoticiesList>

      <ButtonNoticies text={"+ NOTÍCIES"}></ButtonNoticies>
      <SeparadorPortada text={"ETIQUETES"}></SeparadorPortada>
      <EtiquetaList array={fakeEtiquetes}></EtiquetaList>
      <SeparadorPortada text={"LA NOTÍCIA MÉS LLEGIDA"}></SeparadorPortada>
      <NoticiaMesLlegida bestnoticia={noticiaMontblanc}></NoticiaMesLlegida>
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
