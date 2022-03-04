/** There're 2 ways to declare the variable. 
 *  The 'let' keyword is also being added to the javascript. So, js has 2 different versions i.e.
 *  ES5 (ECMAScript 5): supported by all browsers
 *  ES6(introduced in 2015): Introduced the 'let' keyword
 */

/** In javascript, the variable declared with a var keyword is scoped to the nearest function. 
 *  Eg. In the below function, the nearest function for var keyword is printMessage(), so the 
 *      variable will be accessible in the entire printMessage() function. 
 */
function printMessage(){
    // for(let i=0; i<5; i++) {
    for(var i=0; i<5; i++) {
        console.log(i);
    }
    console.log("Finally: ", i);
}

printMessage();


/** Note: Now, change the var with let and you will see the error for an 'i' outside the for block. 
 *        This is the beauty of typescript. This prevents lot of issues later down the road. 
*/

/** Important: 
 *  Note that, even though we have error in our function with 'let' keyword, still the typescript compiler 
 *  compiles our code to javascript. But, the important point here is, it converts the code to ES5 i.e. the
 *  older version of javascript. 
 */
 