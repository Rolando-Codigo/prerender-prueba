import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { CookieServices } from './services/cookie.service';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmModalModule } from './components/confirm-modal/confirm-modal.module';

import { CookiesComponent } from './components/cookies/cookies.component';

// import { EmpowermentComponent } from './empowerment/empowerment.component';
// import { StoriesComponent } from './empowerment/stories/stories.component';
// import { MarkdownModule } from 'ngx-markdown';

import localeEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';

// Legales

// import { SidebarLegalesComponent } from './components/sidebar-legales/sidebar-legales.component';
// import { CuentasHeyProductosComponent } from './legales/cuentas-hey-productos/cuentas-hey-productos.component';
// import { ContratoCreditoHeyComponent } from './legales/creditos-contratos/creditos-contratos.component';

import { HeyBotonCuentaSharedModule } from './shared/heybotoncuentashared.module';
import { OcularModule } from './components/ocular/ocular.module';
import { TransferHttpCacheModule } from '@nguniversal/common';

registerLocaleData(localeEs); 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroImageComponent,
    BenefitsComponent,
    CookiesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    BrowserTransferStateModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    ConfirmModalModule,
    HeyBotonCuentaSharedModule,
    TransferHttpCacheModule
    // OcularModule
  ],
  providers: [
    CookieServices,
    {
      provide: LocationStrategy, 
      useClass: PathLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
