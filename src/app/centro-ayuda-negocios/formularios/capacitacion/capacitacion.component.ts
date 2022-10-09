import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IvrBaseComponent } from 'src/app/ivr-base-component';
import { IvrService } from 'src/app/ivr.service';
import { IvrFallasComponent } from 'src/app/ivr/ivr-fallas/ivr-fallas.component';
import { HelpCenterService } from 'src/app/services/help-center.service';
import { environment } from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-negocios',
  templateUrl: './capacitacion.component.html'
})
export class CentroAyudaNegociosCapacitacionComponent extends IvrBaseComponent implements OnInit {

  environment = environment;
  capacitacionForm: FormGroup;
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

    this.capacitacionForm = this._formBuilder.group({
      tipo: ['', Validators.required],
      otraCapacitacion: ['']
    });

    this.initializeModal();

  }

  submitForm() {
    const datos = this.datosAfiliacionForm.value;
    const domicilio = this.domicilioAfiliacionForm.value;
    const entrega = this.infoEntregaAfiliacionForm.value;
    const capacitacion = this.capacitacionForm.value;

    this.busy = true;
    try {

      this._helpCenterService.sendCaseCapacitacion(datos, domicilio, entrega, capacitacion).subscribe( result => {
        this.busy = false;
        if (result != null && result.length > 0) {
          if (result[0].respuesta != null) {
            this.showModal(IvrFallasComponent.MODAL_TYPE_SUCCESS);
            this.clearForms();
          } else {
            this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
          }
        }
      });
    } catch (e) {
      this.busy = false;
      this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
    }

  }

  clearForms() {
    this.datosAfiliacionForm.reset();
    this.domicilioAfiliacionForm.reset();
    this.infoEntregaAfiliacionForm.reset();
    this.capacitacionForm.reset();
    this.otherVisible = false;
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
    const tipo = this.capacitacionForm.value.tipo;
    this.otherVisible = tipo === 'Otro';
  }
}
