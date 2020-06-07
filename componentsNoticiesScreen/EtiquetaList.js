import React from "react";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import EtiquetaItem from "../componentsNoticiesScreen/EtiquetaItem";

const EtiquetaList = ({ array, navigation }) => {
  return (
    <FlatList
      data={array}
      keyExtractor={(array) => array.nom}
      renderItem={({ item }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate("MesNoticiesScreen", {
              etiqueta: item.nom,
            });
          }}
        >
          <EtiquetaItem {...item} />
        </TouchableHighlight>
      )}
      numColumns={2}
    ></FlatList>
  );
};

export default EtiquetaList;
