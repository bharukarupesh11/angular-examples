/** Whenever we want to access the private fields of our class outside of the class, we always add
 *  getter and setter methods to those fields and gives the user readonly access to those properties
 *  through these methods. 
 * 
 *  But, while accessing these properties we need to call getter and setter function as below, 
 *      getX();   // to get the value of field x
 *      setX(10); // to set the value of field x
 * 
 *  But, what if we want to access the fields same as the field we access using the object notation as below
 *  intead of calling a function?
 *      let x = point.x // getter 
 *      point.x(40); // setter
 * 
 *  For this case we use properties concept with the 2 inbuilt keywords as 'get' and 'set'.
 * 
 *  Note: A property looks like a filed from the outside but internally it's really a method in the class. Well, 
 *        more accurately it's either one method which is a getter/setter or a combination of getter and setter.
 */

class Point {
    // Access modifiers in constructor parameters: The typescript compiler automatically declares this x and y variable for us outside the constructor as seen in 7_Classes example
    constructor (private _x?: number, private _y?: number) {

    }

    draw() {
        console.log('Drawing point');
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if(value < 0)
            throw new Error('value cannot be less than 0.');
        
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value){
        if(value < 0)
            throw new Error('value cannot be less than 0.');
            
        this._y = value;
    }
}

let points = new Point();
let x = points.x; // by applying 'get' and 'set' keyword to our getter and setter we accessed the 'x' getter same as we access the field. No need to call it like a function. 
points.x = 123;