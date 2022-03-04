/** In the last example: 6_interfaces
 *  We've used an interface to define the shape of a Point object but there's a problem with this implementation.
 *
 *  In object oriented programming languages, we've a concept called Cohesion which basically means things that
 *  are related should be part of one unit. They should go together.
 *
 *  Now, in the previous interface example, on the top we've used an interface to define the shape of a Point
 *  object and below that we've a standalone function and this is where we've violated the Cohesion principle.
 *
 *  So, the concept of drawing a point is highly related to the structure of a point. It should not be a separate
 *  function. Now, if you're going to build a utility library for working with points. Chances are we're going
 *  to create an another function as,
 *
 *  let getDistance = (pointA: Point, pointB: Point) => {
 *      // ....
 *  }
 *
 *  Again we've violated the cohesion principle, we've 2 functions hanging in the air separate from the Point
 *  object. Since, these concepts are highly related they should be a part of one unit.
 *
 *  In object oriented languages, we call that unit a Class.
 *
 *  Class: A class is a blueprint which groups the variables(properties) and functions (methods) that are
 *         highly related.
 *
 *  Now, unfortunately, we can't move these 2 functions inside our interface. Because, interfaces are purely for
 *  declarations. They can not include an implementation. In other words we can not have an algorithm for
 *  calculating the distance between 2 points or drawing a points inside the interface. But, what we can do
 *  instead, is to add a function in our interface i.e. function declaration as below,
 *
 *      interface Point{
 *          x: number,
 *          y: number,
 *          draw: () => void  // draw is a function that returns nothing
 *      }
 *
 *      Note: void is used because, draw function returns nothig.
 *
 *  So, with interface we only have the signature of a function but not the implementation.
 *
 *  So, what should we do to apply the cohesion principle? - Change the interface to a class as below,
 */
var Point = /** @class */ (function () {
    // Constructore: '?' question mark makes the parameter optional. Once we make a parameter optional, all the other parameters on the right side of that parameter should also be optional. This is a rule by typescript and a lot of other programming languages. 
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods: By default public
    Point.prototype.draw = function () {
        // Impelementation goes here...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point(1, 2); // 'point' is an object here
point.draw();
var point2 = new Point(); // Because of optional parameters in constructors we're able to create an object without passing any parameter here. 
// Note: In typescript we also have a concept called property which is different than the field.
/** An object is an instance of a class. As a metaphore, think of the concept of a human. Human could be a
 *  class but when we create instances of this class as: John, Bob, Marry etc. these are all objects. */
/** Constructor: This is a method which is called automatically by the compiler when we create an object of a class. */
/** Access Modifier: An access modifier is a keyword that we can apply to the member of a class to control
 *                   it's acess from the outside of that class. In typescript we have 3 types of access modifiers
 *                   as below,
 *                      public, private, protected
 *
 *                  Note:
 *                     - By default all the members are public.
 *                     - We can use access modifiers for fields as well as functions of our class
 */ 
