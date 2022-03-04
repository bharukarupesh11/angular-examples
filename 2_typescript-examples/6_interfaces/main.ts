/** Let's see how we can use custom types in a typescript using interface. */



/** Before we use the concept of interface let's first understand the problem here. 
 *  Let's assume that this drawPoint function is doing some complex operation and it requires the multiple
 *  properties like below(x, y, a, b, c, d, e) etc. 
 * 
 *  It's a bad practice to pass these many parameters to a function and we shall avoid it everytime. 
 *  In the situation like this it's very likely that a group of this parameters may be all of them belongs to
 *  a single concept. 
 *      Eg. A car has so many different properties. We don't want to pass all those properties to a function 
 *  like driveCar(). Instead, we want to encapsulate them inside an object and only pass that one object here.
 *  So, in this example, instead of passing properties individually we shall pass a point object.  
 * 
 */
// let drawPoint = (x, y, a, b, c, d, e) => {
    // algorithm to draw point goes here...
// }

/** Now, instead of defining an interface we could've directly passed an object to the drawPoint(). 
 *  But, there was a problem i.e.
 *      1. The chances are we could've passed anything in that object and compiler won't give us error
 *          Eg. 
 *          // Inline type annotation for point argument of function of type Object
 *          let drawPoint = (point: {}) => {
 *               // algorithm to draw point goes here...
 *           }
 *           
 *          drawPoint({
 *              x: 1,
 *              y: 2,
 *              name: 'rupesh'
 *          }); // this is logically wrong but syntactically right. That's why this is not a preferred way
 * 
 * So, theh preferred way is to define an interface and give the function argument a type as 'Point' instead
 * of '{}'
 */




// With this interface we're defining the shape of an object. 
interface Point {
    x: number, 
    y: number
}

let drawPoint = (point: Point) => {
    // algorithm to draw point goes here...
    console.log('Drawing an object...!!');
}

// Calling a function 
drawPoint({
    x: 1,
    y: 2
});
