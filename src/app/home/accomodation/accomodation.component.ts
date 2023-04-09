import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
// import SwiperCore, {Autoplay, Pagination, Navigation } from "swiper";
// import Swiper from "swiper";
// SwiperCore.use([Autoplay, Pagination, Navigation]);
import { ACCOMODATIONS } from '../../../assets/data/articles';


import { environment } from 'src/environments/environment.prod';




@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss'],
  encapsulation: ViewEncapsulation.None,

})


export class AccomodationComponent implements AfterViewInit{  

  
  // swiper: Swiper | undefined;

  accommodations =  ACCOMODATIONS;

  isCarousel = false;


  
 

  ngAfterViewInit() {
    // this.swiper = new Swiper('.swiper', {
     
    //   direction: 'horizontal',
    //   loop: true,

    //   autoplay: {
    //     delay: 3000, 
    //     disableOnInteraction: false 
    //   },
      
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
      
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // });   
   
  } 

  

  openCarousel() {   
      this.isCarousel = true;    
  }
  
  

  closeCarousel(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.swiper')) {
      this.isCarousel = false;
    }
  }
  


}
