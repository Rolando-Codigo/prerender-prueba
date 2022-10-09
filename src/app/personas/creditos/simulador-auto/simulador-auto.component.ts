import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { subscribeOn } from 'rxjs/operators';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { SimuladorAutoService } from 'src/app/services/simulador-auto.service';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-simulador-auto',
  templateUrl: './simulador-auto.component.html'
})
export class SimuladorAutoComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private simuladorAutoService: SimuladorAutoService,
    private confirmModalService: ConfirmModalService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) { }
  RECAPTCHA_KEY;
  host: string;

  public STATIC = SimuladorAutoComponent;
  environment = environment;
  public infoSimuladorForm: FormGroup;
  public infoPersonalForm: FormGroup;
  busy = false;
  recaptcha;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  selectedIndex = 0;
  enganche = 0;
  value = 0;

  tazaAnual = 0.1125;
  pagosXAnio = 12;
  e = 0.08333;
  mensualidad = '0';
  seguroTotal = 0;

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.host = window.location.hostname;
    }
    if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
      this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
    } else {
      this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
    }

    this.initInfoSimuladorForm();
    this.initInfoPersonaForm();
  }

  initInfoSimuladorForm() {
    this.infoSimuladorForm = this.formBuilder.group({
      costo: ['', Validators.required ],
      enganche: [10, Validators.required ],
      plazo: [12],
      seguro: ['', Validators.required ],
      avisoPrivacidad: [false, Validators.required ],
    });

    this.infoSimuladorForm.statusChanges.subscribe(
      result => {
        const infoSimulador = this.infoSimuladorForm.value;

        const plazo = infoSimulador.plazo;
        let costo: string = infoSimulador.costo;
        if (costo === undefined) {
          this.mensualidad = '0';
          return;
        }

        costo = costo.replace(',', '');
        let prestamoTotal = parseFloat(costo) || 0;

        // tomar en cuenta el gasto del seguro si es financiado
        console.log(infoSimulador.seguro);
        if (infoSimulador.seguro === 'Financiado') {
          this.seguroTotal = 12000;
          prestamoTotal += this.seguroTotal;
        } else {
          this.seguroTotal = 0;
        }

        if (infoSimulador.plazo > 0 && prestamoTotal > 0) {
          this.enganche = Math.floor(parseFloat(costo) * infoSimulador.enganche ) / 100;
          prestamoTotal -= this.enganche;
        }

        const interesEquivalente = ( Math.pow( Math.pow( (1 + (this.tazaAnual / this.pagosXAnio)), this.pagosXAnio), this.e) - 1 ) * 1.16;

        const r1 = Math.pow((1 + interesEquivalente), plazo);
        const d1 = interesEquivalente * r1 * prestamoTotal;
        const d2 = r1 - 1;
        this.mensualidad = (d1 / d2).toFixed(2);
      });
  }

  initInfoPersonaForm() {
    this.infoPersonalForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required ],
      telefono: ['', Validators.required ],
      estado: [
        {
          value: 'Nuevo León',
          disabled: true,
        },
        Validators.required
      ],
      ciudad: ['', Validators.required ],
      regimenFiscal: ['', Validators.required ],
      correo: ['', Validators.required ],
      gastosMensuales: ['', Validators.required ],
      sueldoNeto: ['', Validators.required ],
      aniosEnDomicilio: ['', Validators.required ],
      aniosEnTrabajo: ['', Validators.required ],
    });
  }

  labelFn(value: number): string {
    return value !== 0 ? `${value}%` : '';
  }

  selectPlazo(plazo: number) {
    this.infoSimuladorForm.patchValue({
      plazo: plazo,
    });
  }

  formtatearFormularios() {
    this.initInfoSimuladorForm();
    this.initInfoPersonaForm();
    this.selectedIndex = 0;
    this.mensualidad = '0.0';
    this.enganche = 0;
  }

  changeSection(val: StepperSelectionEvent) {
    this.selectedIndex = val.selectedIndex;
  }

  solicitarContacto() {
    // TODO enviar correo a asesor

    if (this.recaptcha == null) {
      this.busy = false;
      this.recaptchaComponent.execute();
      return;
    }

    const infoCredit = this.infoSimuladorForm.value;
    const infoClient = this.infoPersonalForm.value;

    const simuladorModel = {
      costo: infoCredit.costo,
      enganche: infoCredit.enganche,
      plazo: infoCredit.plazo,
      mensualidad: this.mensualidad,

      nombreCompleto: infoClient.nombreCompleto,
      correo: infoClient.correo,
      telefono: infoClient.telefono,
    };

    // enviar correo
    this.simuladorAutoService.solicitarSeguimiento(simuladorModel, this.recaptcha, this.host).subscribe( resolve => {

      this.confirmModalService.showModal({
        title: 'Gracias por utilizar el simulador de Crédito de Auto Hey',
        message: 'Pronto un asesor se pondra en contancto contigo.'
      });

    }, error =>  {
      console.log('Error', error);
    });

  }

  validarAcreditado() {
    const creditoForm = this.infoSimuladorForm.value;
    const personalInfoForm = this.infoPersonalForm.value;

    let sueldoNeto = personalInfoForm.sueldoNeto;
    let gastosMensuales = personalInfoForm.gastosMensuales;
    let costo = creditoForm.costo;

    sueldoNeto = sueldoNeto.replace(',', '');
    const newSueldoNeto = parseFloat(sueldoNeto) || 0;

    gastosMensuales = gastosMensuales.replace(',', '');
    const newGastosMensuales = parseFloat(gastosMensuales) || 0;


    costo = costo.replace(',', '');
    const prestamoTotal = parseFloat(costo) || 0;


    // validar llenado de formularios
    if ( prestamoTotal <= 0
        || creditoForm.seguro === ''
        || newSueldoNeto <= 0
        || newGastosMensuales <= 0
        || personalInfoForm.regimenFiscal === '' ) {
      return false;
    }
    const capacidadPago = (newSueldoNeto * personalInfoForm.regimenFiscal) - newGastosMensuales;

    return (
      capacidadPago > 0
      && personalInfoForm.aniosEnDomicilio === 2
      && personalInfoForm.aniosEnTrabajo === 2
      );
  }

  calcularCat() {
    let seguro;
    let flujoEfectivo;
    let comisionApertura;
    const plazo = this.infoSimuladorForm.value.plazo;
    let prestamoTotal = this.removeComma(this.infoSimuladorForm.value.costo);
    const esContado = this.infoSimuladorForm.value.seguro === 'Contado';

    if (this.selectedIndex > 0 && prestamoTotal > 0 ) {

      if (esContado) {
        this.seguroTotal = 0;
        comisionApertura = prestamoTotal * 0.02; // Tasa del 2% fija
        // tslint:disable-next-line:max-line-length
        flujoEfectivo = ((prestamoTotal *  (this.tazaAnual / 12) * Math.pow( 1 + (this.tazaAnual / 12), plazo)) / (Math.pow(1 + (this.tazaAnual / 12), plazo) - 1));
        prestamoTotal = prestamoTotal - comisionApertura - this.seguroTotal;
        seguro = this.seguroTotal;
      } else {
        seguro = ( this.seguroTotal * (this.tazaAnual / 12)) / (1 - Math.pow(1 + this.tazaAnual / 12, -12) );
        // tslint:disable-next-line:max-line-length
        flujoEfectivo  = ((prestamoTotal * (this.tazaAnual / 12) * Math.pow(1 + (this.tazaAnual / 12), plazo)) / (Math.pow(1 + (this.tazaAnual / 12), plazo) - 1) + seguro);
        comisionApertura = (prestamoTotal + this.seguroTotal ) * 0.02; // Tasa del 2% fija
        prestamoTotal = prestamoTotal - comisionApertura;
      }

      const valorCAT = (Math.pow(1 + this.calcularTIR(prestamoTotal, flujoEfectivo, plazo, esContado, seguro), 12) - 1);
      return (valorCAT * 100).toFixed(2);
    } else {
      return 0;
    }
  }

  calcularTIR(lineaCredito, pagoFijo, plazo, esContado, seguroAnual) {
    let valorActualNeto = 0;
    let valorTIR = 0.00001;
    let flujoEfectivo;

    do {
      if (valorActualNeto >= 0.0000) {
        valorTIR += 0.00001;
      }
      valorActualNeto = 0;
      for (let i = 1; i <= plazo; i++) {
        flujoEfectivo = pagoFijo;
        if (esContado  && i > 1 && (i - 1) % 12 === 0) {
        flujoEfectivo += seguroAnual;
        }
        valorActualNeto += ((flujoEfectivo) / Math.pow(1 + valorTIR, i));
      }
      valorActualNeto -= lineaCredito;
    } while (valorActualNeto >= 0.00000);

    return valorTIR;
  }


  resolveCaptcha(recaptcha?: string) {
    console.log('resolveCaptcha');
    if (recaptcha == null) {
      this.busy = false;
      this.recaptchaComponent.execute();
      return;
    } else {
      this.recaptcha = recaptcha;
    }
  }

  removeComma(val): number {

    const numbet = val.replace(',', '');
    return  parseFloat(numbet) || 0;
  }


}
