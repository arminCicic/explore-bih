import { Component, HostListener, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  menuIcon = true;
  showMenu = false;
  showDropdown = false;
  
  public selectedCurrency: string = 'USD';

  @HostListener('document:click', ['$event'])

  onClick(event: { target: any; }) {
    if (!this.isClickInside(event.target)) {
      this.showDropdown = false;
    }

    if (!this.isMenuClickInside(event.target)) {
      this.showMenu = false;
    }
   
  }
  
  isClickInside(target: any): boolean {
    const currencyElement = document.querySelector('.currency');
    const dropdownElement = document.querySelector('.currency-dropdown');
    return (currencyElement !== null && currencyElement.contains(target)) || (dropdownElement !== null && dropdownElement.contains(target));
  }

  isMenuClickInside(target: any): boolean {
    const menuElement = document.querySelector('.dropdown-menu');
    const menuIconElement = document.querySelector('.menu');
    return (menuElement !== null && menuElement.contains(target)) || (menuIconElement !== null && menuIconElement.contains(target));

    
  }

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  btnClick() {   
    this.modalService.emitButtonClick();    
   }
 
  changeCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.toggleCurrency();
  }

  toggleCurrency() {
    this.showDropdown = !this.showDropdown;
  }

  onCurrencyClick() {
    this.showDropdown = true;
  }

  toggleBtn() {
    this.menuIcon = !this.menuIcon;
    this.showMenu = !this.showMenu;
  }

  



}
