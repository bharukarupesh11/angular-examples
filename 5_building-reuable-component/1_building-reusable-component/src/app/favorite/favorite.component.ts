import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'] // 2nd approach of marking property as input property
  // outputs: ['change'] // 2nd approach of marking property as output property
  // encapsulation: ViewEncapsulation.Emulated // by default angular set our view encapsulation to Emulated: This will prevent our style from leaking outside of our component
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean; // used alias name 'is-favorite'
  @Output('change') click = new EventEmitter(); // used alias name 'change'
  title: string = "";

  onClick() {
    this.isFavorite = !this.isFavorite;

    // Passing data to our event: Passing boolean value here. 
    // this.change.emit(this.isFavorite); // Raising custom event from our component: The emit() will raise an event to notify others that something has happened 

    // Passing data to our event: Passing object here.
    this.click.emit({newValue: this.isFavorite}); // Raising custom event from our component: The emit() will raise an event to notify others that something has happened 
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}


/**
 *    encapsulation: ViewEncapsulation.Emulated // by default angular set our view encapsulation to Emulated
 *    encapsulation: ViewEncapsulation.None // This will leak the css style outside of our FavoriteComponent  
 * 
 *    Note: If you sent view encapsulation to 'None' then the glyphicon-user will also get red color style.
 */
