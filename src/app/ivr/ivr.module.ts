import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvrComponent } from './ivr.component';
import { IvrFallasComponent } from './ivr-fallas/ivr-fallas.component';
import { IvrSugerenciaComponent } from './ivr-sugerencia/ivr-sugerencia.component';
import { IvrProductoComponent } from './ivr-producto/ivr-producto.component';


import { IvrRouting } from './ivr.routing';
import { HeySharedModule } from '../shared/heyshared.module';

@NgModule({
    declarations: [
        IvrComponent,
        IvrFallasComponent,
        IvrSugerenciaComponent,
        IvrProductoComponent
    ],
    imports: [
        CommonModule,
        IvrRouting,
        HeySharedModule
    ]

})
export class IvrModule { }
