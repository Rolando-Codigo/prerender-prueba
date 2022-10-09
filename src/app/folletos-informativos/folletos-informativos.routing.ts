import { RouterModule, Routes } from '@angular/router';
import { FolletosInformativosComponent } from 'src/app/folletos-informativos/personas/folletos-informativos.component';
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

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: 'folletos-informativos', component: FolletosInformativosComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos/cuentas-hey', component: CuentasHeyComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios', component: FolletosInformativosNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios/cuentas-hey-negocios', component: CuentasHeyNegocioComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios/creditos-hey-negocios', component: CreditosHeyNegocioComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios/terminal-inteligente', component: TerminalInteligenteComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos/fondos-inversion', component: FondosInversionLegalesComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/basico', component: FondoBasicoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/corto-plazo', component: FondoCortoPlazoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/mediano-plazo', component: FondoMedianoPlazoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/largo-plazo', component: FondoLargoPlazoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/bolsa-mexicana', component: FondoBolsaMexicanaComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/dolares-americanos', component: FondoDolaresAmericanosComponent, canActivate: [UtmsGuard] }

];


export const FolletosInformativosRouting = RouterModule.forChild(app_routes);
