import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-boleto-dorado-informativo',
  templateUrl: './boleto-dorado-informativo.component.html',
  styleUrls: ['./boleto-dorado-informativo.component.css']
})
export class BoletoDoradoInformativoComponent implements OnInit {

  premios = [
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-golden-ticket-imagen-iphone.png',
        nombre: 'iPhone 13'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-boleto-dorado.png',
        nombre: 'Mazda CX 3i'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-hb-golden-ticket-imagen-viajes.png',
        nombre: 'Vuelos internacionales'
      }
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-acapella-ropa-youth-hoodie.png',
        nombre: 'Acapella Ropa Youth Hoodie'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-auriculares-realidad-virtual.png',
        nombre: 'Auriculares Realidad Virtual'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-cafetera-nespresso.png',
        nombre: 'Cafetera Nespresso'
      }
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-camara-goPro.png',
        nombre: 'Camara GoPro'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-consola-xbox-series-s.png',
        nombre: 'Consola Xbox Series S'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-drone-broadream.png',
        nombre: 'Drone Broadream'
      }
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-echo-show.png',
        nombre: 'Echo Show'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-fujifilm-instax-square-sq1-05.png',
        nombre: 'Fujifilm Instax Square Sq1 05'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-garmin-v%C3%ADvoactive%203%20-%20Reloj.png',
        nombre: 'Garmin Vívoactive 3 - Reloj'
      },
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-hisense-43-pulgadas-roku-tv.png',
        nombre: 'Hisense 43 pulgadas Roku TV'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-Ipad-10.2.png',
        nombre: 'Ipad 10.2'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-nintendo-switch.png',
        nombre: 'Nintendo Switch'
      },
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-nuevo-echo-alexa.png',
        nombre: 'Nuevo Echo Alexa'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-sudadera-acapella.png',
        nombre: 'Sudadera Acapella'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-sudadera-acapella%20X%20Hey.png',
        nombre: 'Sudadera Acapella X Hey'
      },
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-amazon.png',
        nombre: 'Tarjeta De Regalo Amazon'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-google-play.png',
        nombre: 'Tarjeta De Regalo Google Play'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-netflix.png',
        nombre: 'Tarjeta De Regalo Netflix'
      },
    ],
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-xbox-live.png',
        nombre: 'Tarjeta De Regalo Xbox Live'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-t-shirt-acapella-x-hey.png',
        nombre: 'T Shirt Acapella X Hey'
      }
    ]
  ];

  premiosMovil =
    [
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-golden-ticket-imagen-iphone.png',
        nombre: 'iPhone 13'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-boleto-dorado.png',
        nombre: 'Mazda CX 3i'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-hb-golden-ticket-imagen-viajes.png',
        nombre: 'Vuelos internacionales'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-acapella-ropa-youth-hoodie.png',
        nombre: 'Acapella Ropa Youth Hoodie'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-auriculares-realidad-virtual.png',
        nombre: 'Auriculares Realidad Virtual'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-cafetera-nespresso.png',
        nombre: 'Cafetera Nespresso'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-camara-goPro.png',
        nombre: 'Camara GoPro'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-consola-xbox-series-s.png',
        nombre: 'Consola Xbox Series S'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-drone-broadream.png',
        nombre: 'Drone Broadream'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-echo-show.png',
        nombre: 'Echo Show'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-fujifilm-instax-square.png',
        nombre: 'Fujifilm Instax Square'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-garmin-viivoactive-3-reloj.png',
        nombre: 'Garmin Vívoactive 3 - Reloj'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-hisense-43-pulgadas-roku-tv.png',
        nombre: 'Hisense 43 pulgadas Roku TV'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-Ipad-10.2.png',
        nombre: 'Ipad 10.2'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-nintendo-switch.png',
        nombre: 'Nintendo Switch'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-nuevo-echo-alexa.png',
        nombre: 'Nuevo Echo Alexa'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-sudadera-acapella.png',
        nombre: 'Sudadera Acapella'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-sudadera-acapella%20X%20Hey.png',
        nombre: 'Sudadera Acapella X Hey'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-amazon.png',
        nombre: 'Tarjeta De Regalo Amazon'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-google-play.png',
        nombre: 'Tarjeta De Regalo Google Play'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-netflix.png',
        nombre: 'Tarjeta De Regalo Netflix'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-tarjeta-de-regalo-xbox-live.png',
        nombre: 'Tarjeta De Regalo Xbox Live'
      },
      {
        imagen: 'https://heybanco.s3.amazonaws.com/assets/img/P810-Giveaways/p810-t-shirt-acapella-x-hey.png',
        nombre: 'T Shirt Acapella X Hey'
      }
  ];

  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Encuentra el Boleto Dorado Hey');
    this.metaTagsService.setMetaDescription('Llévate increíbles artículos al hacer buen uso de tu Tarjeta Hey. Ipad 10.2. Nintendo Switch. Gift Card Xbox, Netflix y Amazon.');
  }

  imageBackgorund(imagen: any) {

    return `url(${imagen})`;
  }

}
