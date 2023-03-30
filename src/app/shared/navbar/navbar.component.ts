import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuIcon = true;
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn () {
    this.menuIcon = !this.menuIcon;
    this.showMenu = !this.showMenu;
  }

}
