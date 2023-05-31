import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalOpen = true;
  loginModalOverlay: any;

  constructor(private modalService:ModalService, private router: Router) { }

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
      this.router.navigate(['/home'])
      
    }
  }

  onCancelModal() {
    this.modalOpen = false;
      this.router.navigate(['/home']);
  }

  onLogIn() {
    this.modalOpen = false;
      this.router.navigate(['/home']);
  }

}
