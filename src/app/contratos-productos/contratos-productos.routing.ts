import { RouterModule, Routes } from '@angular/router';
import { ContratoProductosComponent } from './personas/contratos-productos.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { InversionFondosInversionComponent } from './inversion-fondos-inversion/inversion-fondos-inversion.component';
import { FondosInversionProspectosComponent } from './fondos-inversion-prospectos/fondos-inversion-prospectos.component';
import { FondosInversionCaratulaComponent } from './caratula-servicios-inversion/caratula-servicios-inversion.component';
import { ContratoProductosNegociosComponent } from './negocios/contratos-productos-negocios.component';
import { ContratoProductosCuentasHeyComponent } from './cuentas-hey-contratos/cuentas-hey-contratos.component';

import { UtmsGuard } from '../services/utms.guard';
import { CreditosContratosComponent } from './creditos-contratos/creditos-contratos.component';

const app_routes: Routes = [
    { path: 'contratos-productos', component: ContratoProductosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/tarjeta-credito', component: TarjetaCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/inversion-fondos', component: InversionFondosInversionComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/inversion-fondos/prospectos', component: FondosInversionProspectosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/inversion-fondos/caratula-servicios-inversion',
      component: FondosInversionCaratulaComponent, canActivate: [UtmsGuard]
    },
    { path: 'contratos-productos-negocios', component: ContratoProductosNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos-negocios/creditos-contratos', component: CreditosContratosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos-negocios/cuentas-hey-contratos',
      component: ContratoProductosCuentasHeyComponent, canActivate: [UtmsGuard]
    }

];


export const ContratoProductosRouting = RouterModule.forChild(app_routes);
