import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TravelGuideComponent } from './home/travel-guide/travel-guide.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToursComponent } from './home/tours/tours.component';
import { HotelsComponent } from './home/hotels/hotels.component';
import { AccomodationComponent } from './home/accomodation/accomodation.component';
import { SwiperModule } from 'swiper/angular';
import { WhatToDoComponent } from './home/what-to-do/what-to-do.component';
import { ModalComponent } from './modal/modal.component';
import { ContactComponent } from './home/contact/contact.component';
import { RiversComponent } from './home/rivers/rivers.component';
import { TransfersComponent } from './home/transfers/transfers.component';
import { LoginComponent } from './home/login/login.component';




const appRoutes: Routes = [
  { path: 'tours', component: ToursComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'what-to-do', component: WhatToDoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rivers', component: RiversComponent },
  { path: 'transfers', component: TransfersComponent },
  { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TravelGuideComponent,
    FooterComponent,
    ToursComponent,
    HotelsComponent,
    AccomodationComponent,
    WhatToDoComponent,
    ModalComponent,
    ContactComponent,
    RiversComponent,
    TransfersComponent,
    LoginComponent,
  
   
  ],
  imports: [
    [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
