import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './menu/info/info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { GoodsComponent } from './menu/goods/goods.component';
import { ServicesComponent } from './menu/services/services.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
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
    path: 'info',
    pathMatch: 'full',
    component: InfoComponent,
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
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
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
    InfoComponent,
    MainPageComponent,
    GoodsComponent,
    ContactsComponent,
    ServicesComponent,
    PortfolioComponent,
    ButtonUpComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
