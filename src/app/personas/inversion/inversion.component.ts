import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieServices } from '../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-inversion',
  templateUrl: './inversion.component.html'
})
export class InversionComponent implements OnInit {
  cookie: string;

  public inversionForm: FormGroup;
  environment = environment;

  constructor(private formBuilder: FormBuilder, private _cookieService: CookieServices, private title: Title, private meta: Meta) {
    this.cookie = this._cookieService.galletota;
  }

  ngOnInit() {

    this.title.setTitle('Inversión Hey te da una tasa del 8.00%');
    this.meta.updateTag({ name: 'description', content: '¡Invierte tu dinero en minutos! Contrata y administra tu pagaré desde tu app Hey Banco y disfruta de las mejores tasas del mercado.'});

    this.inversionForm = this.formBuilder.group({
      inversionMeta: new FormControl(5000, [Validators.max(3000000), Validators.min(5000)]),
      inversionPlazo: new FormControl(0, Validators.required)
    });
  }

  get metaInvalid() {
    return this.inversionForm.get('inversionMeta').invalid && this.inversionForm.get('inversionMeta').touched;
  }

  get inversionPlazo() {
    return this.inversionForm.get('inversionPlazo').value;
  }

  calculaInversion() {
    return this.inversionForm.get('inversionMeta').value + this.inversionForm.get('inversionMeta').value * 0.0800 / 360 * 7;
  }

  calculaReinversion6() {
    return this.inversionForm.get('inversionMeta').value + this.inversionForm.get('inversionMeta').value * 0.0800 / 360 * 180;
  }

  calculaReinversion12() {
    return this.inversionForm.get('inversionMeta').value + this.inversionForm.get('inversionMeta').value * 0.0800 / 360 * 360;
  }

  calculaRendimiento() {
    return this.inversionForm.get('inversionMeta').value * 0.0800 / 360 * 7;
  }

  calculaRendimiento6() {
    return this.inversionForm.get('inversionMeta').value * 0.0800 / 360 * 180;
  }

  calculaRendimiento12() {
    return this.inversionForm.get('inversionMeta').value * 0.0800 / 360 * 360;
  }

  calculaRendimientoOtrobanco() {
    return this.inversionForm.get('inversionMeta').value * 0.006 / 360 * 7;
  }
}
