import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import AudioMesVist from "../componentsAudioScreen/AudioMesVist";
import ButtonMesAudios from "../componentsAudioScreen/ButtonMesAudios";
import InformatiuConca from "../componentsAudioScreen/InformatiuConca";
import UltimsAudiosList from "../componentsAudioScreen/UltimsAudiosList";
//COMPONENTS
import UltimsProgrames from "../componentsAudioScreen/UltimsProgrames";

//DADES JAVI:
const Audio = {};

const ImgAudio = {
  imgsup: "https://www.efmr.cat/wp-content/uploads/2018/01/Ara-i-sempre.jpg",
  imgaud1: "https://www.efmr.cat/wp-content/uploads/2018/01/Ara-i-sempre.jpg",
  imgaud2: "https://www.efmr.cat/wp-content/uploads/2018/01/Ara-i-sempre.jpg",
};
const TextAudio = {
  titolnoticia: "Ara i sempre del 29 de febrer de 2020",
  data: "29 de Febrer de 2020",
  interprets: "Pep Torres i Miquel Vilà",
  tecnic: "Jofre Major",
  textnoticia:
    "Aquest dimecres es complirà mig any de la riuada del Francolí del 22 d’octubre i els municipis encara no coneixeran la quantitat dels ajuts econòmics ni quan arribaran. És la principal preocupació dels alcaldes després de sis mesos en els quals s’ha treballat per restablir els serveis bàsics i les principals connexions. Amb l’actual crisi sanitària i després del temporal Glòria, els Ajuntaments de la Conca de Barberà se senten abandonats per part de l’Estat perquè ja ha esgotat el termini per ampliar el reial decret dels ajuts de Múrcia i Alacant que vencia aquest passat 31 de març. ",
};

const Ultimsaudios = [
  {
    titolaudio: "Ara i sempre del divendres 10 de gener del 2020",
    imgaud: "https://www.efmr.cat/wp-content/uploads/2018/01/Ara-i-sempre.jpg",
  },
  {
    titolaudio: "Ara i sempre del divendres 10 de gener del 2020",
    imgaud: "https://www.efmr.cat/wp-content/uploads/2018/01/Ara-i-sempre.jpg",
  },
];

//CODI VICTOR

const AudiosScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerstyle={[styles.page]}>
      <Button
        title="Pagina detall audio de mostra"
        onPress={() => {
          navigation.navigate("AudioScreen", {
            imatges: ImgAudio,
            dadesAudio: TextAudio,
            ultimsAudios: Ultimsaudios,
          });
        }}
      />
      <Button
        title="Pagina Prova audio player"
        onPress={() => {
          navigation.navigate("AudioPlayerTestScreen", {
            imatges: ImgAudio,
            dadesAudio: TextAudio,
            ultimsAudios: Ultimsaudios,
          });
        }}
      />
      <UltimsAudiosList></UltimsAudiosList>
      <ButtonMesAudios></ButtonMesAudios>
      <InformatiuConca></InformatiuConca>
      <UltimsProgrames></UltimsProgrames>
      <AudioMesVist></AudioMesVist>
    </ScrollView>
  );
};

AudiosScreen.Icon = ({ color, size }) => (
  <Ionicons name="md-settings" color={color} size={size} />
);

export default AudiosScreen;

const styles = StyleSheet.create({
  red: {
    backgroundColor: "#33f",
  },
});
