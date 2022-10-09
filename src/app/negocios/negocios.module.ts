import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreOBDNegociosComponent } from './pre-obd-negocios/pre-obd-negocios.component';
import { TarjetaHeyNegociosComponent } from './tarjeta-hey-negocios/tarjeta-hey-negocios.component';
import { BienvenidaNegociosHeyComponent } from './bienvenida-negocios-hey/bienvenida-negocios-hey.component';

import { NegociosRouting } from './negocios.routing';
import { HeySharedModule } from '../shared/heyshared.module';
import { HeyBotonCuentaSharedModule } from '../shared/heybotoncuentashared.module';

@NgModule({
    declarations: [
        PreOBDNegociosComponent,
        TarjetaHeyNegociosComponent,
        BienvenidaNegociosHeyComponent
    ],
    imports: [
        CommonModule,
        NegociosRouting,
        HeySharedModule,
        HeyBotonCuentaSharedModule
    ]
})
export class NegociosModule { }
