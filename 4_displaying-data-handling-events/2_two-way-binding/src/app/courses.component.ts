import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // we set this to a css selector
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    ` //'<h2>{{ title }}</h2>' // data binding: 
}) // a decorator function
export class CoursesComponent {
    // Adding data and logic 
    title = "List of courses..!!";
    courses;

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

}



/**
 * In order to convert our plain typescript class to a component we need to add some metadata to it that angular understands.
 * We use a decorator to achieve this. 
 * 
 * In angular we've a decorator called component to make the class a commponent. And, this is present in '@angular/core' liabrary. 
 * 
 * Selector: So, anywhere, we've an element like 'courses', angular is going to render the template('<h2>Courses</h2>') 
 *           for this element. 
 * 
 */