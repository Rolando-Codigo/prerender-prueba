import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversionComponent } from './inversion/inversion.component';
import { PreOBDTarjetaCreditoComponent } from './pre-obd-tdc-you/pre-obd-tdc-you.component';
import { ConoceComerciosComponent } from './conoce-comercios/conoce-comercios.component';
import { BienvenidaHeyBancoComponent } from './bienvenida-hey-banco/bienvenida-hey-banco.component';

import { PersonasRouting } from './personas.routing';
import { HeySharedModule } from '../shared/heyshared.module';
import { HeyComponentesSharedModule } from '../shared/heycomponentesshared.module';
import { HeyBotonCuentaSharedModule } from '../shared/heybotoncuentashared.module';

@NgModule({
    declarations: [
        InversionComponent,
        PreOBDTarjetaCreditoComponent,
        ConoceComerciosComponent,
        BienvenidaHeyBancoComponent
    ],
    imports: [
        CommonModule,
        PersonasRouting,
        HeySharedModule,
        HeyComponentesSharedModule,
        HeyBotonCuentaSharedModule
    ]
})
export class PersonasModule { }
