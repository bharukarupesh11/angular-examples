/** When creating components we decorate the class with the @Component() decorator function but in angular
 *  we don't have a decorator for servivces. 
 * 
 *  So, service is essentially a plain typescript class. 
*/

export class CoursesService {   
    getCourses() {
        // consume http service here.        
        return ["course1", "course2", "course3", "course4"];
    }
}