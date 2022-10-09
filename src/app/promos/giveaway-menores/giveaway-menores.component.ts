import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PromocionalGeneralComponent } from 'src/app/promos/promocional-general';
import { FormBuilder } from '@angular/forms';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { ActivatedRoute } from '@angular/router';
import { GiveawayParticipacionNominaService } from 'src/app/services/giveaway-participacion-nomina.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-menores',
  templateUrl: './giveaway-menores.component.html',
  styleUrls: ['./giveaway-menores.component.css']
})
export class GiveawayMenoresComponent extends PromocionalGeneralComponent implements OnInit {

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionNominaService,
    @Inject(PLATFORM_ID) public platformId: Object) {
       super(formBuilder, confirmModalService, route, platformId); }

  ngOnInit(): void {
    this.initCodigo();
    console.log('submitRequest');
  }

  async submitRequest(recaptcha?: string) {
    const validadCaptcha = await this.validarCaptcha('ALTA', recaptcha);
    if (validadCaptcha) {
      this.busy = true;
      // enviar la solicitud
      this.giveawayService.altaMultiplesClaveGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
        this.busy = false;
        if (response.length > 0) {
          this.folio = response.map( it => {
            return it.numeroClick;
          }).toString();
        }
        this.getContador();
        this.confirmModalService.showModal({
          title: '¡Tu registro se realizó con éxito!',
          message: 'Tus numeros de folio son: <br> ' + this.folio + '. <br> Revisa tu correo para conocer más información.'
        });

      }, (error) => {
        this.busy = false;
        this.confirmModalService.showModal({
          title: '¡Ocurrio un problema!',
          message: error.message
        });
      });
    }
  }
}
