
import { RouterModule, Routes } from '@angular/router';

import { ParaMiComponent } from 'src/app/para-mi/para-mi.component';
import { GiveawayHeyProComponent } from '../promos/giveaway-hey-pro/giveaway-hey-pro.component';
import { TarjetaDeCreditoComponent } from './tarjeta-de-credito/tarjeta-de-credito.component';
import { CorresponsalesComponent } from '../corresponsales/corresponsales.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '', component: ParaMiComponent, canActivate: [UtmsGuard] },
    { path: 'parami/hey-pro', component: GiveawayHeyProComponent, canActivate: [UtmsGuard] },
    { path: 'parami/tdc', component: TarjetaDeCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'corresponsales', component: CorresponsalesComponent, canActivate: [UtmsGuard] }
];


export const ParaMiRouting = RouterModule.forChild(app_routes);
