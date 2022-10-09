import { RouterModule, Routes } from '@angular/router';

import { CentroAyudaNegociosComponent } from './centro-ayuda-negocios.component';
import { CentroAyudaNegociosResultadosComponent } from '../centro-ayuda-negocios-resultados/centro-ayuda-negocios-resultados.component';
import { InicioCentroAyudaNegociosComponent } from './inicio/inicio.component';

import { UtmsGuard } from '../services/utms.guard';
import { CentroAyudaNegociosCapacitacionComponent } from './formularios/capacitacion/capacitacion.component';
import { CentroAyudaNegociosMantenimientoComponent } from './formularios/mantenimiento/mantenimiento.component';
import { CentroAyudaNegociosSolicitudPublicidadComponent } from './formularios/publicidad/solicitud-publicidad.component';
import { CentroAyudaNegociosSolicitudRollosComponent } from './formularios/solicitud-rollos/solicitud-rollos.component';

const app_routes: Routes = [
    { path: 'ayuda-negocios', component: InicioCentroAyudaNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-negocios', component: CentroAyudaNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-negocios/busqueda/:search', component: CentroAyudaNegociosResultadosComponent, canActivate: [UtmsGuard] },
    // { path: 'solicitud-rollos', component: CentroAyudaNegociosSolicitudRollosComponent, canActivate: [UtmsGuard]  },
    // { path: 'solicitud-publicidad', component: CentroAyudaNegociosSolicitudPublicidadComponent, canActivate: [UtmsGuard]  },
    // { path: 'solicitud-mantenimiento', component: CentroAyudaNegociosMantenimientoComponent, canActivate: [UtmsGuard] },
    // { path: 'solicitud-capacitacion', component: CentroAyudaNegociosCapacitacionComponent, canActivate: [UtmsGuard] },
];


export const CentroAyudaNegociosRouting = RouterModule.forChild(app_routes);
