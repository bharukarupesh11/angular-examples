import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private url = 'https://abcdjsonplaceholder.typicode.com/posts'; // to simulate a unhandled exception 
  
  constructor(@Inject(String)private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url +'/' +resource.id, JSON.stringify({isRead: true}));
  }

  delete(id) {
    /** If the post for provided id is not available then it returns the empty object in response */
    console.log(id);
    
    return this.http.delete(this.url +'/' +id)
        .pipe(catchError(this.handleError));


    /* Promise Scenario: Converting observable to promise and returning promise to the consumer of delete() method 
    return this.http.delete(this.url +'/' +id)
        .toPromise()
        .catch(this.handleError);*/
  }


  /** The method is marked private because it is a purely implementation details of PostService.
   *  So we don't want consumer of this PostService class to call this method from the outside.
   * */ 
  private handleError(error:  HttpErrorResponse) {
    console.log('inside handle error method');
    if(error.status === 404)
      return throwError(new NotFoundError());
    else if(error.status === 400)    
      return throwError(new BadInputError(error));
    
    return throwError(new AppError(error));
  }
}

/**
 * Note: 
 * Reusable Data Service:
 * This Data Service class has a reusability(inheritance) purpose. 
 *       Eg. The code in this data service was initially written in a post service class. But, then it is 
 *           realised that, in a real world application we don't have one service. We often have tons of 
 *           services. 
 * 
 *           So, imagine we want to create a service for working with courses endpoints. With this service 
 *           we can create a course, update a course, get all the courses and delete a course. So, we can 
 *           imagine that in our new course service our code is going to look almost identical. 
 * 
 *           So, we're going to have a method call getCourses() instead of getPost() and there we'll call
 *           a get method of the http object, catch errors and pass them to the handleError method. 
 * 
 *           So, we don't want to repeat this same code for all the services that we have. That's we have 
 *           created this parent class called data service. And, this will be inherited by all it's childrens
 *           like PostService, CourseService, AuthorService, TweetService etc. 
 * 
 * 
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