import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // Registering component with app module
    CourseComponent, // Registering component with app module
    AuthorComponent // Registering component with app module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CoursesService, 
    AuthorService
  ], // register all the dependencies that components in this module is dependent upon. 
  bootstrap: [AppComponent]
})
export class AppModule { }


/** Note: 
 *    When you register a dependency as a provider in a module, angular will create single instance of that class
 *    for that entire module. 
 * 
 *    So, imagine, in this module we have 100 components and 50 of this components need the CoursesService. 
 *    In the memory we are going to have only a single instance of CoursesService and angular will pass the 
 *    same instance to all the 50 components. 
 */