import { AppErrorHandler } from './common/app-error-handler';
import { HttpClientModule } from '@angular/common/http';

import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // angular CLI add AppRoutingModule to the AppModule's imports array
    FormsModule,
    ReactiveFormsModule, // To bind formGroup directives used inside signup-form.component.html 
    HttpClientModule
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler} // With this object we're telling angular that wherever you're using ErrorHandler class, instead use this new class 'AppErrorHandler'
  ], // register all the dependencies that components in this module is dependent upon. 
  bootstrap: [AppComponent]
})
export class AppModule { }


/** Note: 
 *    1. When you register a dependency as a provider in a module, angular will create single instance of that class
 *    for that entire module. 
 * 
 *    So, imagine, in this module we have 100 components and 50 of this components need the CoursesService. 
 *    In the memory we are going to have only a single instance of CoursesService and angular will pass the 
 *    same instance to all the 50 components. 
 * 
 *    2. Routing:
 *        Reference for complete guide: https://angular.io/guide/router
 *        
 *        a. angular CLI registers the AppRoutingModule to the AppModules import section above when we create the 
 *           angular project using angular CLI with routing enabled.
 */