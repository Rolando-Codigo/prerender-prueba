
import { RouterModule, Routes } from '@angular/router';

import { InversionComponent } from './inversion/inversion.component';
import { PreOBDTarjetaCreditoComponent } from './pre-obd-tdc-you/pre-obd-tdc-you.component';
import { ConoceComerciosComponent } from './conoce-comercios/conoce-comercios.component';
import { BienvenidaHeyBancoComponent } from './bienvenida-hey-banco/bienvenida-hey-banco.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: 'bienvenida-hey-banco', component: BienvenidaHeyBancoComponent, canActivate: [UtmsGuard] },
    { path: 'personas/inversion', component: InversionComponent, canActivate: [UtmsGuard] },
    { path: 'personas/tdc/hazte-cliente', component: PreOBDTarjetaCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'personas/conoce-comercios', component: ConoceComerciosComponent, canActivate: [UtmsGuard] }
];


export const PersonasRouting = RouterModule.forChild(app_routes);
