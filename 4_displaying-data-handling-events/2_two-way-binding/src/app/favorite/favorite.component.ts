import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  title: string;

  constructor() { 
    this.isFavorite = true;
    this.title = "";
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {
  }

}
