import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    ) {

     }

    setTitle(title: string) {
      this.titleService.setTitle(title);
      this.setMetaTitle(title);
    }

    setMetaDescription(title: string) {
      this.metaService.updateTag({name : 'description', content : title ?? '' });
    }

    setMetaTitle(title: string) {
      this.metaService.addTags([
        {name: 'title', content: title ?? ''},
      ]);
    }

    getImageArray(model: any) {
      let image;
      if(model.imagen.length > 0) {
        image = model.imagen[0].url != null
                && model.imagen[0].formats.small != null ? model.imagen[0].formats.small.url : '';
      }

      return image;
    }

    getCaratulaArray(model: any) {
      return model.caratula.url != null && model.caratula.formats.small != null ? model.caratula.formats.small.url : '';
    }

    getUrlArt(...parameters: any[]) {
      return parameters.reduce( (u, v) => u += `/${v}`, 'https://media.hey.inc/articulo');
    }

    getUrlVideos(...parameters: any[]) {
      return parameters.reduce( (u, v) => u += `/${v}`, 'https://media.hey.inc/videos');
    }

    setTagsArticulo(articulo: any, nombre: string) {
      const image = this.getImageArray(articulo);
      const url = this.getUrlArt(articulo.id, nombre);

      this.metaService.addTags([
          {property: 'twitter:url', content: url},
          {property: 'twitter:image', content: image},

          {property: 'twitter:title', content: articulo.titulo},
          {property: 'twitter:description', content: articulo.resumen},

          {property: 'og:url', content: url},
          {property: 'og:title', content: articulo.titulo},
          {property: 'og:description', content: articulo.resumen},
          {property: 'og:image', content: image},

          {name: 'name', content: articulo.titulo},
          {name: 'image', content: image},
          {name: 'description', content: articulo.metaDescription ?? ''},
      ]);
    }

    setTagsVideo(videos: any, nombre: string) {
      const image = this.getCaratulaArray(videos);
      const url = this.getUrlVideos(videos.id, nombre);

      this.metaService.addTags([
          {property: 'twitter:url', content: url},
          {property: 'twitter:image', content: image},

          {property: 'twitter:title', content: videos.titulo},
          {property: 'twitter:description', content: videos.resumen},

          {property: 'og:url', content: url},
          {property: 'og:title', content: videos.titulo},
          {property: 'og:description', content: videos.resumen},
          {property: 'og:image', content: image},

          {name: 'title', content: videos.titulo},
          {name: 'image', content: image},
          {name: 'description', content: videos.metaDescription ?? ''},
      ]);
    }

    setTitleDesc(titulo: string, descripcion: string) {
      this.setMetaTitle(titulo);
      this.setMetaDescription(descripcion);
    }

    setMetaByCategori(categorie: string) {
      console.log(categorie);
      switch(categorie) {
        case 'bienestar':
            this.setTitle('Hey, Media | Bienestar');
            this.setTitleDesc('Hey, Media | Bienestar', 'Conoce lo último en noticias sobre bienestar integral e inspírate a mejorar tu bienestar físico, emocional y financiero. ');
            break;
            case 'estilo-de-vida':
            this.setTitle('Hey, Media | Estilo de Vida');
            this.setTitleDesc('Hey, Media | Estilo de Vida', 'Tu fuente de noticias sobre estilo de vida. Lee sobre cultura, viajes y entretenimiento para que te mantengas al tanto de lo que ocurre a tu alrededor.');
            break;
            case 'mercados':
            this.setTitle('Hey, Media | Mercados');
            this.setTitleDesc('Hey, Media | Mercados', 'Conoce las últimas noticias y opiniones en mercados y  economía nacional e internacional directo de la voz de expertos.');
            break;
            case 'negocios':
            this.setTitle('Hey, Media | Negocios');
            this.setTitleDesc('Hey, Media | Negocios', 'Entérate de lo último en negocios y su comportamiento en México y el mundo.');
          break;
      }
    }
}
