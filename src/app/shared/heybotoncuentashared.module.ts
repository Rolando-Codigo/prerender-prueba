import { NgModule } from '@angular/core';

import { BtnCrearCuentaComponent } from '../components/btn-crear-cuenta/btn-crear-cuenta.component';

@NgModule({
    declarations: [
        BtnCrearCuentaComponent
    ],
    exports: [
        BtnCrearCuentaComponent
    ]
})
export class HeyBotonCuentaSharedModule { }