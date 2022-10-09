import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FallaIvr } from 'src/app/falla-ivr';
import { IvrBaseComponent } from 'src/app/ivr-base-component';
import { IvrService } from 'src/app/ivr.service';
import { IvrFallasComponent } from 'src/app/ivr/ivr-fallas/ivr-fallas.component';
import { HelpCenterService } from 'src/app/services/help-center.service';
import { environment } from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-negocios',
  templateUrl: './solicitud-publicidad.component.html'
})
export class CentroAyudaNegociosSolicitudPublicidadComponent extends IvrBaseComponent implements OnInit {

  environment = environment;
  publicidadForm: FormGroup;
  datosAfiliacionForm: FormGroup;
  domicilioAfiliacionForm: FormGroup;
  infoEntregaAfiliacionForm: FormGroup;
  public STATIC = IvrFallasComponent;
  busy: boolean;
  otherVisible = false;

  constructor(
    private ivrService: IvrService,
    private _formBuilder: FormBuilder,
    private _helpCenterService: HelpCenterService,
    ) {
      super();
    }

  ngOnInit() {

    this.publicidadForm = this._formBuilder.group({
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required],
      cantidadOther: [''],
    });

    this.initializeModal();

  }

  submitForm() {
    const datos = this.datosAfiliacionForm.value;
    const domicilio = this.domicilioAfiliacionForm.value;
    const entrega = this.infoEntregaAfiliacionForm.value;
    const publicidad = this.publicidadForm.value;

    this.busy = true;
    this._helpCenterService.sendCasePublicidad(datos, domicilio, entrega, publicidad).subscribe( result => {
      this.busy = false;
      if (result != null && result.length > 0) {
        if (result[0].respuesta != null) {
          // Se muestra alerta para indicar que el caso fue enviado con exito
          this.showModal(IvrFallasComponent.MODAL_TYPE_SUCCESS);

          // limpiamos el formulario
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
    this.publicidadForm.reset();
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


  changeCantidad() {
    const cantidad = this.publicidadForm.value.cantidad;
    this.otherVisible = cantidad === 'Otros';
  }
}
