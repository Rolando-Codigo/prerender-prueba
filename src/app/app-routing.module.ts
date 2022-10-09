import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**DUDA */
// import { Error404Component } from './error404/error404.component';
// import { UtmsGuard } from './services/utms.guard';


const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./para-mi/parami.module').then((m) => m.ParaMiModule),
    },
    {
        path: '',
        loadChildren: () => import('./personas/personas.module').then((m) => m.PersonasModule),
    },
    {
        path: 'negocios',
        loadChildren: () => import('./negocios/negocios.module').then((m) => m.NegociosModule),
    },
    {
        path: '',
        loadChildren: () => import('./servicios-legales/servicios-lgeales.module').then(m => m.ServiciosLegalesModule ),
    },
    {
        path: 'careers',
        loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule ),
    },
    {
        path: 'nosotros',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule ),
    },
    {
        path: 'terminos-condiciones',
        loadChildren: () => import('./terminos-condiciones/terminos-condiciones.module').then(m => m.TerminosCondicionesModule ),
    },
    {
        path: '',
        loadChildren: () => import('./folletos-informativos/folletos-informativos.module').then(m => m.FolletosInformativosModule ),
    },
    {
        path: 'reportes',
        loadChildren: () => import('./ivr/ivr.module').then(m => m.IvrModule ),
    },
    {
        path: '',

        loadChildren: () => import('./contratos-productos/contratos-productos.module').then(m => m.ContratoProductosModule ),
    },
    {
        path: '',
        loadChildren: () => import('./centro-ayuda-negocios/centro-ayuda-negocios.module').then(m => m.CentroAyudaNegociosModule ),
    },
    {
        path: 'promos',
        loadChildren: () => import('./promos/promos.module').then(m => m.PromosModule ),

    },
    {
        path: '',
        loadChildren: () => import('./centro-ayuda/centro-ayuda.module').then(m => m.CentroAyudaModule ),
    },
    {
        path: '',
        loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module ),
    },
    {
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', useHash: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
