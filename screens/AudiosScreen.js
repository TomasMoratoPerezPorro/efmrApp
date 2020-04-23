import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
//COMPONENTS
import UltimsProgrames from "../componentsAudioScreen/UltimsProgrames";
import UltimsAudiosList from "../componentsAudioScreen/UltimsAudiosList";
import ButtonMesAudios from "../componentsAudioScreen/ButtonMesAudios";
import InformatiuConca from "../componentsAudioScreen/InformatiuConca";
import AudioMesVist from "../componentsAudioScreen/AudioMesVist";
const AudiosScreen = () => {
  return (
    <ScrollView contentContainerstyle={[styles.page]}>
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
