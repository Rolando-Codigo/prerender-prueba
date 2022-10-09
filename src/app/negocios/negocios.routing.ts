
import { RouterModule, Routes } from '@angular/router';

import { PreOBDNegociosComponent } from './pre-obd-negocios/pre-obd-negocios.component';
import { TarjetaHeyNegociosComponent } from './tarjeta-hey-negocios/tarjeta-hey-negocios.component';
import { BienvenidaNegociosHeyComponent } from './bienvenida-negocios-hey/bienvenida-negocios-hey.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: 'cuenta/pre-obd', component: PreOBDNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'tarjeta-hey-negocios', component: TarjetaHeyNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'bienvenida/hey-banco', component: BienvenidaNegociosHeyComponent, canActivate: [UtmsGuard] }
];


export const NegociosRouting = RouterModule.forChild(app_routes);
