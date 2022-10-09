import { RouterModule, Routes } from '@angular/router';

import { CentroAyudaComponent } from './centro-ayuda.component';
import { CentroAyudaAppComponent } from './app/centro-ayuda-app.component';
import { CentroAyudaCuentaComponent } from './cuenta/centro-ayuda-cuenta.component';
import { CentroAyudaInversionComponent } from './inversion/centro-ayuda-inversion.component';
import { CentroAyudaTarjetaCreditoComponent } from './tarjeta-credito/centro-ayuda-tarjeta-credito.component';
import { CentroAyudaCreditosAutoComponent } from './creditos-auto/centro-ayuda-creditos-auto.component';
import { CentroAyudaAhorroComponent } from './ahorro/centro-ayuda-ahorro.component';
import { CentroAyudaSegurosComponent } from './seguros/centro-ayuda-seguros.component';
import { CentroAyudaSegurosAutoComponent } from './seguros-auto/centro-ayuda-seguros-auto.component';
import { CentroAyudaTarjetaVirtualComponent } from './tarjeta-virtual/tarjeta-virtual.component';
import { CentroAyudaRastreoTarjetaComponent } from './rastreo-tarjeta/rastreo-tarjeta.component';
import { CentroAyudaAbrirCuentaComponent } from './abrir-cuenta/abrir-cuenta.component';
import { CentroAyudaMovimientosCuentasComponent } from './movimientos-cuentas/movimientos-cuentas.component';
import { CentroAyudaNumeroCuentaComponent } from './numero-cuenta/numero-cuenta.component';
import { CentroAyudaInversionHeyComponent } from './como-funciona-inversion/como-funciona-inversion.component';
import { CentroAyudaProteccionComponent } from './proteccion/proteccion.component';
import { CentroAyudaSegurosCelularComponent } from './seguros-celular/centro-ayuda-seguros-celular.component';
import { CentroAyudaConsultaVirtualComponent } from './seguro-apoyo-hospitalario-consulta-virtual/centro-ayuda-apoyo-hospitalario-consulta-virtual.component';
import { CentroAyudaVideotutorialesComponent } from './videotutoriales/videotutoriales.component';
import { CentroAyudaResultadosComponent } from '../centro-ayuda-resultados/centro-ayuda-resultados.component';
import { CentroAyudaResultadoComponent } from '../centro-ayuda-resultado/centro-ayuda-resultado.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: 'centro-ayuda', component: CentroAyudaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-app', component: CentroAyudaAppComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-cuenta', component: CentroAyudaCuentaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-inversion', component: CentroAyudaInversionComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-tarjeta-credito', component: CentroAyudaTarjetaCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-creditos-auto', component: CentroAyudaCreditosAutoComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-ahorro', component: CentroAyudaAhorroComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-seguros', component: CentroAyudaSegurosComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/seguros-auto', component: CentroAyudaSegurosAutoComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/tarjeta-virtual', component: CentroAyudaTarjetaVirtualComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/rastreo-tarjeta', component: CentroAyudaRastreoTarjetaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/abrir-cuenta', component: CentroAyudaAbrirCuentaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/movimientos-cuentas', component: CentroAyudaMovimientosCuentasComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/numero-cuenta', component: CentroAyudaNumeroCuentaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/como-funciona-inversion', component: CentroAyudaInversionHeyComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/proteccion', component: CentroAyudaProteccionComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/seguros-celular', component: CentroAyudaSegurosCelularComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/seguro-apoyo-hospitalario-consulta-virtual', component: CentroAyudaConsultaVirtualComponent,
    canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/videotutoriales', component: CentroAyudaVideotutorialesComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/busqueda/:search', component: CentroAyudaResultadosComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/articulo/:id', component: CentroAyudaResultadoComponent, canActivate: [UtmsGuard]  }

];


export const CentroAyudaRouting = RouterModule.forChild(app_routes);
