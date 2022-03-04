import { ErrorHandler } from "@angular/core";


/** This is a global error handler class.
 *  We've registered this class in angular.module.ts and suppressed the ErrorHandler class. 
 */
export class AppErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        // Use toast notification in real world applications instead of alerts
        alert('An unexpected error occurred.'); 

        // log this error to the server instead
        console.log('Inside get posts:', error);
    }
}