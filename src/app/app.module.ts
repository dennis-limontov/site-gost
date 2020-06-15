import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './menu/main-page/main-page.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { GoodsComponent } from './menu/goods/goods.component';
import { ServicesComponent } from './menu/services/services.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: MainPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'services', component: ServicesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    GoodsComponent,
    ContactsComponent,
    ServicesComponent,
    PortfolioComponent      
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
