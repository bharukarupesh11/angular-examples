import { ErrorHandler } from "@angular/core";


/** This is a global error handler class responsible for handling all the 
 *  unexpected errors or exceptions in our application. 
 * 
 *  We've registered this class in "angular.module.ts" and suppressed the ErrorHandler class. 
 */
export class AppErrorHandler implements ErrorHandler{
    // Method
    handleError(error: any): void {
        // Use toast notification in real world applications instead of alerts
        alert('An unexpected error occurred.'); 

        // log this error to the server instead of console log
        console.log('Inside get posts:', error);
    }
}