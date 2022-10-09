import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayParticipacionNominaService } from 'src/app/services/giveaway-participacion-nomina.service';
import { GiveawayParticipacionReembolsoService } from 'src/app/services/giveaway-participacion-reembolso.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PromocionalGeneralComponent } from '../promocional-general';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-difiere-compras-hey-pro',
  templateUrl: './difiere-compras-hey-pro.component.html',
  styleUrls: ['./difiere-compras-hey-pro.component.css']
})
export class DifiereComprasHeyProComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit {

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  constructor(
    public formBuilder: FormBuilder,
    public confirmModalService: ConfirmModalService,
    public route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionNominaService,
    private giveawayParticipacionReembolsoService: GiveawayParticipacionReembolsoService,
    private metaTagsService : MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngOnInit(): void {
    this.initCodigo();

    this.form = this.formBuilder.group({
      rfc: ['' ],
      numeroCuenta: [null, [Validators.required, Validators.maxLength(12)]],
      comercio: [null, [Validators.required]],
      monto: [null, [Validators.required]],
      fechaHoraCompra: [null, [Validators.required]],
      plazo: [null, [Validators.required]],
    });
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Difiere a 12 Meses Sin Intereses con Hey');
    this.metaTagsService.setMetaDescription('Paga con tu Tarjeta de Crédito Hey, registra tus compras desde $500.00 aquí y obtén de 3 hasta 12 Meses sin Intereses.');
  }

  ngAfterViewInit() {
    this.getContador();
  }

  async submitRequest(recaptcha?: string) {

    if (this.busy) {
      return;
    }

    this.busy = true;
    if (recaptcha == null) {
      this.type = 'ALTA';
      // console.log(this.type);
      this.busy = false;
      console.log('entre if recaptcha');
      await this.recaptchaComponent.execute();
      return;
    }
      if (this.form.valid) {
        // enviar participacion
        const formParticipacion = this.form.value;
        formParticipacion.rango = this.rangoGiveaway;
        formParticipacion.fechaHora = new Date();
        formParticipacion.fechaHoraCompra = new Date(formParticipacion.fechaHoraCompra);
        formParticipacion.tipoCompra = '';
        formParticipacion.codigo = this.codigo;
        formParticipacion.rfc = formParticipacion.rfc.toUpperCase();

        this.giveawayParticipacionReembolsoService.alta(formParticipacion, recaptcha, this.host).subscribe( response => {
          this.confirmModalService.showModal({
            title: '¡Tu registro se realizó con éxito!',
            message: 'Revisa tu correo para conocer más información.'
          });
          this.busy = false;
          // this.getContador();
          this.form.reset();
        }, (error) => {
          this.busy = false;
          const message = 'Error en la alta de participación.';
          /*if (error.message === '¡Conviértete en Hey Pro y participa!') {
              message = 'Realiza 6 compras durante el mes con tu cuenta verificada para participar el próximo mes.';
          }*/
          this.confirmModalService.showModal({
            title: message,
            message: error.message
          });
        });
      }
  }

  async getContador(recaptcha?: string) {
    if (this.busy) {
      return;
    }
    this.busy = true;
    if (recaptcha == null) {
      this.busy = false;
      this.type = 'CONTADOR';
      this.recaptchaComponent.execute();
      return;
    }

    this.giveawayService.contadorGiveaway(this.codigo, recaptcha, this.host).subscribe( response => {
      this.rangoGiveaway = response.rango;
      this.busy = false;
    }, e => this.busy = false);
  }

}
