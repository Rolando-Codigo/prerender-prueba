import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { CareersModel } from '../../models/careers.model';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.scss']
})

export class FormComponent implements OnInit {
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public siteKey: string;

  public careerForm: FormGroup;
  public captchaForm: FormGroup;

  public careersModel: CareersModel = new CareersModel();

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private reCaptchaV3Service: ReCaptchaV3Service, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.careerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono: new FormControl(0, Validators.required),
      areasExperiencia: new FormControl('', Validators.required),
      nivelEstudios: new FormControl('', Validators.required),
      cambioResidencia: new FormControl(null, Validators.required),
      check: new FormControl(false, Validators.requiredTrue)
    });

    this.captchaForm = this.formBuilder.group({
      envioRecaptcha: ['', Validators.required]
    });
  }

  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  ​
  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  ​
  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  ​
  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }

  handleError() {

  }

  trasnformarArchivo(archivos: File[]) {
    if (archivos.length) {
      this.convertirArchivoABase64(archivos[0]).then
      (archivoABase64 =>
        this.careersModel.nombreDocumento = archivoABase64
      );
    }
  }

  convertirArchivoABase64(archivo: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onSubmit() {
    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      this.careersModel.captcha = token;
    });

    this.httpClient.post<any>('https://apipartners.banregio.io:8243/salud-financiera-portal/1/vacantes', this.careersModel).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
    );
  }
}
