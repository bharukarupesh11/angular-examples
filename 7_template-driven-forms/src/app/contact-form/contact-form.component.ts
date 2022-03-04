import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ];

  log(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f); // Will print the entire ngForm object
    console.log(f.value); // extracting the value property of ngForm object
  }

}
