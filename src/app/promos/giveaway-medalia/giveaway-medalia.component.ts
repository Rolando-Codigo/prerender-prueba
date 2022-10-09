import { Component, OnInit, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { ActivatedRoute } from '@angular/router';
import { GiveawayParticipacionNominaService } from 'src/app/services/giveaway-participacion-nomina.service';
import { PromocionalGeneralComponent } from '../promocional-general';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-medalia',
  templateUrl: './giveaway-medalia.component.html',
  styleUrls: ['./giveaway-medalia.component.css']
})
export class GiveawayMedaliaComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit {

  environment = environment;
  RECAPTCHA_KEY: any;
  host: string = '';
  public codigo: string = '';
  public type = 'ALTA';
  busy = false;
  public folio = '0';
  contador = 0;
  rangoGiveaway: any;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  constructor(
    public formBuilder: FormBuilder,
    public confirmModalService: ConfirmModalService,
    public route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionNominaService,
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
    this.metaTagsService.setTitle('Genera tu folio y obtén un iPhone 13 con Hey');
    this.metaTagsService.setMetaDescription('Registra tu interés por participar, genera un código y se uno de los elegidos para ganarte un iPhone 13 gracias al buen uso de tu Tarjeta Hey.');
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
      this.busy = false;
      await this.recaptchaComponent.execute();
      return;
    }
    // enviar la solicitud
    this.giveawayService.altaClaveGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
        this.folio = response.numeroClick.toString();
      this.getContador();
      this.confirmModalService.showModal({
        title: '¡Tu registro se realizó con éxito!',
        message: 'Tus numero de folio es: <br> ' + this.folio + '. <br> Revisa tu correo para conocer más información.'
      });

    }, (error) => {
      this.busy = false;
      this.confirmModalService.showModal({
        title: '¡Ocurrio un problema!',
        message: error.message
      });
    });

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
      this.contador = response.contadorAux;
      this.busy = false;
    }, e => {
      this.busy = false;
    });
  }

}
