import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ahorro',
  templateUrl: './ahorro-hey.component.html'
})
export class AhorroComponent implements OnInit {

  environment = environment;
  cookie: string;

  public ahorroForm: FormGroup;

  public ahorroSubscription: Subscription;
  public plazoSubscription: Subscription;

  public plazo = 1;

  constructor(private formBuilder: FormBuilder, private _cookieService: CookieServices, private title: Title, private meta: Meta) {

  }

  get ahorroMeta() {
    return this.ahorroForm.get('ahorroMeta').value;
  }

  get ahorroPlazo() {
    return this.ahorroForm.get('ahorroPlazo').value;
  }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Ahorro | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Tu dinero siempre esta disponible, retira la cifra que quieras, cuando lo necesites.'});

    this.ahorroForm = this.formBuilder.group({
      ahorroMeta: new FormControl('0', Validators.required),
      ahorroPlazo: new FormControl('semanal', Validators.required)
    });

    this.ahorroSubscription = this.ahorroForm.get('ahorroMeta').valueChanges.subscribe(val => {});

    this.plazoSubscription = this.ahorroForm.get('ahorroPlazo').valueChanges.subscribe(val => {});
  }

  updateSetting(event) {
    this.plazo = event.value;
  }

  formatLabel(value: number) {
    return value;
  }

  calculaAhorro() {
    return this.ahorroForm.get('ahorroMeta').value / this.plazo;
  }

  calculaRendimiento() {
    return this.ahorroForm.get('ahorroMeta').value * 0.0400 / 360 * 30;
  }

  calculaRendimientoOtrobanco() {
    return this.ahorroForm.get('ahorroMeta').value * 0.0217 / 360 * 30;
  }
}
