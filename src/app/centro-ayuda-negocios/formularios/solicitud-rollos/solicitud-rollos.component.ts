import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IvrBaseComponent } from 'src/app/ivr-base-component';
import { IvrService } from 'src/app/ivr.service';
import { IvrFallasComponent } from 'src/app/ivr/ivr-fallas/ivr-fallas.component';
import { HelpCenterService } from 'src/app/services/help-center.service';
import { environment } from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-negocios',
  templateUrl: './solicitud-rollos.component.html',
  styleUrls: ['./solicitud-rollos.css'],
  encapsulation : ViewEncapsulation.None,
})
export class CentroAyudaNegociosSolicitudRollosComponent extends IvrBaseComponent implements OnInit {

  environment = environment;
  rollosForm: FormGroup;
  datosAfiliacionForm: FormGroup;
  domicilioAfiliacionForm: FormGroup;
  infoEntregaAfiliacionForm: FormGroup;
  public STATIC = IvrFallasComponent;

  otherVisible = false;

  constructor(
    private ivrService: IvrService,
    private _formBuilder: FormBuilder,
    private _helpCenterService: HelpCenterService,
    ) {
      super();
    }

  ngOnInit() {

    this.rollosForm = this._formBuilder.group({
      noEquipos: ['', Validators.required],
      cantidad: ['', Validators.required],
      cantidadOther: [''],
    });

    this.initializeModal();

  }

  submitForm() {
    const datos = this.datosAfiliacionForm.value;
    const domicilio = this.domicilioAfiliacionForm.value;
    const entrega = this.infoEntregaAfiliacionForm.value;
    const rollos = this.rollosForm.value;

    this.busy = true;
    this._helpCenterService.sendCaseRollos(datos, domicilio, entrega, rollos).subscribe( result => {
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

  }

  clearForms() {
    this.datosAfiliacionForm.reset();
    this.domicilioAfiliacionForm.reset();
    this.infoEntregaAfiliacionForm.reset();
    this.rollosForm.reset();
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
    const cantidad = this.rollosForm.value.cantidad;
    this.otherVisible = cantidad === 'Otros';
  }
}
