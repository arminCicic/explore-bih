// import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  modalOpen = false;
  loginModalOverlay: any;


  constructor(private modalService:ModalService) { 
  
  }

  ngOnInit() {
    this.modalService.buttonClick$.subscribe(() => {
     
      this.modalOpen = true;
    });
  }

  onCloseModal(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const loginContainer = document.querySelector('.login-container') as HTMLElement;
    
    if (clickedElement.classList.contains('login-modal-overlay') && !loginContainer.contains(clickedElement)) {
      this.modalOpen = false;
    }
  }
  
  

}
