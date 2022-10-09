import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayGoldenTicketService } from 'src/app/services/giveaway-golden-ticket.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PromocionalGeneralComponent } from '../promocional-general';
// import ConfettiGenerator from 'confetti-js';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-golden-ticket',
  templateUrl: './golden-ticket.component.html'
})
export class GoldenTicketComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit {

  isPremiado = false;
  showPremio = false;

  loop = 'stop';

  tarjetasSolicitadas = 0;
  boletosRecibidos = 0;
  premio: any;
  giveaway: any;
  estadisticas: any;
  ganador: any;

  videoUrl = 'https://heybanco.s3.amazonaws.com/assets/videos/slot-machine-boleto-dorado-no.mp4';

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayService: GiveawayGoldenTicketService,
    private metaTagsService : MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngAfterViewInit(): void {

    this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
      this.getPremio();
    });

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      direcion: [null, Validators.required],
      colonia: [null, Validators.required],
      ciudad: [null, Validators.required],
      telefono: [null, Validators.required],
      cp: [null, Validators.required],
      horaEntrega: [null, Validators.required],
    });

    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Meses Sin Intereses en tus compras | Hey Banco');
    this.metaTagsService.setMetaDescription('Registra tus compras con Tarjeta Hey aquí y difiere de 3 a 6 Meses Sin Intereses tus compras arriba de $1,000 pesos.');
  }

  async getPremio(recaptcha?: any) {
    const validadCaptcha = await this.validarCaptcha('PREMIO', recaptcha);
    if (validadCaptcha) {
      this.busy = true;
      this.giveawayService.consultarPremio(this.codigo, recaptcha, this.host).subscribe( response => {
        this.contador = response.numeroGanadores;
        this.busy = false;

        if (response.premio !== undefined && response.premio !== null) {
          // this.videoUrl = 'https://heybanco.s3.amazonaws.com/assets/videos/slot-machine-boleto-dorado.mp4';
          this.ganador = response;
          this.giveaway = response.giveaway;
          this.premio = response.premio;

          this.form.reset();
          this.isPremiado = true;
          this.verPremio();
        }

      }, err =>  {
        this.busy = false;
      });
    }
  }

  verPremio() {
    if (!this.ganador.envioDomicilio) {
      // enviar datos de que se realizo el canje
      this.submitRequest();
    }
  }

  async submitRequest(recaptcha?: any) {
    const validadCaptcha = await this.validarCaptcha('ALTA', recaptcha);
    if (validadCaptcha) {

      if (this.ganador.envioDomicilio) {
        const form = this.form.value;
        this.ganador.domicilio = {
          domicilio: `${form.direcion}, ${form.colonia}`,
          ciudad: form.ciudad,
          cp: form.cp,
          horaEntrega: form.horaEntrega,
        };
        this.ganador.telefonoGanador = form.telefono;
      }

      this.busy = true;
      this.giveawayService.canjearPremio(this.ganador, recaptcha, this.host).subscribe( response =>  {
        this.busy = false;

        if (this.ganador.envioDomicilio) {
          this.confirmModalService.showModal({
            title: 'Confirmación de envío',
            message: 'Tus datos se han registrado con éxito, revisa tu correo para darle seguimiento a tu premio.'
          });
        }
      }, err => {
        this.busy = false;
      });
    }
  }

  clickEventRule() {
    this.loop = 'loop';
    setTimeout(() => {
      if (this.isPremiado) {
        this.loop = 'stop-ganador';

        setTimeout(() => {
          this.showConfeti();
          this.showPremio = true;
        }, 500);

      } else {
        this.loop = 'stop';
        setTimeout(() => {
          this.showModalNoGandor();
        }, 1200);
      }

    }, 2600);
  }

  showConfeti() {

    const confettiElement = document.getElementById('my-canvas');
    // 186, 150, 49
    const confettiSettings = {'target': confettiElement, 'max': '220', 'size': '1', 'animate': true, 'props': ['circle', 'square', 'triangle', 'line'], 'colors': [[186, 150, 49], [186, 150, 49], [186, 150, 49], [186, 150, 49]], 'clock': '30', 'rotate': true, 'start_from_edge': true, 'respawn': true};
    //const confetti = new ConfettiGenerator(confettiSettings);
    //confetti.render();
  }

  showModalNoGandor() {
    this.confirmModalService.showModal({
      message:
      `¡El Boleto Dorado aún puede ser tuyo!</br></br>
      Mantén tu estatus Hey Pro, disfruta de los beneficios y obtén una nueva oportunidad donde podrás ser acreedor a uno de los incentivos del próximo mes.
      `,
      hiddenCancel: true,
    });
  }

}
