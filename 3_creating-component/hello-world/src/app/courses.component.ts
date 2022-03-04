import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // we set this to a css selector which means anywhere we've an element like <courses> then angular is going to render the below template inside that courses element. 
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    ` //'<h2>{{ title }}</h2>' // data binding: 
}) // a decorator function to make our class a component class
export class CoursesComponent {
    // Adding data and logic 
    title = "List of courses..!!";
    courses;

    // Dependency Injection: Here, angular will itself create CoursesService for us
    constructor(service: CoursesService) {
        // let service = new CoursesService(); // Bad Approach: Tight coupling of creating CoursesService instance by using new operator 
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

}



/**
 * In order to convert our plain typescript class to a component we need to add some metadata to it that 
 * angular understands. We use a decorator to achieve this. 
 * 
 * In angular we've a decorator called "@Component" to make the class a component. And, this is present in '@angular/core' liabrary. 
 * 
 * Selector: So, anywhere, we've an element like 'courses', angular is going to render the template('<h2>Courses</h2>') 
 *           for this element. 
 * 
 * Dependency Injection: Dependency injection means injecting or providing the dependencies of a class 
 *                       into it's constructor. In order to work angular dependency injection in our 
 *                       constructor above, we need to register the "CoursesService" dependency in the 
 *                       "provider" section of "app.module.ts" module of angular.
 * 
 *                       When we register the dependency as a provider in the app-module, angular will create 
 *                       a single instance of that class for that entire module.
 *                       Eg. imagine that we've 100 components registered in our app-module and 50 of this 
 *                           components need the CoursesService. In the memory we're going to have only a single
 *                           instance of CoursesService and angular will pass the same instance to all this components.
 *                           This is what we call the 'Singleton Pattern' - So, a single instance of a given 
 *                           object exists in a memory
 */