import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { environment } from '../../../environments/environment';
import { PromocionalGeneralComponent } from '../promocional-general';
import { GiveawayParticipacionNominaService } from 'src/app/services/giveaway-participacion-nomina.service';
import { GiveawayCatarService } from 'src/app/services/giveaway-catar.service';

import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-catar-interes',
  templateUrl: './giveaway-catar-interes.component.html',
  styleUrls: ['./giveaway-catar-interes.component.css']
})
export class GiveawayCatarInteresComponent extends PromocionalGeneralComponent implements OnInit {

  RECAPTCHA_KEY: any;
  host: string = '';
  environment = environment;

  constructor(
    public formBuilder: FormBuilder,
    public confirmModalService: ConfirmModalService,
    private giveawayCatarService: GiveawayCatarService,
    public route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionNominaService,
    private metaTagsService : MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngOnInit(): void {
    this.initCodigo();
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('¡Hey te lleva a la Copa Mundial de la Fifa Catar 2022!');
    this.metaTagsService.setMetaDescription('Al ser Cliente Hey Pro durante los meses de julio, agosto y septiembre tienes la oportunidad de participar para obtener tu lugar en la copa.');
  }

  async submitRequest(recaptcha?: string) {
    console.log('Busy: ' + this.busy);
    if (this.busy) {
      return;
    }

    this.busy = true;
    if (recaptcha == null) {
      this.type = 'ALTA';
      this.busy = false;
      await this.recaptchaComponent.execute();
      return;
    }
    // enviar la solicitud
    this.giveawayCatarService.getFolios(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
      if(response instanceof Array) {

        console.log("folio: " + this.folio);
        this.folio = response.map( it => it.numeroClick ).toString();
        // this.getContador();
        if (this.folio == '0'){
        this.confirmModalService.showModal({
          title: '¡Tu registro se realizó con éxito!',
          message: 'Tus número de folio es: <br> ' + this.folio + '. <br> Revisa tu correo para conocer más información.'
        });
        }
        else
        {

        console.log("opcion2");
          this.confirmModalService.showModal({
            title: '¡Tu registro ya se realizó anteriormente!',
            message: '<br> Revisa tu correo para conocer más información.'
          });
        }
      }

    }, (error) => {
      this.busy = false;
      this.confirmModalService.showModal({
        title: '¡Ocurrio un problema!',
        message: error.message
      });
    });

  }

}
