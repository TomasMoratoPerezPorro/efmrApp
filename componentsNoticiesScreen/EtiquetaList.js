import React from "react";
import { FlatList } from "react-native-gesture-handler";
import EtiquetaItem from "../componentsNoticiesScreen/EtiquetaItem";


const EtiquetaList = ({ array }) => {
    return (
      <FlatList
        data={array}
        keyExtractor={(array) => array.nom}
        renderItem={({ item }) => <EtiquetaItem {...item} />}
        numColumns={2}
      ></FlatList>
    );
  };

  export default EtiquetaList;




  