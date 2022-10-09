import { RouterModule, Routes } from '@angular/router';

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
import { GiveawayRegistroEmbajadoresComponent } from './giveaway-registro-embajadores/giveaway-registro-embajadores.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '', component: PromosComponent, canActivate: [UtmsGuard] },
    { path: 'giveaways', component: GiveawaysComponent, canActivate: [UtmsGuard] },
    { path: 'giveaway-nomina', component: GiveawayNominaComponent, canActivate: [UtmsGuard]},
    { path: 'giveaway-participacion-nomina/:codigo', component: GiveawayParticipacionNominaComponent, canActivate: [UtmsGuard]},
    { path: 'giveaway-participacion-referidos', component: GiveawayParticipacionReferidosComponent, canActivate: [UtmsGuard]},
    { path: 'giveaway-participacion-referidos/:codigo', component: GiveawayParticipacionReferidosComponent, canActivate: [UtmsGuard]},
    { path: 'giveaway-participacion-nps/:codigo', component: GiveawayParticipacionNpsComponent, canActivate: [UtmsGuard]},
    { path: 'giveaway-transferencia-saldos/:codigo' , component: PromocionalTranferenciaSaldosComponent, canActivate: [UtmsGuard]} ,
    { path: 'referidos' , component: PromocionalEmbajadoresComponent, canActivate: [UtmsGuard]},
    { path: 'boleto-dorado-informativa', component:  BoletoDoradoInformativoComponent , canActivate: [UtmsGuard]},
    { path: 'boleto-dorado/:codigo', component:  BoletoDoradoComponent , canActivate: [UtmsGuard]},
    { path: 'boleto-dorado-premiados/:codigo', component:  GoldenTicketComponent , canActivate: [UtmsGuard]},
    { path: 'difiere-compras/:codigo', component:  GiveawayDifiereComponent , canActivate: [UtmsGuard]},
    { path: 'difiere-compras-hey-pro/:codigo', component: DifiereComprasHeyProComponent, canActivate: [UtmsGuard] },
    { path: 'giveaway-participacion-medalia/:codigo', component: GiveawayMedaliaComponent, canActivate: [UtmsGuard] },
    { path: 'giveaway-catar/:codigo', component: GiveawayCatarInteresComponent, canActivate: [UtmsGuard] },
    { path: 'giveaway-ahorro', component: GiveawayAhorroCategoriasComponent, canActivate: [UtmsGuard]},
    { path: 'registro-embajadores', component: GiveawayRegistroEmbajadoresComponent, canActivate: [UtmsGuard]}
];


export const PromosRouting = RouterModule.forChild(app_routes);
