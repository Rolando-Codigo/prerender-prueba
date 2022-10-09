import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratoProductosComponent } from './personas/contratos-productos.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { InversionFondosInversionComponent } from './inversion-fondos-inversion/inversion-fondos-inversion.component';
import { FondosInversionProspectosComponent } from './fondos-inversion-prospectos/fondos-inversion-prospectos.component';
import { FondosInversionCaratulaComponent } from './caratula-servicios-inversion/caratula-servicios-inversion.component';
import { ContratoProductosNegociosComponent } from './negocios/contratos-productos-negocios.component';
import { ContratoProductosCuentasHeyComponent } from './cuentas-hey-contratos/cuentas-hey-contratos.component';

import { ContratoProductosRouting } from './contratos-productos.routing';
import { CreditosContratosComponent } from './creditos-contratos/creditos-contratos.component';

@NgModule({
    declarations: [
        ContratoProductosComponent,
        TarjetaCreditoComponent,
        InversionFondosInversionComponent,
        FondosInversionProspectosComponent,
        FondosInversionCaratulaComponent,
        ContratoProductosNegociosComponent,
        ContratoProductosCuentasHeyComponent,
        CreditosContratosComponent
    ],
    imports: [
        CommonModule,
        ContratoProductosRouting
    ]
})
export class ContratoProductosModule { }
