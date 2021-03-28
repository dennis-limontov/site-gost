import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { GoodsComponent } from './menu/goods/goods.component';
import { ServicesComponent } from './menu/services/services.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';
import { RecallComponent } from "./menu/recall/recall.component";

import { OwlModule } from 'ngx-owl-carousel';
import { ButtonUpComponent } from './components/button-up/button-up.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';

// определение маршрутов
const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ContactsComponent,
  },
  {
    path: 'goods',
    pathMatch: 'full',
    component: GoodsComponent,
  },
  {
    path: 'portfolio',
    pathMatch: 'full',
    component: PortfolioComponent,
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent,
  },
  {
    path: 'recall',
    pathMatch: 'full',
    component: RecallComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    OwlModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslocoRootModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    GoodsComponent,
    ContactsComponent,
    ServicesComponent,
    PortfolioComponent,
    ButtonUpComponent,
    RecallComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
