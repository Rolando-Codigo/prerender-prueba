import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { PromocionalGeneralComponent } from 'src/app/promos/promocional-general';
import { GiveawayParticipacionReferidosService } from 'src/app/services/giveaway-participacion-referidos.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-participacion-referidos-hey',
  templateUrl: './giveaway-participacion-referidos-hey.component.html',
  styleUrls: ['./giveaway-participacion-referidos-hey.component.css']
})
export class GiveawayParticipacionReferidosHeyComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit {

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionReferidosService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngOnInit(): void {
    this.initCodigo();
  }

  ngAfterViewInit() {
    this.getContador();
  }

  async submitRequest(recaptcha?: string) {
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

  async getContador(recaptcha?: string) {
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
