import { RouterModule, Routes } from '@angular/router';
import { ServiciosLegalesComponent } from 'src/app/servicios-legales/servicios-legales.component';
import { CondusefComponent } from './condusef/condusef.component';
import { IpabComponent } from './ipab/ipab.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: 'servicios-legales', component: ServiciosLegalesComponent, canActivate: [UtmsGuard] },
    { path: 'aviso-privacidad', component: PrivacidadComponent, canActivate: [UtmsGuard] },
    { path: 'aviso-legal', component: LegalComponent, canActivate: [UtmsGuard] },
    { path: 'transparencia', component: TransparenciaComponent, canActivate: [UtmsGuard] },
    { path: 'condusef', component: CondusefComponent, canActivate: [UtmsGuard] },
    { path: 'ipab', component: IpabComponent, canActivate: [UtmsGuard] },
];


export const ServiciosLegalesRouting = RouterModule.forChild(app_routes);
