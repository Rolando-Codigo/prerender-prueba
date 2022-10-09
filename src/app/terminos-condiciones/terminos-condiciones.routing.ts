import { RouterModule, Routes } from '@angular/router';
import { TerminosCondicionesComponent } from 'src/app/terminos-condiciones/terminos-condiciones.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '', component: TerminosCondicionesComponent, canActivate: [UtmsGuard] },
    { path: 'beneficios', component: BeneficiosComponent, canActivate: [UtmsGuard] },
    { path: 'promociones', component: PromocionesComponent, canActivate: [UtmsGuard] }
];


export const TerminosCondicionesRouting = RouterModule.forChild(app_routes);
