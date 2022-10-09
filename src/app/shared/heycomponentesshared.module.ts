import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CtaAppComponent } from '../components/cta-app/cta-app.component';
import { SliderProductosComponent } from '../components/slider-productos/slider-productos.component';
import { SliderBeneficiosComponent } from '../components/slider-beneficios/slider-beneficios.component';
import { StoresComponent } from '../components/stores/stores.component';
import { LinkedinComponent } from '../components/linkedin/linkedin.component';

import { HeyBotonCuentaSharedModule } from '../shared/heybotoncuentashared.module';

@NgModule({
    declarations: [
        CtaAppComponent,
        SliderProductosComponent,
        SliderBeneficiosComponent,
        StoresComponent,
        LinkedinComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HeyBotonCuentaSharedModule
    ],
    exports: [
        CtaAppComponent,
        SliderProductosComponent,
        SliderBeneficiosComponent,
        StoresComponent,
        LinkedinComponent
    ]
})
export class HeyComponentesSharedModule { }