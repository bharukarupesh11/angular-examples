import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ], UsernameValidators.shouldBeUnique),
    'password': new FormControl('', Validators.required)
  });

  // This getter method looks like a method but this is a property that we can directly access in our html template like 'username'. We've accessed this in a validation div like "username.touched"
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
  /**  call server here to check if this username and password is valid or not 
    let isValid: boolean = authService.login(this.form.value);
    if(!isValid){
      this.form.setErrors({
        'invalidLogin': true
      }); // with this we can set errors at the form level

      // this.username.setErrors({}); // setting the errors on a particular formControl object
    } */

    this.form.setErrors({
      'invalidLogin': true
    }); // with this we can set errors at the form level
  }

}
