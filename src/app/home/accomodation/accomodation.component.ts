import { AfterViewInit, Component, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
// import SwiperCore, {Autoplay, Pagination, Navigation } from "swiper";
// import Swiper from "swiper";
// SwiperCore.use([Autoplay, Pagination, Navigation]);
import { ACCOMODATIONS } from '../../../assets/data/articles';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';




@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss'],
  encapsulation: ViewEncapsulation.None,

})


export class AccomodationComponent implements AfterViewInit{  

  @ViewChild('scrollTo') scrollTo!: ElementRef;

  apiKey = "AIzaSyBbpucpFe_SpT0suMgubOt_gI4EvaZrthE";
  url!: SafeResourceUrl;
  
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
 

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const unsafeUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.accommodations[0].title}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  changeLocation(index: number) {
    const location = this.accommodations[index];
    const query = `${location.title}`;
    const unsafeUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${query}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);

    const element = this.scrollTo.nativeElement;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
