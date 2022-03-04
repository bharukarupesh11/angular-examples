import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors(){
    return ["Author1", "Author2", "Author3"];
  }
}
