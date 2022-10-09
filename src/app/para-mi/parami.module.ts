import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParaMiComponent } from 'src/app/para-mi/para-mi.component';
import { GiveawayHeyProComponent } from '../promos/giveaway-hey-pro/giveaway-hey-pro.component';
import { TarjetaDeCreditoComponent } from './tarjeta-de-credito/tarjeta-de-credito.component';
import { CorresponsalesComponent } from '../corresponsales/corresponsales.component';

import { ParaMiRouting } from './para-mi.routing';
import { HeySharedModule } from '../shared/heyshared.module';
import { HeyComponentesSharedModule } from '../shared/heycomponentesshared.module';
import { HeyBotonCuentaSharedModule } from '../shared/heybotoncuentashared.module';

@NgModule({
    declarations: [
        ParaMiComponent,
        GiveawayHeyProComponent,
        TarjetaDeCreditoComponent,
        CorresponsalesComponent
    ],
    imports: [
        CommonModule,
        ParaMiRouting,
        // HeySharedModule,
        HeyComponentesSharedModule,
        HeyBotonCuentaSharedModule
    ]
})
export class ParaMiModule { }
