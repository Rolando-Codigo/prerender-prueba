import { Component, OnInit, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { RecaptchaComponent } from 'ng-recaptcha';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComercioService } from 'src/app/services/comercio.service';
import { ComercioModel } from 'src/app/models/persona/comercio/comercio.model';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-conoce-comercios',
  templateUrl: './conoce-comercios.component.html',
  styleUrls: ['./conoce-comercios.component.css']
})
export class ConoceComerciosComponent implements OnInit, AfterViewInit {

  environment = environment;
  form: FormGroup;
  comercios: ComercioModel[];
  coloniasfiltro: any;
  comerciosfiltro: any;
  filtro: any;
  listadoComercio: any;
  busqueda: boolean;
  RECAPTCHA_KEY;
  host: string;
  busy = false;
  type = 'CONTADOR';

  constructor(
    private _formBuilder: FormBuilder,
    private comercioService: ComercioService,
    private metaTagsService: MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    this.busqueda = false;


    if (isPlatformBrowser(this.platformId)) {
      this.host = window.location.hostname; 
    }
    this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';

    this.form = this._formBuilder.group({
      estado: [null, ],
      colonia: [null, ],
      comercio: [null, ],
      palabraClave: [null, ]
    });
  }

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Paga más seguro con Terminal Hey');
    this.metaTagsService.setMetaDescription('Conoce los comercios más cercanos a ti con terminal Hey o Banregio y paga de forma fácil y segura.');
  }

  ngAfterViewInit() {
    this.getCatalogos();
  }

  public participar(type: string, recaptcha?: string) {
    if (type === 'ESTADO') {
      this.changeEstado(recaptcha);
      return;
    }

    if (type === 'COLONIA') {
      this.changeColonia(recaptcha);
      return;
    }

    if (type === 'PALABRA') {
      this.submitRequest(recaptcha);
      return;
    }

    if (type === 'CONTADOR') {
      this.getCatalogos(recaptcha);
      return;
    }

  }

  async changeEstado(recaptcha?: string) {
    this.busqueda = false;
    this.busy = true;
    if (recaptcha == null) {
      this.type = 'ESTADO';
      this.busy = false;
      await this.recaptchaComponent.execute();
      return;
    }
    this.form.setValue({
      estado: this.form.get('estado').value,
      colonia: null,
      comercio: null,
      palabraClave: null
    });


    this.comercioService.obtenerComercioEstados(this.form.get('estado').value, recaptcha, this.host).subscribe(response => {
      this.comercios = response;
      this.comerciosfiltro = null;
      this.coloniasfiltro = response.reduce((acc, direccion) => {
        acc[direccion.direccion.colonia] = ++acc[direccion.direccion.colonia] || 0;
        return acc;
      }, {});
      this.listadoComercio = this.comercios;
      this.busy = false;
    },
    error => {
      this.busy = false;
    }
    );
  }

  async changeColonia(recaptcha?: string) {
    this.busqueda = false;
    this.busy = true;
    if (recaptcha == null) {
      this.type = 'COLONIA';
      this.busy = false;
      await this.recaptchaComponent.execute();
      return;
    }


    this.comercioService.obtenerComercioColonia(this.form.get('estado').value, this.form.get('colonia').value,
    recaptcha, this.host).subscribe(response => {
      this.comercios = response;
      this.comerciosfiltro = response.reduce((acc, comercio) => {
        acc[comercio.nombre] = ++acc[comercio.nombre] || 0;
        return acc;
      }, {});
      this.listadoComercio = this.comercios;
      this.busy = false;
    },
    error => {
      this.busy = false;
    }
    );
  }

  changeComercio(valor: string) {
    this.busqueda = false;
    this.listadoComercio = this.comercios.filter(comercio => comercio.nombre = valor);
  }

  changePalabra() {
    this.form.setValue({
      estado: null,
      colonia: null,
      comercio: null,
      palabraClave: null
    });
    this.listadoComercio = null;
    this.coloniasfiltro = null;
    this.comerciosfiltro = null;
    this.busqueda = false;
  }

  async submitRequest(recaptcha?: string) {
    if (this.form.get('palabraClave').value != null) {

      this.busy = true;
      if (recaptcha == null) {
        this.type = 'PALABRA';
        this.busy = false;
        await this.recaptchaComponent.execute();
        return;
      }

      this.comercioService.obtenerComercioPalabra(this.form.get('palabraClave').value, recaptcha, this.host).subscribe(response => {
        this.filtro = response;
        this.listadoComercio = response;
        this.busqueda = true;
        this.busy = false;
      });
    } else {
      this.busqueda = true;
    }

  }

  getCatalogos(recaptcha?: string) {
    if (this.busy) {
      return;
    }
    this.busy = true;
    if (recaptcha == null) {
      this.busy = false;
      this.type = 'CONTADOR';
      this.recaptchaComponent.execute();
      return;
    } else {
      this.busy = false;
    }
  }

}
