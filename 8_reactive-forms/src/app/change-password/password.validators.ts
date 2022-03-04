import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        // We've skipped reject parameter of promise here because we're not going to use that
        return new Promise((resolve) => {
            if(control.value !== '1234')
                resolve({invalidOldPassword: true});
            else 
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return {passwordsShouldMatch: true};
        
        return null;
    }
}