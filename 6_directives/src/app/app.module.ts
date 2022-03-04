import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';


@NgModule({
  // In the declaration section, we register all the Components, Pipes and Directives classes. 
  declarations: [
    AppComponent,
    FavoriteComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // To bind ngModel inside author.component.html for two way binding
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