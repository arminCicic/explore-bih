import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn () {
    this.showMenu = !this.showMenu
  }

}
