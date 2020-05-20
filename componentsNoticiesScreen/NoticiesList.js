import React from "react";
import { TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RenderItemNoticia from "../componentsNoticiesScreen/RenderItemNoticia";
import Separator from "../componentsNoticiesScreen/Separator";

const fakeNoticiesList = [
    {
      titular: "Montblanc serà la Vila Gitanera de Catalunya 2020",
      data: "2 de Març de 2020",
      seccio: "CULTURA",
      thumbnail:
        "https://www.efmr.cat/wp-content/uploads/2019/10/IMG_0210-218x150.jpg",
    },
    {
      titular:
        "Conflicte laboral entre una llevadora de Santa Coloma de Queralt i l’Institut Català de la Salut",
      data: "3 de Març de 2020",
      seccio: "SOCIETAT",
      thumbnail:
        "https://www.efmr.cat/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-22-at-12.31.55-218x150.jpeg",
    },
    {
      titular:
        "Presentació de les coreografies de l’Escola de Dansa del Casal d’aquest 2020",
      data: "4 de Març de 2020",
      seccio: "CULTURA",
      thumbnail:
        "https://www.efmr.cat/wp-content/uploads/2018/07/IMG_2773-294x194.jpg",
    },
    {
      titular:
        "El GEPEC presenta informes contraris a la instal·lació dels nous parcs eòlics a la Conca",
      data: "5 de Març de 2020",
      seccio: "TERRITORI",
      thumbnail:
        "https://www.efmr.cat/wp-content/uploads/2018/04/Sant-Jordi-Espluga-Gerard-Bosch_8073-294x194.jpg",
    },
    {
      titular:
        "La Diputació de Tarragona aprova ajuts per a habitatge municipal per revertir el despoblament rural i ...",
      data: "6 de Març de 2020",
      seccio: "CULTURA",
      thumbnail:
        "https://www.efmr.cat/wp-content/uploads/2017/10/IMG_9258-294x194.jpg",
    },
  ];

const NoticiesList = ({ navigation }) => {
    return (
      <FlatList
        data={fakeNoticiesList}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => {
              navigation.navigate("NoticiaScreen", {
                itemId: 86,
                otherParam: fakeNoticia,
              });
            }}
          >
            <RenderItemNoticia {...item} />
          </TouchableHighlight>
        )}
        keyExtractor={(noticia) => noticia.data}
        ItemSeparatorComponent={Separator}
      ></FlatList>
    );
  };

  export default NoticiesList;

