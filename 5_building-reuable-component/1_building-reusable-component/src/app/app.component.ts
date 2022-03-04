import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  
  post = {
    isFavorite: true
  };

  tweet = {
    body: "tweet body...",
    isLiked: true,
    likesCount: 10
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed', eventArgs);
  }
}
