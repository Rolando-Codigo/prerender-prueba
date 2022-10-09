import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
    template: ''
})
export class PromocionalGeneralComponent {

    RECAPTCHA_KEY;
    host: string;

    public STATIC = PromocionalGeneralComponent;
    environment = environment;

    cookie: string;
    form: FormGroup;
    busy = false;
    public type = 'ALTA';
    public codigo: string = '';
    public folio = '0';
    contador = 0;
    rangoGiveaway: any;

    constructor(
        public formBuilder: FormBuilder,
        public confirmModalService: ConfirmModalService,
        public route: ActivatedRoute,
        @Inject(PLATFORM_ID) public platformId: Object
    ) {

        if (isPlatformBrowser(this.platformId)) {
            this.host = window.location.hostname;
        }
        if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
            this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
        } else {
            this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
        }

        this.cookie = '';

    }

    @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;


    initCodigo() {
        this.route.params.subscribe(params => {
            this.codigo = params['codigo'];
        });
    }

    participar(recaptcha?: string) {
        switch (this.type) {
            case 'ALTA':
                this.submitRequest(recaptcha);
                break;
            case 'CONTADOR':
                this.getContador(recaptcha);
                break;
            case 'PREMIO':
                this.getPremio(recaptcha);
                break;
            case 'ESTADISTICAS':
                this.getEstadisticas(recaptcha);
                break;
        }
    }

    async submitRequest(recaptcha?: string) {}

    async getContador(recaptcha?: string) {}

    async getPremio(recaptcha?: string) {}

    async getEstadisticas(recaptcha?: string) {}

    async validarCaptcha(type: string, recaptcha: string) {

        if (this.busy) {
            return false;
        }

        if (recaptcha == null) {
            this.type = type;
            this.busy = false;
            await this.recaptchaComponent.execute();
            return false;
        }
        return true;
    }

}
