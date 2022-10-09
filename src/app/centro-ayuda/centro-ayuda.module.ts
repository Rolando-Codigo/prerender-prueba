import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

import { CentroAyudaRouting } from './centro-ayuda.routing';
import { HeySharedModule } from '../shared/heyshared.module';

@NgModule({
    declarations: [
        CentroAyudaComponent,
        CentroAyudaAppComponent,
        CentroAyudaCuentaComponent,
        CentroAyudaInversionComponent,
        CentroAyudaTarjetaCreditoComponent,
        CentroAyudaCreditosAutoComponent,
        CentroAyudaAhorroComponent,
        CentroAyudaSegurosComponent,
        CentroAyudaSegurosAutoComponent,
        CentroAyudaTarjetaVirtualComponent,
        CentroAyudaRastreoTarjetaComponent,
        CentroAyudaAbrirCuentaComponent,
        CentroAyudaMovimientosCuentasComponent,
        CentroAyudaNumeroCuentaComponent,
        CentroAyudaInversionHeyComponent,
        CentroAyudaProteccionComponent,
        CentroAyudaSegurosCelularComponent,
        CentroAyudaConsultaVirtualComponent,
        CentroAyudaVideotutorialesComponent,
        CentroAyudaResultadosComponent,
        CentroAyudaResultadoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CentroAyudaRouting,
        HeySharedModule
    ]
})
export class CentroAyudaModule { }
