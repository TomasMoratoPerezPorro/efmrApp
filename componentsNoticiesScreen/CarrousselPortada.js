import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CarrousselItem from "../componentsNoticiesScreen/CarrousselItem";
import NewCarousel from "../componentsNoticiesScreen/NewCarousel";
import { NoticiesContext } from "../model/NoticiesModel";

const windowWidth = Dimensions.get("window").width;

const CarrousselPortada = observer(({ navigation }) => {
  const noticies = useContext(NoticiesContext);
  useEffect(() => {
    noticies.loadNoticiesPortada();
  }, []);
  if (noticies.noticiesPortada == null) {
    return (
      <View style={styles.CarrousselItemContainer}>
        <ActivityIndicator
          size="large"
          color="#3B0D11"
          style={styles.activityIndicator}
        />
      </View>
    );
  } else {
    console.log("NOTICIES CAROUSEL PROPS:"+noticies.noticiesPortada);
    return <NewCarousel style='slide' items={noticies.noticiesPortada} />;
  }
});

export default CarrousselPortada;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CarrousselItemContainer: {
    flex: 1,
    width: windowWidth,
    height: 180,
    color: "black",
  },
});

{
  /* <FlatList
        data={noticies.noticiesPortada}
        keyExtractor={(array) => array.id.toString()}
        renderItem={({ item }) => <CarrousselItem {...item} />}
        horizontal={true}
      ></FlatList> */
}
