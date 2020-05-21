import { observable, action } from "mobx";
import React, { createContext } from "react";

const myForEach = async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

class NoticiesModel {
  @observable noticies = null;

  @action async loadNoticies() {
    const response = await fetch(
      "https://www.efmr.cat/wp-json/wp/v2/posts?categories=96&per_page=10&_fields=id,date,title,content,excerpt,author,featured_media,categories"
    );
    const json = await response.json();
    this.noticies = json;
    
  }

  @action async loadMedia() {
    await myForEach(this.noticies, async (noticia) => {
      var idmedia = noticia.featured_media;
      console.log(idmedia);
      const responseMedia = await fetch(
        "https://www.efmr.cat/wp-json/wp/v2/media/" +
          idmedia +
          "?_fields=id,source_url,media_details"
      );
      const jsonmedia = await responseMedia.json();
      noticia.media = jsonmedia;
      
    });
  }
}

const model = new NoticiesModel();

export const NoticiesContext = createContext(model);

export const NoticiesProvider = ({ children }) => (
  <NoticiesContext.Provider value={model}>{children}</NoticiesContext.Provider>
);
