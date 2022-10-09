import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosLegalesComponent } from './servicios-legales.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { LegalComponent } from './legal/legal.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { CondusefComponent } from './condusef/condusef.component';
import { IpabComponent } from './ipab/ipab.component';

import { ServiciosLegalesRouting } from './servicios-legales.routing';

@NgModule({
    declarations: [
        ServiciosLegalesComponent,
        PrivacidadComponent,
        LegalComponent,
        TransparenciaComponent,
        CondusefComponent,
        IpabComponent
    ],
    imports: [
        CommonModule,
        ServiciosLegalesRouting
    ]
})
export class ServiciosLegalesModule { }
