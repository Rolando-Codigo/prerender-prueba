import { RouterModule, Routes } from '@angular/router';

import { IvrComponent } from './ivr.component';
import { IvrFallasComponent } from './ivr-fallas/ivr-fallas.component';
import { IvrSugerenciaComponent } from './ivr-sugerencia/ivr-sugerencia.component';
import { IvrProductoComponent } from './ivr-producto/ivr-producto.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '', component: IvrComponent },
    { path: 'reporte-fallas-app', component: IvrFallasComponent, canActivate: [UtmsGuard] },
    { path: 'sugerencias-mejora', component: IvrSugerenciaComponent, canActivate: [UtmsGuard] },
    { path: 'asesoria-producto', component: IvrProductoComponent , canActivate: [UtmsGuard] }
];


export const IvrRouting = RouterModule.forChild(app_routes);
