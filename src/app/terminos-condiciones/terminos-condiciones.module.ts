import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminosCondicionesComponent } from './terminos-condiciones.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { PromocionesComponent } from './promociones/promociones.component';

import { TerminosCondicionesRouting } from './terminos-condiciones.routing';

@NgModule({
    declarations: [
        TerminosCondicionesComponent,
        BeneficiosComponent,
        PromocionesComponent
    ],
    imports: [
        CommonModule,
        TerminosCondicionesRouting
    ]
})
export class TerminosCondicionesModule { }
