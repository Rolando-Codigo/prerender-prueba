
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PromosComponent } from './promos.component';
import { GiveawaysComponent } from './giveaways/giveaways.component';
import { GiveawayNominaComponent } from './giveaway-nomina/giveaway-nomina.component';
import { GiveawayParticipacionNominaComponent } from './giveaway-participacion-nomina/giveaway-participacion-nomina.component';
import { GiveawayParticipacionReferidosComponent } from './giveaway-participacion-referidos/giveaway-participacion-referidos.component';
import { GiveawayParticipacionNpsComponent } from './giveaway-participacion-nps/giveaway-participacion-nps.component';
import { PromocionalTranferenciaSaldosComponent  } from './promocional-tranferencia-saldos/promocional-tranferencia-saldos.component';
import { PromocionalEmbajadoresComponent } from './promocional-embajadores/promocional-embajadores.component';
import { BoletoDoradoInformativoComponent } from './boleto-dorado-informativo/boleto-dorado-informativo.component';
import { BoletoDoradoComponent } from './boleto-dorado/boleto-dorado.component';
import { GoldenTicketComponent } from './golden-ticket/golden-ticket.component';
import { GiveawayDifiereComponent } from './giveaway-difiere/giveaway-difiere.component';
import { DifiereComprasHeyProComponent } from './difiere-compras-hey-pro/difiere-compras-hey-pro.component';
import { GiveawayMedaliaComponent } from './giveaway-medalia/giveaway-medalia.component';
import { GiveawayCatarInteresComponent } from './giveaway-catar-interes/giveaway-catar-interes.component';
import { GiveawayAhorroCategoriasComponent } from './giveaway-ahorro-categorias/giveaway-ahorro-categorias.component';
import { BoletosAsignadosModalComponent } from './boleto-dorado/boletos-asignados-modal/boletos-asignados-modal.component';
import { GiveawayRegistroEmbajadoresComponent } from './giveaway-registro-embajadores/giveaway-registro-embajadores.component';

import { PromosRouting } from './promos.routing';

import { GiveawayCatarModalComponent } from './giveaway-catar-interes/giveaway-catar-modal/giveaway-catar-modal.component';
import { HeySharedModule } from '../shared/heyshared.module';
import { HeyComponentesSharedModule } from '../shared/heycomponentesshared.module';
import { HeyBotonCuentaSharedModule } from '../shared/heybotoncuentashared.module';

@NgModule({
    declarations: [
        PromosComponent,
        GiveawaysComponent,
        GiveawayNominaComponent,
        GiveawayParticipacionNominaComponent,
        GiveawayParticipacionReferidosComponent,
        GiveawayParticipacionNpsComponent,
        PromocionalTranferenciaSaldosComponent,
        PromocionalEmbajadoresComponent,
        BoletoDoradoInformativoComponent,
        BoletoDoradoComponent,
        GoldenTicketComponent,
        GiveawayDifiereComponent,
        DifiereComprasHeyProComponent,
        GiveawayMedaliaComponent,
        GiveawayCatarInteresComponent,
        GiveawayAhorroCategoriasComponent,
        BoletosAsignadosModalComponent,
        GiveawayCatarModalComponent,
        GiveawayRegistroEmbajadoresComponent
    ],
    imports: [
        CommonModule,
        PromosRouting,
        HeySharedModule,
        HeyComponentesSharedModule,
        HeyBotonCuentaSharedModule,
        RouterModule
    ],
  entryComponents: [
    BoletosAsignadosModalComponent,
    GiveawayCatarModalComponent
  ],
})
export class PromosModule { }
