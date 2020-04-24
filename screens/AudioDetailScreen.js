import React from "react";
import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SocialIcon } from "react-native-elements";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const photoSize = Math.floor(screenWidth / numColumns);

const AudioProfile = ({ user2, user3, user4 }) => {
  return (
    <View>
      <ImatgeNoticia user3={user3} user2={user2}></ImatgeNoticia>
      <TextNoticia user3={user3}></TextNoticia>
      <Redes></Redes>
      <UltimsAudios user4={user4} user2={user2}></UltimsAudios>
    </View>
  );
};

const Header = () => {
  return <View style={styles.header}></View>;
};

const ImatgeNoticia = ({ user2, user3 }) => {
  return (
    <View style={styles.imatgenoticia}>
      <Image style={styles.imgnot} source={{ uri: user2.imgsup }}></Image>
      <Text style={styles.titolnoticia}>{user3.titolnoticia}</Text>

      <Text style={{ fontSize: 9, fontWeight: "bold", alignSelf: "flex-end" }}>
        {"Per Redacció | EFMR.cat-" + user3.data}
      </Text>
    </View>
  );
};

const TextNoticia = ({ user3 }) => {
  return (
    <View style={styles.textnoticia}>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 10 }}>
        {"  Àudio:"}
      </Text>
      <Text
        style={{
          fontSize: 9,
          fontWeight: "bold",
          paddingBottom: 10,
          paddingLeft: 6,
        }}
      >
        {"Intèrprets:" + user3.interprets + "| Tècnic:" + user3.tecnic}
      </Text>
      <Text style={{ fontSize: 16, paddingBottom: 10, paddingLeft: 6 }}>
        {user3.textnoticia}
      </Text>
    </View>
  );
};

const Redes = () => {
  return (
    <View style={styles.redes}>
      <SocialIcon
        style={styles.socialico}
        type="twitter"
        onPress={() => {
          this._toggleBottomNavigationView();
          alert("twitter");
        }}
      />

      <SocialIcon
        style={styles.socialico}
        type="facebook"
        onPress={() => {
          this._toggleBottomNavigationView();
          alert("facebook");
        }}
      />

      <SocialIcon
        style={styles.socialico}
        type="youtube"
        onPress={() => {
          this._toggleBottomNavigationView();
          alert("youtube");
        }}
      />

      <SocialIcon
        style={styles.socialico}
        type="instagram"
        onPress={() => {
          this._toggleBottomNavigationView();
          alert("instagram");
        }}
      />
    </View>
  );
};

const UltimsAudios = ({ user4, user2 }) => {
  return (
    <View style={styles.UltimsAudios}>
      <Text style={{ fontSize: 13, fontWeight: "bold", paddingTop: 10 }}>
        {"ÚLTIMS ÀUDIOS | ARA I SEMPRE "}
      </Text>
      <Image source={{ uri: user2.imgaud1 }} style={styles.imgaudio}></Image>
      <Text>{user4.titolnoticia1} </Text>
      <Image source={{ uri: user2.imgaud2 }} style={styles.imgaudio}></Image>
      <Text>{user4.titolaudio2}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={goToMesAudios} title="+ ÀUDIOS" color="#E7D219" />
      </View>
    </View>
  );
};

const EsquemaNoticia = ({ user4 }) => {
  return (
    <View>
      <View>
        <View style={styles.viewTot}>
          <Image
            style={styles.photo}
            source={{
              uri: user4.imgaud,
            }}
          />
          <Text style={styles.textsota}>{user4.titolaudio}</Text>
        </View>
      </View>
    </View>
  );
};

const HorizList = (user4) => {
  return (
    <View>
      <View>
        <Text style={styles.textsota}>{"ÚLTIMS ÀUDIOS"}</Text>
      </View>

      <FlatList
        data={user4}
        numColumns={numColumns}
        renderItem={({ item }) => <EsquemaNoticia {...item} />}
      />
    </View>
  );
};

const goToMesAudios = () => {
  return <View></View>;
};

const AudioDetailScreen = ({ route, navigation }) => {
  const { imatges } = route.params;
  const { dadesAudio } = route.params;
  const { ultimsAudios } = route.params;
  console.log(imatges);
  console.log(dadesAudio);
  console.log(ultimsAudios);

  return (
    <ScrollView style={styles.page}>
      <AudioProfile user2={imatges} user3={dadesAudio} user4={ultimsAudios} />
    </ScrollView>
  );
};

export default AudioDetailScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 80,
    backgroundColor: "#3B0D11",
  },
  imatgenoticia: {
    height: 237,
    backgroundColor: "#C4C4C4",
  },
  titolnoticia: {
    paddingTop: 150,
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    alignItems: "center",
    position: "absolute",
  },
  textnoticia: {
    paddingLeft: 6,
    paddingTop: 6,
  },
  imgnot: {
    width: 400,
    height: 220,
  },
  redes: {
    flexDirection: "row",
    color: "#3B0D11",
  },
  socialico: {
    backgroundColor: "#7E0000",
  },
  UltimsAudios: {
    paddingLeft: 6,
    paddingTop: 2,
  },
  imgaudio: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 187,
    height: 98,
  },
  textboto: {
    width: 107,
    height: 2,
    position: "absolute",
  },
  buttonContainer: {
    padding: 20,
  },

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
