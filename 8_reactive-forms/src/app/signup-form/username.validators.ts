import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).trim().indexOf(' ') >= 0)
            return { 'cannotContainSpace': true}; // This is a definition of ValidationErrors type: Reference angular.io

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'rupesh')
                    resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            }, 2000);    
        });

        /** Note: Our shouldBeUnique() validator function will always return null here and the issue here is 
         *        we are dealing with the async operations. So we must have a different signature for such 
         *        validator functions.  */
        // return null; 
    }
}

/**
 * Async Operation:
 * Calling the server is what we clasify as an async operation. 
 * 
 * When we call the server, there is going to be a bit of delay depending on the connection speed like half a
 * second, 1 second or more.. In situations like this, the process that is executing our code doesn't want to
 * block while waiting for the result coming back from the server. Because, if that process blocks, the user 
 * can not interact with the browser. So that process is going to call the server behind the scene and when the
 * result is ready, it's going to display to the user. 
 * 
 * This is what we call an async operation. Async means non-blocking. So, once again the process that executes
 * the code doesn't block while waiting.
 * 
 * 
 * Below are the examples of asynchronous operations:
 * 1. Calling the server(AJAX)
 * 2. Timer Functions
 * 
 * In the method above shouldBeUnique(), we've returned a promise of type ValidationErrors.
 * 
 * So, the point here is, we use promises and observables to work with asynchronous operations. 
 */


