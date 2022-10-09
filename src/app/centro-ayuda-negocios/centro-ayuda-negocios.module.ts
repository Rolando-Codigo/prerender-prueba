import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CentroAyudaNegociosComponent } from './centro-ayuda-negocios.component';
import { CentroAyudaNegociosResultadosComponent } from '../centro-ayuda-negocios-resultados/centro-ayuda-negocios-resultados.component';
import { InicioCentroAyudaNegociosComponent } from './inicio/inicio.component';

import { CentroAyudaNegociosRouting } from './centro-ayuda-negocios.routing';
import { HeySharedModule } from '../shared/heyshared.module';
import { CentroAyudaNegociosCapacitacionComponent } from './formularios/capacitacion/capacitacion.component';
import { CentroAyudaNegociosMantenimientoComponent } from './formularios/mantenimiento/mantenimiento.component';
import { CentroAyudaNegociosSolicitudPublicidadComponent } from './formularios/publicidad/solicitud-publicidad.component';
import { CentroAyudaNegociosSolicitudRollosComponent } from './formularios/solicitud-rollos/solicitud-rollos.component';
import { DatosAfiliacionComponent } from './formularios/components/datos-afiliacion/datos-afiliacion.component';
import { DomicilioAfiliacionComponent } from './formularios/components/domicilio-afiliacion/domicilio-afiliacion.component';
import { InfoEntregaComponent } from './formularios/components/info-entrega/info-entrega.component';

@NgModule({
    declarations: [
        CentroAyudaNegociosComponent,
        CentroAyudaNegociosResultadosComponent,
        InicioCentroAyudaNegociosComponent,

        CentroAyudaNegociosSolicitudRollosComponent,
        CentroAyudaNegociosSolicitudPublicidadComponent,
        CentroAyudaNegociosMantenimientoComponent,
        CentroAyudaNegociosCapacitacionComponent,

        DatosAfiliacionComponent,
        DomicilioAfiliacionComponent,
        InfoEntregaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CentroAyudaNegociosRouting,
        HeySharedModule
    ]
})
export class CentroAyudaNegociosModule { }
