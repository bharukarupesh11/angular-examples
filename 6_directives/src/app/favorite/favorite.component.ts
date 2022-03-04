import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{
  isFavorite: boolean = true;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
