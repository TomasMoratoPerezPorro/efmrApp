import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CarrousselItem from "../componentsNoticiesScreen/CarrousselItem";

const CarrousselPortada = ({ array }) => {
    return (
      <FlatList
        data={
          array
        } /* {array.map((item, index) => ({ key: index, item: item }))} */
        keyExtractor={(array) => array.titular}
        renderItem={({ item }) => <CarrousselItem {...item} />}
        horizontal={true}
      ></FlatList>
    );
  };

  export default CarrousselPortada;

  