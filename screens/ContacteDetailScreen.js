import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SocialIcon } from "react-native-elements";

const Contactes = ({ user5, user2 }) => {
  return (
    <ScrollView style={styles.page}>
      <InfoEspluga user5={user5}></InfoEspluga>
      <InfoTacoalt user5={user5}></InfoTacoalt>
      <InfoEsplugaAudio user5={user5}></InfoEsplugaAudio>
      <Redes></Redes>
    </ScrollView>
  );
};

const InfoEspluga = ({ user5 }) => {
  return (
    <View style={styles.infoespluga}>
      <Image
        source={{ uri: user5.imgEspluga }}
        style={{ width: 320, height: 110 }}
      ></Image>
      <Text style={{ fontWeight: "bold", fontSize: 26, paddingTop: 10 }}>
        L'Espluga FM Ràdio:
      </Text>
      <Text style={{ fontSize: 24, paddingTop: 25 }}>977 870 076</Text>
      <Text style={{ fontSize: 24, paddingTop: 15 }}>
        info@esplugafmradio.cat
      </Text>
    </View>
  );
};

const InfoTacoalt = ({ user5 }) => {
  return (
    <View style={styles.infotaco}>
      <Image
        source={{ uri: user5.imgTaco }}
        style={{ width: 320, height: 110 }}
      ></Image>
      <Text style={{ fontWeight: "bold", fontSize: 26, paddingTop: 10 }}>
        Tac12 Telelvisió:
      </Text>
      <Text style={{ fontSize: 24, paddingTop: 25 }}>877 60 40 01</Text>
      <Text style={{ fontSize: 24, paddingTop: 15 }}>redaccio@tac12.tv</Text>
    </View>
  );
};

const InfoEsplugaAudio = ({ user5 }) => {
  return (
    <View style={styles.infoesplugaud}>
      <Image
        source={{ uri: user5.imgEsplugaAud }}
        style={{ width: 350, height: 110 }}
      ></Image>
      <Text style={{ fontWeight: "bold", fontSize: 26, paddingTop: 10 }}>
        L'Espluga Audiovisual:
      </Text>
      <Text style={{ fontSize: 24, paddingTop: 25 }}>616 62 00 06</Text>
      <Text style={{ fontSize: 24, paddingTop: 15 }}>
        esplugaudiovisual@gmail.com
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

const ContacteDetailScreen = ({ route, navigation }) => {
  const { infoContacte } = route.params;
  

  return (
    <ScrollView style={styles.page}>
      <Contactes user5={infoContacte} />
    </ScrollView>
  );
};

export default ContacteDetailScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "flex-end",

    height: 80,
    backgroundColor: "#3B0D11",
  },

  infoespluga: {
    paddingTop: 20,
    fontSize: 24,
    alignItems: "center",
  },

  infotaco: {
    fontSize: 24,
    alignItems: "center",
    paddingTop: 20,
  },

  infoesplugaud: {
    alignItems: "center",
    paddingTop: 20,
  },

  redes: {
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialico: {
    backgroundColor: "#7E0000",
  },
});
