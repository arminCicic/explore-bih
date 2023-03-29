import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

 

  locations = [
    { name: 'Hotel Hills Sarajevo' },
    { name: 'Hotel Radon Plaza' },
    { name: 'Hotel Grand Sarajevo'},
    { name: 'White Fortress'},
    { name: 'Avaz Twist Tower'},
    { name: 'Sarajevo City Center'},
    { name: 'War Childhood Museum'},
    { name: 'Tabija Zmajevac'},
    { name: 'Hotel Grand Sarajevo'},
    { name: 'Hotel Grand Sarajevo'}
  ];

  apiKey = "AIzaSyBbpucpFe_SpT0suMgubOt_gI4EvaZrthE";
  url!: SafeResourceUrl;

 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const unsafeUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.locations[0].name}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  changeLocation(index: number) {
    const location = this.locations[index];
    const query = `${location.name}`;
    const unsafeUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${query}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  

}
