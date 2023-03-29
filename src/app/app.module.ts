import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { TravelGuideComponent } from './home/travel-guide/travel-guide.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToursComponent } from './home/tours/tours.component';
import { HotelsComponent } from './home/hotels/hotels.component';
import { AccomodationComponent } from './home/accomodation/accomodation.component';
import { SwiperModule } from 'swiper/angular';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';
import { ModalComponent } from './modal/modal.component';
import { MapComponent } from './home/map/map.component';
import { ContactComponent } from './home/contact/contact.component';




const appRoutes: Routes = [
  { path: 'tours', component: ToursComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'what-to-do', component: WhatToDoComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
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
    MapComponent,
    ContactComponent,
  
   
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SwiperModule,
  
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
