import { AbstractControl } from '@angular/forms';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([]) // We use the FormArray class to work with an array of objects in the form
  });

  get topics() {
    // note: The get() method below returns an "AbstractControl" object and an "AbstractControl" doesn't the push method because the push method is only defined in a FormArray class. So, we've type casted the below Base Class(AbstractControl) to child class FormArray
    return this.form.get('topics') as FormArray; // type casting to FormArray
  }
  
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));

    // clearing the input field after entering one value in it.
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
