import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.css']
})
export class FormBuilderExampleComponent {
  /*form = new FormGroup({
    name: new FormControl(),
    
    // contact is a sub group in our form
    contact: new FormGroup({
      phone: new FormControl(),
      email: new FormControl()
    }),
    topics: new FormArray([])
  });*/

  form; // initializing it in a constructor using form builder

  /** There is a slightly cleaner way to write the above code using FormBuilder. */
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      // name is a form control in our form
      name: [Validators.required], // shorter way OR fb.controls('', Validators.required) will also work

      // contact is a sub group in our form
      contact: fb.group({
        phone: fb.control([]),
        email: fb.control([])
      }),

      // topics is a form array in our form 
      topics: fb.array([])
    });
  }

  get topics(): FormArray{
   return <FormArray>this.form.get('topics'); // type casting to FormArray
  }
}
