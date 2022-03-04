import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any = [];
  

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe((response: Object) => {
      console.log('Response: ', response);
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    this.posts.splice(0, 0, post); // Optimistic approach: So, as soon as we create the post object, we immediately update the posts array

    input.value = ''; // clearing the input field 

    // calling the server
    this.service.create(post)
      .subscribe(response => {
        post['id'] = response['id']; // extracting the id property from the response object and adding it to the post variable
        // this.posts.splice(0, 0, post); // adding the value to our post array declared above: Pessimistic update(We're updating our posts array upon receiving the successful response from the server)
      }, (error: Response) => {
        this.posts.splice(0, 1); // remove the post from an array if the call to the server fails

        if(error instanceof BadInputError) {
          // this.form.setErrors(error.originalError);
        }
        else{
          throw error; // this will now be handled by our global handler class i.e. AppErrorHandler
        }          
      });
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });

      // removing this error because we don't have any special case similar to create and delete
      // }, (error) => {
      //   alert('An unexpected error occurred.'); // Use toast notification in real world applications
      //   console.log(error);
      // });
  }

  deletePost(post) {
    // Optimistic Approach: First delete the post then give the call to server; if any error occurrs the re-add the post
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1); // go to the index and delete one object

    this.service.delete(post.id) // pass the id that doesn't exists so that it returns the 404
      .subscribe(
        response => {
          // Pessimistic update approach: Updating the UI on getting the successfull response of the server
          // let index = this.posts.indexOf(post);
          // this.posts.splice(index, 1); // go to the index and delete one object
      }, 
      (error: AppError) => {
        this.posts.splice(index, 0, post); // Roolback the changes done above: go to the index, don't delete any item, add a new item

        if(error instanceof NotFoundError)
          alert('This post has already been deleted');
        else{
          throw error; // this will be captured by global error handler
        }
      }); 

    /** Promise Scenario 
    this.service.delete(post.id);*/
  }

}
