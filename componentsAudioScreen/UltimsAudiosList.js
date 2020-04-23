import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

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

const UltimsAudiosItem = ({ text, img }) => {
  return (
    <View>
      <View>
        <View style={styles.viewTot}>
          <Image
            style={styles.photo}
            source={{
              uri: img,
            }}
          />
          <Text style={styles.textsota}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const UltimsAudiosList = () => {
  return (
    <View>
      <View>
        <Text style={styles.textsota}>ÚLTIMS ÀUDIOS</Text>
      </View>

      <FlatList
        data={fakeAudiosList}
        numColumns={numColumns}
        renderItem={({ item }) => <UltimsAudiosItem {...item} />}
      />
    </View>
  );
};

export default UltimsAudiosList;

const styles = StyleSheet.create({
  photo: {
    width: photoSize,
    height: 120,
    borderWidth: 1,
    borderColor: "white",
  },

  textsota: {
    padding: 5,
    paddingLeft: 10,
  },

  viewTot: {
    width: photoSize,
    paddingTop: 15,
  },
});
