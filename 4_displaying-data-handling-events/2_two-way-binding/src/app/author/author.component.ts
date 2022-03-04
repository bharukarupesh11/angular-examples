import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  email = "me@example.com";
  text = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident voluptatibus atque placeat, natus quos aut minus, id veniam nam quis est adipisci accusamus molestiae quasi hic voluptatem sapiente eos praesentium repellendus blanditiis voluptatum cupiditate quibusdam! Esse a molestiae, aliquid enim maiores voluptas ratione deleniti, vero vel saepe expedita voluptatem.
  `;
  author = {
    name: "rupesh",
    book: "THE COMPLETE GUIDE",
    noOfBooks: 12345,
    rating: 4.324,
    bookPrice: 190.95,
    releaseDate: new Date(2021, 3, 1)
  };

  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  twoWayBinding() {
    console.log(this.email);
  }

  ngOnInit(): void {
  }

}
