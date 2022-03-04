import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  // private url = 'https://abcdjsonplaceholder.typicode.com/posts'; // to simulate a unhandled exception

  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}

/**
 * Error Handling Reference: 
 *  https://www.techiediaries.com/angular-12-tutorial-example-rest-crud-http-get-httpclient/
 * 
 * Note: 
 * The catchError is a pipeable operator. We can use it in a Pipe method similar to the other operators 
 * like Map, etc.
 * 
 * RxJS(Reactive Extensions for Javascript) pipe() method:
 * You can use pipes to link operators together. Pipes let you combine multiple functions into a single function. 
 * The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, 
 * when executed, runs the composed functions in sequence.
 * 
 * Reference: https://angular.io/guide/rx-library
 * 
 */