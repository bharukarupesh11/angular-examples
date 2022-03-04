import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderExampleComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule // To bind formGroup directives used inside signup-form.component.html 
  ],
  providers: [], // register all the dependencies that components in this module is dependent upon. 
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