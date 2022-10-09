import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FallaIvr } from 'src/app/falla-ivr';
import { ImagenIvr } from 'src/app/imagen-ivr';
import { IvrBaseComponent } from 'src/app/ivr-base-component';
import { IvrService } from 'src/app/ivr.service';
import { IvrFallasComponent } from 'src/app/ivr/ivr-fallas/ivr-fallas.component';
import { HelpCenterService } from 'src/app/services/help-center.service';
import { environment } from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-negocios',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.scss']
})
export class CentroAyudaNegociosMantenimientoComponent extends IvrBaseComponent  implements OnInit {

  environment = environment;
  mantenimientoForm: FormGroup;
  datosAfiliacionForm: FormGroup;
  domicilioAfiliacionForm: FormGroup;
  infoEntregaAfiliacionForm: FormGroup;
  public STATIC = IvrFallasComponent;
  public busy = false;
  otherVisible = false;

  public model = new FallaIvr();
  public MODEL = FallaIvr;
  public evidenceError: string = null;
  public evidence2Error: string = null;
  public evidence3Error: string = null;
  public evidence4Error: string = null;


  @ViewChild('evidenceFile') evidenceFile: ElementRef;
  @ViewChild('evidence2File') evidence2File: ElementRef;
  @ViewChild('evidence3File') evidence3File: ElementRef;
  @ViewChild('evidence4File') evidence4File: ElementRef;

  constructor(
    private ivrService: IvrService,
    private _formBuilder: FormBuilder,
    private _helpCenterService: HelpCenterService,
    ) {
      super();

      // SE USAN PARA 'TRADUCIR' los parametros a legible por humanos
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.DESCRIPTION] = 'Descripción de la falla';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.DEVICE] = 'Modelo de Celular';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.APP_VERSION] = 'Versión de App';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.OS] = 'Sistema operativo de tu celular';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE] = 'Imagen 1';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_REFERENCE] = 'Referencia de la imagen 1';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_EXTENSION] = 'Extencion de la imagen 1';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_2] = 'Imagen 2';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_2_REFERENCE] = 'Referencia de la imagen 2';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_2_EXTENSION] = 'Extencion de la imagen 2';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_3] = 'Imagen 3';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_3_REFERENCE] = 'Referencia de la imagen 3';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_3_EXTENSION] = 'Extencion de la imágen 3';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_4] = 'Imagen 4';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_4_REFERENCE] = 'Referencia de la imagen 4';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_4_EXTENSION] = 'Extencion de la imagen 4';

      this.IDENTIFIER_VALUES_TEXT[IvrFallasComponent.TYPE_APP] = 'Falla en la App';
      this.IDENTIFIER_VALUES_TEXT[IvrFallasComponent.TYPE_OTHER] = 'Otro tipo de Falla';

      this.IDENTIFIER_VALUES_TEXT[FallaIvr.OS_IOS] = 'iOS';
      this.IDENTIFIER_VALUES_TEXT[FallaIvr.OS_ANDROID] = 'Android';
    }

  ngOnInit() {

    this.mantenimientoForm = this._formBuilder.group({
      modeloTectnologia:  ['', Validators.required],
      tipo:  ['', Validators.required],
      tipoOtro: [''],
    });

    this.initializeModal();
  }

  submitForm() {
    const datos = this.datosAfiliacionForm.value;
    const domicilio = this.domicilioAfiliacionForm.value;
    const entrega = this.infoEntregaAfiliacionForm.value;
    const mantenimiento = this.mantenimientoForm.value;
    mantenimiento.images = this.model;

    this.busy = true;
    this._helpCenterService.sendCaseMantenimiento(datos, domicilio, entrega, mantenimiento).subscribe( result => {
      console.log(result);
      this.busy = false;
      if (result != null && result.length > 0) {
        if (result[0].respuesta != null || result[0].recordId != null) {
          this.showModal(IvrFallasComponent.MODAL_TYPE_SUCCESS);
          this.clearForms();
        } else {
          this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
        }
      }
    });

  }


  clearForms() {
    this.datosAfiliacionForm.reset();
    this.domicilioAfiliacionForm.reset();
    this.infoEntregaAfiliacionForm.reset();
    this.mantenimientoForm.reset();
    this.model = new FallaIvr();
  }

  /*
  * Actualizar el formulario de Datos de afiliacion
  */
  updateAfiliadosForm(form) {
    this.datosAfiliacionForm = form;
  }


  /*
  * Actualizar el formulario de Domiclio de afiliacion
  */
  updateDomicilioAfiliadosForm(form) {
    this.domicilioAfiliacionForm = form;
  }

  /*
  * Actualizar el formulario de Información de entrega
  */
  updateInfoEntregaAfiliadosForm(form) {
    this.infoEntregaAfiliacionForm = form;
  }

  public fileChangeError(error: string, type: string, file: File) {
    switch (type) {
      case FallaIvr.EVIDENCE:
        this.evidenceError = error;
        break;
        case FallaIvr.EVIDENCE_2:
        this.evidence2Error = error;
        break;
        case FallaIvr.EVIDENCE_3:
        this.evidence3Error = error;
        break;
        case FallaIvr.EVIDENCE_4:
        this.evidence4Error = error;
        break;
      default:
        break;
    }
  }

  public removeFile(file: ImagenIvr, type: string) {
    super.removeFile(file, type);
    switch (type) {
      case FallaIvr.EVIDENCE:
        this.evidenceError = null;
        break;
      case FallaIvr.EVIDENCE_2:
        this.evidence2Error = null;
        break;
      case FallaIvr.EVIDENCE_3:
        this.evidence3Error = null;
        break;
      case FallaIvr.EVIDENCE_4:
        this.evidence4Error = null;
        break;
      default:
        break;
    }
  }

  public fileChanged(image: ImagenIvr, type: string) {
    switch (type) {
      case FallaIvr.EVIDENCE:
          this.model.evidence = image;
          this.evidenceError = null;
          this.evidenceFile.nativeElement.value = '';
        break;
        case FallaIvr.EVIDENCE_2:
          this.model.evidence2 = image;
          this.evidence2Error = null;
          this.evidence2File.nativeElement.value = '';
        break;
        case FallaIvr.EVIDENCE_3:
          this.model.evidence3 = image;
          this.evidence3Error = null;
          this.evidence3File.nativeElement.value = '';
        break;
        case FallaIvr.EVIDENCE_4:
          this.model.evidence4 = image;
          this.evidence4Error = null;
          this.evidence4File.nativeElement.value = '';
        break;
      default:
        break;
    }
  }

  changeTipo() {
    const tipo = this.mantenimientoForm.value.tipo;
    this.otherVisible = tipo === 'Otro';
  }
}
