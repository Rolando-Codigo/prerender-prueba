import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { PromocionalGeneralComponent } from '../promocional-general';
import { FormBuilder } from '@angular/forms';
import { ConfirmModalService } from '../../components/confirm-modal/confirm-modal.service';
import { ActivatedRoute } from '@angular/router';
import { GiveawayParticipacionReferidosService } from 'src/app/services/giveaway-participacion-referidos.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-promocional-tranferencia-saldos',
  templateUrl: './promocional-tranferencia-saldos.component.html',
  styleUrls: ['./promocional-tranferencia-saldos.component.css']
})
export class PromocionalTranferenciaSaldosComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit {

  fecha: any;
  ajuste: boolean;

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionReferidosService,
    private metaTagsService : MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
    this.fecha = new Date();
    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
    } else {
      this.ajuste = false;
    }
  }

  ngOnInit(): void {
    this.initCodigo();
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Giveaway Transfiere tu deuda a Hey Banco');
    this.metaTagsService.setMetaDescription('Transfiere tu deuda de otros bancos con nosotros y registra tu interés para participar en nuestro Giveaway.');
  }

  ngAfterViewInit() {
    this.getContador();
  }

  async submitRequest(recaptcha?: any) {
    const validadCaptcha = await this.validarCaptcha('ALTA', recaptcha);
    if (validadCaptcha) {
      // enviar la solicitud
      this.giveawayService.altaClaveGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
        this.confirmModalService.showModal({
          title: '¡Tu registro se realizó con éxito!',
          message: 'Revisa tu correo para conocer más información.'
        });
        this.busy = false;
        this.folio = response.numeroClick.toString();
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
      this.giveawayService.contadorGiveaway(this.codigo, recaptcha, this.host).subscribe( response => {
        this.contador = response.contadorAux;
        this.rangoGiveaway = response.rango;
        this.busy = false;
      });
    }
  }

}
