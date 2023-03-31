import { Component, HostListener, OnInit } from '@angular/core';

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
  }
  
  isClickInside(target: any): boolean {
    const currencyElement = document.querySelector('.currency');
    const dropdownElement = document.querySelector('.currency-dropdown');
    return (currencyElement !== null && currencyElement.contains(target)) || (dropdownElement !== null && dropdownElement.contains(target));
  }
  

  constructor() {}

  ngOnInit() {}
 
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

