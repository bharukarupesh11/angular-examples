import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private url = 'https://abcdjsonplaceholder.typicode.com/posts'; // to simulate a unhandled exception 
  
  /** because of dependency injection we've added this @Inject(String) for our primitive type
   *  Reference: 
   *  1. https://angular.io/errors/NG2003
   *  2. https://stackoverflow.com/questions/60801513/angular-9-error-ng2003-no-suitable-injection-token-for-parameter-url-of-cla
  */
  constructor(@Inject(String)private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource){
    // return throwError(new AppError()); // intentionally throwing error to check rollback scenario of new item added to the list.
    
    return this.http.post(this.url, JSON.stringify(resource)) // converting json object to string
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    // we could've used put() method here but we've used patch() method. The difference between both is,
    // we use the patch method to update only a few properties in an object. So, instead of sending the complete
    // representation of that object to the server, we send only the properties that should be modified. 
    return this.http.patch(this.url +'/' +resource.id, JSON.stringify({isRead: true}))
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    // return throwError(new AppError()); // intentionally throwing error to check rollback scenario of deleted item of the list.

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
 * The catchError is a pipeable operator. We can use it in a Pipe method 
 * similar to the other operators like map, filter etc.
 * 
 * RxJS(Reactive Extensions for Javascript) pipe() method:
 * You can use pipes to link operators together. Pipes let you combine multiple functions into a single function. 
 * The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, 
 * when executed, runs the composed functions in sequence.
 * 
 *    Reference: https://angular.io/guide/rx-library
 * 
 * Note: The pipe() function is also a method on the RxJS Observable. So, in our above example, all our http methods
 *       return Observable and that's why we've directly used pipe() method on that observable instead of importing 
 *       it from the rxjs/operators module.
 *      
 *        If, our http methods get, put, post, delete etc. had not returned an observable then we had to import 
 *        pipe operator similar to the throwError and catch operators from rxjs library. 
 */