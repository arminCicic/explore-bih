import { AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

import SwiperCore, {Autoplay, Pagination, Navigation, SwiperOptions } from "swiper";
import Swiper from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);






@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss'],
  encapsulation: ViewEncapsulation.None,

})



export class AccomodationComponent implements AfterViewInit{  

  swiper: Swiper | undefined;

 

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
     
      direction: 'horizontal',
      loop: true,

      autoplay: {
        delay: 2000, // time between each slide in milliseconds
        disableOnInteraction: false // prevent autoplay when user interacts with swiper
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

 

  constructor() { }

  ngOnInit(): void {
  }


}
