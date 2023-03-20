import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../../../assets/data/articles';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  articles = ARTICLES;

  constructor() { }

  ngOnInit(): void {
  }

}
