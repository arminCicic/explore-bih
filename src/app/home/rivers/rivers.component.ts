import { Component, OnInit } from '@angular/core';
import { RIVERS } from '../../../assets/data/articles';

@Component({
  selector: 'app-rivers',
  templateUrl: './rivers.component.html',
  styleUrls: ['./rivers.component.scss']
})
export class RiversComponent implements OnInit {

  showModal = false;

  rivers =  RIVERS;

  selectedRiver: any;

  constructor() { 
    this.selectedRiver = null;
  }

  ngOnInit(): void {
    
  }

  onCloseModal() {
    this.showModal = false;
    this.selectedRiver = null; // clear the selectedRiver property
  }

  
  openModal(id: number) {
    const river = this.rivers.find(r => r.id === id);
    if (river) {
      this.selectedRiver = river;
      this.showModal = true;
      console.log('Selected river:', this.selectedRiver);
    } else {
      console.warn(`No river found with id ${id}`);
    }
  }
  

  
  

}
