import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestModel } from '../../models/test.model';
import { Subscription } from 'rxjs';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ChangeDetectorRef } from '@angular/core'; 
import { RecaptchaComponent } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { TestFinancieroService } from 'src/app/services/test-financiero.service';
import { ConfirmModalService } from '../../components/confirm-modal/confirm-modal.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-test',
  templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {

  environment = environment;
  cookie: string;
  RECAPTCHA_KEY;
  host: string;
  fecha: any;
  ajuste: boolean;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public ingresosForm: FormGroup;
  public gastosFijosForm: FormGroup;
  public gastosVariablesForm: FormGroup;
  public gastosHospitalizacionForm: FormGroup;
  public gastosContingenciaForm: FormGroup;
  public gastosDeudasForm: FormGroup;
  public gastosAforeForm: FormGroup;
  public retiroForm: FormGroup;
  public envioForm: FormGroup;
  public captchaForm: FormGroup;

  public nombreSubscription: Subscription;
  public viviendaSubscription: Subscription;
  public educacionSubscription: Subscription;
  public serviciosSubscription: Subscription;
  public transporteSubscription: Subscription;
  public personalSubscription: Subscription;
  public entretenimientoSubscription: Subscription;
  public ocasionalSubscription: Subscription;
  public ahorroSubscription: Subscription;
  public hospitalizacionSubscription: Subscription;
  public contingenciaSubscription: Subscription;
  public deudasSubscription: Subscription;
  public aforeSubscription: Subscription;
  public pensionSubscription: Subscription;
  public edadSubscription: Subscription;
  public retiroSubscription: Subscription;

  public testModel: TestModel = new TestModel();
  public siteKey: string;
 
  public canvas: any;
  public ctx: any;

  public _ids: any;

  asesorView = false;

  puntosHeyList = [];
  asesoresHeyList = [];

  constructor(
    private router: Router,
    private _cookieService: CookieServices,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private reCaptchaV3Service: ReCaptchaV3Service,
    private cdr: ChangeDetectorRef,
    private testFinanciero: TestFinancieroService,
    private confirmModalService: ConfirmModalService,
    ) {
      this.fecha = new Date();
  }

  get ingresoNombre() {
    return this.ingresosForm.get('ingresoNombre').value;
  }

  get ingresoMensual() {
    return this.ingresosForm.get('ingresoMensual').value;
  }

  get gastoVivienda() {
    return this.gastosFijosForm.get('gastoVivienda').value;
  }

  get gastoEducacion() {
    return this.gastosFijosForm.get('gastoEducacion').value;
  }

  get gastoServicios() {
    return this.gastosFijosForm.get('gastoServicios').value;
  }

  get gastoTransporte() {
    return this.gastosFijosForm.get('gastoTransporte').value;
  }

  get gastoPersonal() {
    return this.gastosFijosForm.get('gastoPersonal').value;
  }

  get gastoEntretenimiento() {
    return this.gastosVariablesForm.get('gastoEntretenimiento').value;
  }

  get gastoOcasional() {
    return this.gastosVariablesForm.get('gastoOcasional').value;
  }

  get gastoAhorro() {
    return this.gastosVariablesForm.get('gastoAhorro').value;
  }

  get gastoHospitalizacion() {
    return this.gastosHospitalizacionForm.get('gastoHospitalizacion').value;
  }

  get gastoContingencia() {
    return this.gastosContingenciaForm.get('gastoContingencia').value;
  }

  get gastoDeudas() {
    return this.gastosDeudasForm.get('gastoDeudas').value;
  }

  get gastoAfore() {
    return this.gastosAforeForm.get('gastoAfore').value;
  }

  get retiroPension() {
    return this.retiroForm.get('retiroPension').value;
  }

  get retiroEdad() {
    return this.retiroForm.get('retiroEdad').value;
  }

  get retiroAhorro() {
    return this.retiroForm.get('retiroAhorro').value;
  }

  ngOnInit() { 
      this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV'; 

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
      // console.log('SI, ' + this.ajuste);
    } else {
      this.ajuste = false;
      // console.log('NO, ' + this.ajuste);
    }
    this.cookie = this._cookieService.galletota;

    this.ingresosForm = this.formBuilder.group({
      ingresoNombre: ['', [Validators.required, Validators.minLength(5)]],
      ingresoMensual: new FormControl(0, Validators.required),
      ingresoCheck: new FormControl(false, Validators.requiredTrue)
    });

    this.gastosFijosForm = this.formBuilder.group({
      gastoVivienda: new FormControl(0, Validators.required),
      gastoTransporte: new FormControl(0, Validators.required),
      gastoEducacion: new FormControl(0, Validators.required),
      gastoPersonal: new FormControl(0, Validators.required),
      gastoServicios: new FormControl(0, Validators.required)
    });

    this.gastosVariablesForm = this.formBuilder.group({
      gastoEntretenimiento: new FormControl(0, Validators.required),
      gastoOcasional: new FormControl(0, Validators.required),
      gastoAhorro: new FormControl(0, Validators.required)
    });

    this.gastosHospitalizacionForm = this.formBuilder.group({
      gastoHospitalizacion: [null, Validators.required]
    });

    this.gastosContingenciaForm = this.formBuilder.group({
      gastoContingencia: new FormControl(null, Validators.required)
    });

    this.gastosDeudasForm = this.formBuilder.group({
      gastoDeudas: new FormControl(null, Validators.required)
    });

    this.gastosAforeForm = this.formBuilder.group({
      gastoAfore: new FormControl(null, Validators.required)
    });

    this.retiroForm = this.formBuilder.group({
      retiroPension: new FormControl(0, Validators.required),
      retiroEdad: new FormControl('0', Validators.required),
      retiroLaborados: new FormControl(0, Validators.required),
      retiroAhorro: new FormControl(0, Validators.required)
    });

    this.envioForm = this.formBuilder.group({
      envioCorreo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      atendidoSucursal: [null, ],
      puntoHey: [null, ],
      asesorHey: [null, ]
    });

    this.captchaForm = this.formBuilder.group({
      envioRecaptcha: ['', Validators.required]
    });

    this.nombreSubscription = this.ingresosForm.get('ingresoNombre').valueChanges.subscribe(val => {});
    this.viviendaSubscription = this.gastosFijosForm.get('gastoVivienda').valueChanges.subscribe(val => {});
    this.educacionSubscription = this.gastosFijosForm.get('gastoEducacion').valueChanges.subscribe(val => {});
    this.serviciosSubscription = this.gastosFijosForm.get('gastoServicios').valueChanges.subscribe(val => {});
    this.transporteSubscription = this.gastosFijosForm.get('gastoTransporte').valueChanges.subscribe(val => {});
    this.personalSubscription = this.gastosFijosForm.get('gastoPersonal').valueChanges.subscribe(val => {});
    this.entretenimientoSubscription = this.gastosVariablesForm.get('gastoEntretenimiento').valueChanges.subscribe(val => {});
    this.ocasionalSubscription = this.gastosVariablesForm.get('gastoOcasional').valueChanges.subscribe(val => {});
    this.ahorroSubscription = this.gastosVariablesForm.get('gastoAhorro').valueChanges.subscribe(val => {});
    this.hospitalizacionSubscription = this.gastosHospitalizacionForm.get('gastoHospitalizacion').valueChanges.subscribe(val => {});
    this.contingenciaSubscription = this.gastosContingenciaForm.get('gastoContingencia').valueChanges.subscribe(val => {});
    this.deudasSubscription = this.gastosDeudasForm.get('gastoDeudas').valueChanges.subscribe(val => {});
    this.aforeSubscription = this.gastosAforeForm.get('gastoAfore').valueChanges.subscribe(val => {});
    this.pensionSubscription = this.retiroForm.get('retiroPension').valueChanges.subscribe(val => {});
    this.edadSubscription = this.retiroForm.get('retiroEdad').valueChanges.subscribe(val => {});
    this.retiroSubscription = this.retiroForm.get('retiroAhorro').valueChanges.subscribe(val => {});


    this.asesorView = this.router.url === '/test-financiero/interno';
    this.testFinanciero.getPuntosHey().toPromise().then( response => {
      this.puntosHeyList = response;
    });
  }

  calculaGastos() {
    return (this.gastosFijosForm.get('gastoVivienda').value + this.gastosFijosForm.get('gastoEducacion').value + this.gastosFijosForm.get('gastoServicios').value + this.gastosFijosForm.get('gastoTransporte').value + this.gastosFijosForm.get('gastoPersonal').value + this.gastosVariablesForm.get('gastoEntretenimiento').value + this.gastosVariablesForm.get('gastoOcasional').value + this.gastosVariablesForm.get('gastoAhorro').value);
  }

  calculaRestante() {
    // tslint:disable-next-line:max-line-length
    return Math.round(this.ingresosForm.get('ingresoMensual').value - (this.gastosFijosForm.get('gastoVivienda').value + this.gastosFijosForm.get('gastoEducacion').value + this.gastosFijosForm.get('gastoServicios').value + this.gastosFijosForm.get('gastoTransporte').value + this.gastosFijosForm.get('gastoPersonal').value + this.gastosVariablesForm.get('gastoEntretenimiento').value + this.gastosVariablesForm.get('gastoOcasional').value + this.gastosVariablesForm.get('gastoAhorro').value));
  }

  public calculaPorcentajeTotal() {
    // tslint:disable-next-line:max-line-length
    const _porcentaje = Math.round((this.gastosFijosForm.get('gastoVivienda').value + this.gastosFijosForm.get('gastoEducacion').value + this.gastosFijosForm.get('gastoServicios').value + this.gastosFijosForm.get('gastoTransporte').value + this.gastosFijosForm.get('gastoPersonal').value + this.gastosVariablesForm.get('gastoEntretenimiento').value + this.gastosVariablesForm.get('gastoOcasional').value + this.gastosVariablesForm.get('gastoAhorro').value) * 100 / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.evaluacionTest = this.calculaRangoTotal(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoTotal(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 100) {
      _rango = 'Malo';
    } else if (numPorcentaje >= 88 && numPorcentaje <= 100) {
      _rango = 'Regular';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 87) {
      _rango = 'Excelente';
    }

    return _rango;
  }

  public calculaPorcentajeRestante() {
    // tslint:disable-next-line:max-line-length
    return Math.round((this.ingresosForm.get('ingresoMensual').value - (this.gastosFijosForm.get('gastoVivienda').value + this.gastosFijosForm.get('gastoEducacion').value + this.gastosFijosForm.get('gastoServicios').value + this.gastosFijosForm.get('gastoTransporte').value + this.gastosFijosForm.get('gastoPersonal').value + this.gastosVariablesForm.get('gastoEntretenimiento').value + this.gastosVariablesForm.get('gastoOcasional').value + this.gastosVariablesForm.get('gastoAhorro').value)) * 100 / this.ingresosForm.get('ingresoMensual').value);
  }

  public calculaPorcentajeVivienda() {
    const _porcentaje = Math.round((this.gastosFijosForm.get('gastoVivienda').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusVivienda = this.calculaRangoVivienda(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoVivienda(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 31) {
      _rango = '1';
    } else if (numPorcentaje >= 21 && numPorcentaje <= 30) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 20) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajeEducacion() {
    // tslint:disable-next-line:max-line-length
    const _porcentaje = Math.round((this.gastosFijosForm.get('gastoEducacion').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusEducacion = this.calculaRangoEducacion(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoEducacion(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 16) {
      _rango = '1';
    } else if (numPorcentaje >= 11 && numPorcentaje <= 15) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 10) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajeServicios() {
    // tslint:disable-next-line:max-line-length
    const _porcentaje = Math.round((this.gastosFijosForm.get('gastoServicios').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusServicios = this.calculaRangoServicios(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoServicios(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 11) {
      _rango = '1';
    } else if (numPorcentaje >= 6 && numPorcentaje <= 10) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 5) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajeTransporte() {
    // tslint:disable-next-line:max-line-length
    const _porcentaje = Math.round((this.gastosFijosForm.get('gastoTransporte').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusTransporte = this.calculaRangoTransporte(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoTransporte(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 11) {
      _rango = '1';
    } else if (numPorcentaje >= 6 && numPorcentaje <= 10) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 5) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajePersonal() {
    const _porcentaje = Math.round((this.gastosFijosForm.get('gastoPersonal').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusPersonales = this.calculaRangoPersonal(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoPersonal(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 31) {
      _rango = '1';
    } else if (numPorcentaje >= 16 && numPorcentaje <= 30) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 15) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajeEntretenimiento() {
    const _porcentaje = Math.round((this.gastosVariablesForm.get('gastoEntretenimiento').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusEntretenimiento = this.calculaRangoEntretenimiento(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoEntretenimiento(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 11) {
      _rango = '1';
    } else if (numPorcentaje >= 6 && numPorcentaje <= 10) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 5) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajeOcasional() {
    // tslint:disable-next-line:max-line-length
    const _porcentaje = Math.round((this.gastosVariablesForm.get('gastoOcasional').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusOcasional = this.calculaRangoOcasional(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoOcasional(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 8) {
      _rango = '1';
    } else if (numPorcentaje >= 5 && numPorcentaje <= 7) {
      _rango = '0';
    } else if (numPorcentaje >= 0 && numPorcentaje <= 4) {
      _rango = '2';
    }

    return _rango;
  }

  public calculaPorcentajeAhorro() {
    // tslint:disable-next-line:max-line-length
    const _porcentaje = Math.round((this.gastosVariablesForm.get('gastoAhorro').value * 100) / this.ingresosForm.get('ingresoMensual').value);

    this.testModel.estatusAhorro = this.calculaRangoAhorro(_porcentaje);

    return _porcentaje;
  }

  public calculaRangoAhorro(numPorcentaje) {
    let _rango: string;

    if (numPorcentaje >= 10) {
      _rango = '2';
    } else if (numPorcentaje >= 1 && numPorcentaje <= 9) {
      _rango = '0';
    } else if (numPorcentaje <= 0 && numPorcentaje <= 8) {
      _rango = '1';
    }

    return _rango;
  }

  public calculaPension() {
    // tslint:disable-next-line:max-line-length
    return Math.round((((((0.06500) * this.ingresosForm.get('ingresoMensual').value) * 12) * (65 - (this.retiroForm.get('retiroEdad').value - this.retiroForm.get('retiroLaborados').value))) + (5.42 * 11088)) / (10 * 12));
  }

  public calculaPensionDeseada() {
    // tslint:disable-next-line:max-line-length
    return Math.round(((((this.retiroForm.get('retiroPension').value * 10 * 12) - (((((0.06500) * this.ingresosForm.get('ingresoMensual').value) * 12) * (65 - (this.retiroForm.get('retiroEdad').value - this.retiroForm.get('retiroLaborados').value))) + (5.42 * 11088)))) - (this.retiroForm.get('retiroAhorro').value * 12 * ((65 - (this.retiroForm.get('retiroEdad').value - this.retiroForm.get('retiroLaborados').value))))) / ((65 - this.retiroForm.get('retiroEdad').value) * 12));
  }

  public calculaJubilacion() {
    return 65 - this.retiroForm.get('retiroEdad').value;
  }

  grafica() {
    // tslint:disable-next-line:max-line-length
    this._ids = [this.gastosFijosForm.get('gastoVivienda').value, this.gastosFijosForm.get('gastoEducacion').value, this.gastosFijosForm.get('gastoServicios').value, this.gastosFijosForm.get('gastoTransporte').value, this.gastosFijosForm.get('gastoPersonal').value, this.gastosVariablesForm.get('gastoEntretenimiento').value, this.gastosVariablesForm.get('gastoOcasional').value, this.gastosVariablesForm.get('gastoAhorro').value];

    this.canvas = document.getElementById('gastos');
    this.ctx = this.canvas.getContext('2d');
    // this.myChart = new Chart(this.ctx, {
    //   type: 'doughnut',
    //   data: {
    //     // tslint:disable-next-line:max-line-length
    //     labels: ['Vivienda', 'Educación', 'Servicios', 'Transporte', 'Gastos Personales', 'Entretenimiento', 'Gastos Ocasionales', 'Ahorro'],
    //     datasets: [{
    //       data: this._ids,
    //       backgroundColor: [
    //         '#70E7FE',
    //         '#BDFF40',
    //         '#F5E345',
    //         '#FFC888',
    //         '#B9B8FF',
    //         '#EA8DED',
    //         '#FFB9E1',
    //         '#97B6FD'
    //       ],
    //       borderWidth: 1,
    //       borderAlign: 'inner',
    //       weight: 1
    //     }]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     cutoutPercentage: 75,
    //   }
    // });
  }

  public submitRequest(recaptcha?: string) {

    if (recaptcha == null) {
      this.recaptchaComponent.execute();
      return;
    }

    this.testModel.ahorroVoluntario = this.retiroForm.get('retiroAhorro').value;
    this.testModel.ahorroVoluntarioNecesario = this.calculaPensionDeseada();
    this.testModel.captcha = recaptcha;
    this.testModel.host = this.host;
    this.testModel.celular = '0000000000';
    this.testModel.correo = this.envioForm.get('envioCorreo').value;
    this.testModel.edad = this.retiroForm.get('retiroEdad').value;
    this.testModel.estatusContingencia = this.gastosContingenciaForm.get('gastoContingencia').value;
    this.testModel.estatusDeudaRecom = this.gastosDeudasForm.get('gastoDeudas').value;
    this.testModel.estatusHospitalizacion = this.gastosHospitalizacionForm.get('gastoHospitalizacion').value;
    this.testModel.estatusResumenRetiro = this.gastosAforeForm.get('gastoAfore').value;
    this.testModel.estatusRetiro = this.gastosAforeForm.get('gastoAfore').value;
    this.testModel.gastoAhorro = this.gastosVariablesForm.get('gastoAhorro').value;
    this.testModel.gastoOcasional = this.gastosVariablesForm.get('gastoOcasional').value;
    this.testModel.gastoEducacion = this.gastosFijosForm.get('gastoEducacion').value;
    this.testModel.gastoEntretenimiento = this.gastosVariablesForm.get('gastoEntretenimiento').value;
    this.testModel.gastoPersonales = this.gastosFijosForm.get('gastoPersonal').value;
    this.testModel.gastoServicios = this.gastosFijosForm.get('gastoServicios').value;
    this.testModel.gastoTransporte = this.gastosFijosForm.get('gastoTransporte').value;
    this.testModel.gastoVivienda = this.gastosFijosForm.get('gastoVivienda').value;
    this.testModel.ingresoMensual = this.ingresosForm.get('ingresoMensual').value;
    this.testModel.nombreCompleto = this.ingresosForm.get('ingresoNombre').value;
    this.testModel.pensionActual = this.calculaPension();
    this.testModel.pensionDeseada = this.retiroForm.get('retiroPension').value;
    this.testModel.recomendacionContingencia = 'Vas bien, pero lo ideal es tener ahorrado al menos 6 meses de salario en caso de desempleo. Aún puedes ahorrar más.';
    this.testModel.recomendacionDeuda = 'Cada vez que adquieres más deuda, te arriegas más a perder tu patrimonio. Puedes pedir consejo para poner tus finanzas en orden.';
    this.testModel.gastoDeuda = 0;
    this.testModel.recomendacionHospitalizacion = 'Si mañana te hospitalizaran, ¿podrías pagar la cuenta del hospital? Mejor protégete con un seguro de gastos médicos.';
    this.testModel.recomendacionRetiro = 'Imagina 3 actividades que te gusta hacer; cuando te retires tendrás que despedirte de una o dos por falta de dinero. Infórmate acerca de tu Afore o contrata un plan de retiro.';
    this.testModel.respuestaContingencia = ' ';
    this.testModel.respuestaDeuda = ' ';
    this.testModel.respuestaHospitalizacion = ' ';
    this.testModel.respuestaRetiro = ' ';
    this.testModel.resumenGastosLibresMensuales = ' ';
    this.testModel.resumenGastosMensuales = ' ';
    this.testModel.resumenRetiro = ' ';
    this.testModel.asuntoCorreo = 'Resultado Test Financiero Hey';

    // agregar datos de asesor
    const asesor = this.asesoresHeyList.find( it =>  it.id === this.envioForm.value.asesorHey);
    if ( asesor !== undefined) {
      this.testModel.asesor = asesor;
    }

    this.testFinanciero.altaTest(this.testModel).subscribe( response =>  {
      this.confirmModalService.showModal({
        title: 'Gracias por utilizar el test financiero de Hey',
        message: 'Se te envió un correo con tus resultados'
      });
    }, error =>  {
      console.log('');
    });
  }

  changePuntoHey() {
    const puntoHey = this.puntosHeyList.find( it => it.id === this.envioForm.value.puntoHey);

    this.testFinanciero.getAsesoresHeyPuntos(puntoHey).toPromise().then( response =>  {
      this.asesoresHeyList = response;
    });
  }
}
