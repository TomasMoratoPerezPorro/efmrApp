import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import { NoticiesContext } from "../model/NoticiesModel";
import RenderItemUltimsAudios from "../componentsAudioScreen/RenderItemUltimsAudios";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const photoSize = Math.floor(screenWidth / numColumns);

const fakeAudiosList = [
  {
    text: "L’Ajuntament a Casa del diumenge 8 de març del 2020",
    img:
      "https://www.efmr.cat/wp-content/uploads/2019/05/Estudis-EFMR_9291-1024x682.jpg",
  },
  {
    text: "Informatiu Conca de Barberà del 7 i 8 de març del 2020",
    img:
      "https://www.efmr.cat/wp-content/uploads/2018/01/IMG_0844-1024x683.jpg",
  },
  {
    text: "Ara i Sempre del 29 de febrer de 2020",
    img:
      "https://www.efmr.cat/wp-content/uploads/2017/11/Estudis-EFMR_9278-1024x682.jpg",
  },
  {
    text: "Especial Informatiu del divendres 17 d’abril del 2020",
    img:
      "https://www.efmr.cat/wp-content/uploads/2018/10/IMG_0004-1024x683.jpg",
  },
];



const UltimsAudiosList = observer(({ navigation }) => {
  const audios = useContext(NoticiesContext);
  useEffect(() => {
    audios.loadUltimsAudios();
  }, []);

  if (audios.ultimsAudios == null) {
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
      <View>
        <FlatList
          data={audios.ultimsAudios}
          numColumns={numColumns}
          keyExtractor={(audio) => audio.id.toString()}
          renderItem={({ item }) => <RenderItemUltimsAudios {...item} />}
        />
      </View>
    );
  }
});

export default UltimsAudiosList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  photo: {
    width: screenWidth/2,
    height: 120,
    borderWidth: 1,
    borderColor: "white",
  },

  textsota: {
    padding: 5,
    paddingLeft: 10,
  },

  viewTot: {
    width: screenWidth/2,
    paddingTop: 15,
  },
});
