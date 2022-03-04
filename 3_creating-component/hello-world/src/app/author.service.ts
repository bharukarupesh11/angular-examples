import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors(){
    return ["Author1", "Author2", "Author3"];
  }
}


/** When creating components we decorate the class with the @Component() decorator function but in angular
 *  we don't have a decorator for servivces. 
 * 
 *  So, service is essentially a plain typescript class. 
*/
