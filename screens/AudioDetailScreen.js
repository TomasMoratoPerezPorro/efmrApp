import React from "react";
import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { autorun } from "mobx";

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
    <View>
      <Image style={styles.imgnot} source={{ uri: user2.imgsup }}></Image>

      <Text style={styles.redactortitle}>
        {"Per Redacció | EFMR.cat - " + user3.data}
      </Text>

    </View>
  );
};

const TextNoticia = ({ user3 }) => {
  return (

    <View style={styles.aboutInner}>
        <View>
          <Text style={styles.titolnoticia}>
         {user3.titolnoticia}
          </Text>
        </View>
    
    <View style={styles.textnoticia}>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 10 }}>
        {"Àudio:"}
      </Text>
      
      <Text
        style={{
          fontSize: 9,
          fontWeight: "bold",
          paddingBottom: 10,
        }}
      >
        {"Intèrprets: " + user3.interprets + " | Tècnic: " + user3.tecnic}
      </Text>
      <Text style={{ fontSize: 16, paddingBottom: 10}}>
        {user3.textnoticia}
      </Text>
    </View>

    </View>
  );
};

const Redes = () => {
  return (
    <View>
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

    <View style={styles.buttonContainer}>
        <Button onPress={goToMesAudios} title="+ ÀUDIOS" color="#E7D219" />
    </View>
    </View>
    
  );
};

const UltimsAudios = ({ user4, user2 }) => {
  return (
    <View>
      <Text style={styles.similar}>ÀUDIOS SIMILARS</Text>     
      
      
      <View style={styles.audiosSimilars}>
        <View style={styles.grid}>
            <Image
              style={styles.imagnoti}
              source={{ uri: user2.imgaud1 }}
            ></Image>
            <Text style={styles.notitext}>
              "L’espluguí, Ferran Lozano, participarà en una cursa solidària"
            </Text>
          </View>

          <View style={styles.grid}>
            <Image
              style={styles.imagnoti}
              source={{ uri: user2.imgaud2 }}
            ></Image>
            <Text style={styles.notitext}>
              "La víctima mortal de l’accident de trànsit de l’Espluga era un
              ..."
            </Text>
          </View>
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
  

  return (
    <ScrollView style={styles.page}>
      <AudioProfile user2={imatges} user3={dadesAudio} user4={ultimsAudios} />
    </ScrollView>
  );
};

export default AudioDetailScreen;

var htmlstyles = StyleSheet.create({
  a: {
    fontWeight: "300",
    fontSize: 12,
  },
  p: {
    fontSize: 12,
  },
  strong: {
    fontWeight: "bold",
    fontSize: 12,
  },
  li: {
    fontSize: 12,
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    
    height: 80,
    backgroundColor: "#3B0D11",
  },
  aboutInner: {
    backgroundColor: "white",
    padding: 22,
  },
  titolnoticia: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 2,
  },
  textnoticia: {
    paddingTop: 6,
  },
  imgnot: {
    flex: 1,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
    paddingBottom: 20,
  },
  redes: {
    alignSelf: "center",
    flexDirection: "row",
    color: "#3B0D11",
  },
  socialico: {
    height: 46,
    width: 46,
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
  redactortitle: {
    color: "#0008",
    fontSize: 12,
    textAlign: "right",
    padding: 5,
    height: 30,
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  audiosSimilars: {
    flex: 1,
    flexDirection: "row",
  },
  grid: {
    width: "50%",
    height: 300,
    
  },
  imagnoti: {
    height: 130,
    alignItems: "center",
    backgroundColor: "red",
    paddingBottom: 2,
  },
  notitext: {
    fontSize: 15,
    padding: 10,
  },
  similar: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
});
