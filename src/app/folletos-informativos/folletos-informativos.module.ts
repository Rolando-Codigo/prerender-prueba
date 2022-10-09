import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolletosInformativosComponent } from './personas/folletos-informativos.component';
import { CuentasHeyComponent } from './cuentas-hey/cuentas-hey.component';
import { FolletosInformativosNegociosComponent } from './negocios/folletos-informativos-negocios.component';
import { CuentasHeyNegocioComponent } from './cuentas-hey-negocios/cuentas-hey-negocios.component';
import { CreditosHeyNegocioComponent } from './creditos-hey-negocios/creditos-hey-negocios.component';
import { TerminalInteligenteComponent } from './terminal-inteligente/terminal-inteligente.component';
import { FondosInversionLegalesComponent } from './fondos-inversion/fondos-inversion.component';
import { FondoBasicoComponent } from './fondo-basico/fondo-basico.component';
import { FondoCortoPlazoComponent } from './fondo-corto-plazo/fondo-corto-plazo.component';
import { FondoMedianoPlazoComponent } from './fondo-mediano-plazo/fondo-mediano-plazo.component';
import { FondoLargoPlazoComponent } from './fondo-largo-plazo/fondo-largo-plazo.component';
import { FondoBolsaMexicanaComponent } from './bolsa-mexicana/bolsa-mexicana.component';
import { FondoDolaresAmericanosComponent } from './dolares-americanos/dolares-americanos.component';

import { FolletosInformativosRouting } from './folletos-informativos.routing';

@NgModule({
    declarations: [
        FolletosInformativosComponent,
        CuentasHeyComponent,
        FolletosInformativosNegociosComponent,
        CuentasHeyNegocioComponent,
        CreditosHeyNegocioComponent,
        TerminalInteligenteComponent,
        FondosInversionLegalesComponent,
        FondoBasicoComponent,
        FondoCortoPlazoComponent,
        FondoMedianoPlazoComponent,
        FondoLargoPlazoComponent,
        FondoBolsaMexicanaComponent,
        FondoDolaresAmericanosComponent
    ],
    imports: [
        CommonModule,
        FolletosInformativosRouting
    ]
})
export class FolletosInformativosModule { }
