import { observable, action } from "mobx";
import React, { createContext } from "react";

const myForEach = async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

class NoticiesModel {
  @observable noticies = null;
  @observable noticiesEtiqueta = null;
  @observable noticiaMesLlegida = null;
  @observable noticiesPortada = null;
  @observable noticiaMesLlegidaMediaFlag = false;
  @observable ultimsAudios = null;

  @action async loadUltimsAudios() {
    const response = await fetch(
      "https://www.efmr.cat/wp-json/wp/v2/posts?categories=18&per_page=10&_fields=id,date,title,content,excerpt,author,featured_media,categories"
    );
    const json = await response.json();
    this.ultimsAudios = json;
  }

  @action async loadNoticies() {
    const response = await fetch(
      "https://www.efmr.cat/wp-json/wp/v2/posts?categories=96&per_page=10&_fields=id,date,title,content,excerpt,author,featured_media,categories"
    );
    const json = await response.json();
    this.noticies = json;
  }

  @action async loadNoticiesEtiqueta(etiqueta) {
    var idCategoria = 96;
    switch (etiqueta) {
      case "Cultura":
        idCategoria = 26;
        break;
      case "Economia":
        idCategoria = 28;
        break;
      case "Esports":
        idCategoria = 30;
        break;
      case "Política":
        idCategoria = 33;
        break;
      case "Societat":
        idCategoria = 34;
        break;
      case "Succesos":
        idCategoria = 6563;
        break;
      case "Territori":
        idCategoria = 6564;
        break;

      default:
        idCategoria = 96;
        break;
    }
    const response = await fetch(
      "https://www.efmr.cat/wp-json/wp/v2/posts?categories="+idCategoria+"&per_page=10&_fields=id,date,title,content,excerpt,author,featured_media,categories"
    );
    const json = await response.json();
    this.noticiesEtiqueta = json;
  }

  @action async loadNoticiesPortada() {
    const response = await fetch(
      "https://www.efmr.cat/wp-json/wp/v2/posts?categories=101&per_page=5&_fields=id,date,title,content,excerpt,author,featured_media,categories"
    );
    const json = await response.json();
    this.noticiesPortada = json;
  }

  @action async loadNoticiaMesLlegida() {
    const response = await fetch(
      "https://www.efmr.cat/wp-json/wordpress-popular-posts/v1/popular-posts?limit=1&range=last7days"
    );
    const json = await response.json();
    this.noticiaMesLlegida = json[0];

    console.log(JSON.stringify(this.noticiaMesLlegida));
    const idmedia = this.noticiaMesLlegida.featured_media;
    console.log("NOTICIA MES LLEGIDA MEDIA:____" + idmedia);

    const responseMedia = await fetch(
      "https://www.efmr.cat/wp-json/wp/v2/media/" +
        idmedia +
        "?_fields=id,source_url,media_details"
    );
    const jsonmedia = await responseMedia.json();
    this.noticiaMesLlegida.media = jsonmedia;
    console.log(JSON.stringify(this.noticiaMesLlegida.media));
    this.noticiaMesLlegidaMediaFlag = true;
  }

  @action async loadMediaPortada() {
    await myForEach(this.noticiesPortada, async (noticia) => {
      var idmedia = noticia.featured_media;
      console.log(idmedia);
      try {
        const responseMedia = await fetch(
          "https://www.efmr.cat/wp-json/wp/v2/media/" +
            idmedia +
            "?_fields=id,source_url,media_details"
        );
        const jsonmedia = await responseMedia.json();
        noticia.media = jsonmedia;
      } catch (error) {
        console.log(error + "-----" + idmedia);
      }
    });
  }

  /*
  @action async loadMedia() {
    await myForEach(this.noticies, async (noticia) => {
      var idmedia = noticia.featured_media;
      console.log(idmedia);
      try {
        const responseMedia = await fetch(
          "https://www.efmr.cat/wp-json/wp/v2/media/" +
            idmedia +
            "?_fields=id,source_url,media_details"
        );
        const jsonmedia = await responseMedia.json();
        noticia.media = jsonmedia;
      } catch (error) {
        console.log(error + "-----" + idmedia);
      }
    });
  }
  */
}

const model = new NoticiesModel();

export const NoticiesContext = createContext(model);

export const NoticiesProvider = ({ children }) => (
  <NoticiesContext.Provider value={model}>{children}</NoticiesContext.Provider>
);
