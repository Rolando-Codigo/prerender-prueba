import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { config } from 'rxjs';
import { ConfirmModalComponent, ModalConfig } from 'src/app/components/confirm-modal/confirm-modal.component';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayGoldenTicketService } from 'src/app/services/giveaway-golden-ticket.service';
import { GiveawayParticipacionReferidosService } from 'src/app/services/giveaway-participacion-referidos.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PromocionalGeneralComponent } from '../promocional-general';
import { BoletosAsignadosModalComponent } from './boletos-asignados-modal/boletos-asignados-modal.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-boleto-dorado',
  templateUrl: './boleto-dorado.component.html',
  styleUrls: ['./boleto-dorado.component.css']
})
export class BoletoDoradoComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit  {


  estadisticas: any;
  giveaway;
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

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionReferidosService,
    private giveawayGoldenTicketService: GiveawayGoldenTicketService,
    private dialog: MatDialog,
    private metaTagsService : MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngOnInit(): void {
    this.initCodigo();
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Canjea el código de tu Boleto Dorado');
    this.metaTagsService.setMetaDescription('Canjea el código de tu Boleto Dorado aquí. Llévate grandes artículos: Fujifilm Instax Square Sq1 05. Ipad 10.2. Nintendo Switch.');
  }

  ngAfterViewInit() {
    this.getContador();
  }

  async getEstadisticas(recaptcha?: any) {
    const validadCaptcha = await this.validarCaptcha('ESTADISTICAS', recaptcha);
    if (validadCaptcha) {
      this.giveawayGoldenTicketService.consultarEstadisticas(this.giveaway.id, recaptcha, this.host).subscribe( response =>  {
        this.estadisticas = response;
      });
    }
  }

  async submitRequest(recaptcha?: any) {
    const validadCaptcha = await this.validarCaptcha('ALTA', recaptcha);
    if (validadCaptcha) {
      // enviar la solicitud
      this.busy = true;
      this.giveawayService.altaClaveGiveawayBoletoDorado(this.codigo, recaptcha, this.host).subscribe((response) => {
        const dialog = this.dialog.open( BoletosAsignadosModalComponent, {
          data: {
            response: response,
            idParticipacion: this.codigo
          },
          width: '350px'
        });

        this.busy = false;
        this.getContador();

      }, (error) => {
        this.busy = false;
        this.confirmModalService.showModal({
          title: '¡Ocurrio un problema!',
          message: error.message
        });
      });
    }
  }

  async getContador(recaptcha?: any) {
    const validadCaptcha = await this.validarCaptcha('CONTADOR', recaptcha);
    if (validadCaptcha) {
      // enviar la solicitud
      this.busy = true;
      this.giveawayService.contadorGiveaway(this.codigo, recaptcha, this.host).subscribe( response => {
        this.contador = response.contadorAux;
        this.rangoGiveaway = response.rango;
        this.giveaway = response.rango.giveaway;
        this.busy = false;
      }, errr => {
        this.busy = false;
      });
    }
  }

  imageBackgorund(imagen: any) {

    return `url(${imagen})`;
  }
}
