import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

 

  location = "Hotel+Europe,Sarajevo";
  apiKey = "AIzaSyBbpucpFe_SpT0suMgubOt_gI4EvaZrthE";
  url!: SafeResourceUrl;

 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const unsafeUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.location}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  

}
