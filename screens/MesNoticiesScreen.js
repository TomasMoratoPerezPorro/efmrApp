import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import NoticiesList from "../componentsNoticiesScreen/NoticiesList";
import SeparadorPortada from "../componentsNoticiesScreen/SeparadorPortada";

//const UserContext = createContext(/* user */ {});

const windowWidth = Dimensions.get("window").width;

const MesNoticiesScreen = ({ navigation, route }) => {
    const { etiqueta } = route.params;
  return (
    <ScrollView contentContainerstyle={[styles.page]}>
      <SeparadorPortada text={etiqueta}></SeparadorPortada>
      <NoticiesList navigation={navigation} etiqueta={etiqueta}></NoticiesList>
    </ScrollView>
  );
};

export default MesNoticiesScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
