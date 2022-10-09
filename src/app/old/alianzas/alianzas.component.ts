import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-alianzas',
  templateUrl: './alianzas.component.html',
  styleUrls: ['./alianzas.scss'],
})
export class AlianzasComponent {
  environment = environment;
  alianzasForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private contact: ContactService,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
    this.createForm();
  }

  get nameInvalid() {
    return this.alianzasForm.get('nombre').invalid && this.alianzasForm.get('nombre').touched;
  }

  get companyInvalid() {
    return this.alianzasForm.get('compania').invalid && this.alianzasForm.get('compania').touched;
  }

  get activityInvalid() {
    return this.alianzasForm.get('giro').invalid && this.alianzasForm.get('giro').touched;
  }

  get nacionalityInvalid() {
    return this.alianzasForm.get('nacionalidad').invalid && this.alianzasForm.get('nacionalidad').touched;
  }

  get mailInvalid() {
    return this.alianzasForm.get('correo').invalid && this.alianzasForm.get('correo').touched;
  }

  get foundationInvalid() {
    return this.alianzasForm.get('fundacion').invalid && this.alianzasForm.get('fundacion').touched;
  }

  get websiteInvalid() {
    return this.alianzasForm.get('sitio_web').invalid && this.alianzasForm.get('sitio_web').touched;
  }

  get stateInvalid() {
    return this.alianzasForm.get('estado').invalid && this.alianzasForm.get('estado').touched;
  }

  createForm() {
    this.alianzasForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      compania: ['', [Validators.required, Validators.minLength(5)]],
      giro: ['', [Validators.required, Validators.minLength(5)]],
      nacionalidad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fundacion: ['', [Validators.required, Validators.minLength(4)]],
      sitio_web: ['', [Validators.required, Validators.minLength(5)]],
      estado: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(alianzasForm) {
    console.log(alianzasForm);

    if (this.alianzasForm.invalid) {
      return Object.values( this.alianzasForm.controls ).forEach( control => {
        control.markAsTouched();
      });
    }

    if (isPlatformBrowser(this.platformId)) {
      this.contact.PostMessage(alianzasForm).subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({ error });
      });
    }
  }
}
