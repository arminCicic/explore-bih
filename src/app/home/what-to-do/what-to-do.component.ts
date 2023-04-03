import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-to-do',
  templateUrl: './what-to-do.component.html',
  styleUrls: ['./what-to-do.component.scss']
})
export class WhatToDoComponent implements OnInit {

  showModal = false; 

  videoUrl = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal() {
    this.showModal = false;
  }

  
  openModal(id: number) {
    const videoUrls: { [key: number]: string } = {
      1: '../../assets/videos/trebinje.mp4',
      2: '../../assets/videos/buna-canal.mp4',
      3: '../../assets/videos/jahorina.mp4',
      4: '../../assets/videos/livno.mp4'
    };
  
    this.videoUrl = videoUrls[id];
    this.showModal = true;
  }
  
  


}
