import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  imgUrl = "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg";
  colSpan = 2;
  isActive = true;
  
  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  onSave($event){
    $event.stopPropagation(); // to stop the event bubbling: It's not going to hit the div handler
    console.log("Button was clicked", $event);
  }

  onDivClicked() {
    console.log("Div was clicked");
  }

  onKeyUp(/*$event*/) {
    /* OLD Approach of writing code:
      if($event.keyCode === 13) 
        console.log("ENTER was pressed.");*/

    console.log("ENTER was pressed.");
  }

  onKeyEnter(/*$event*/ email) {
    // console.log($event.target.value);
    console.log(email);
  }

  ngOnInit(): void {
  }

}
