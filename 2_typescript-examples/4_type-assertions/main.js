/** Whenever we initialize our variable right at the time of declaration, it becomes easy for the
 *  typescript to know about the type of a variable. So, whenever we want to perform some operations
 *  on that variable we can immediately see the inbuilt function through the intellisence of typescript
 *  compiler.
 *
 *  The intellisense shows the built in methods for that type and other utilities.
 *
 *  However, whenever, we initialize the variable on the next line after our declaration, the typescript
 *  compiler gets little confused about the type of a variable and that type we need to specify the type
 *  as an assertion for the compiler to sense it.
 *
 *  Look at the example below,
 */
var message = 'abc'; // initialization at the time of declation 
var endWithC = message.endsWith('c'); // Note: Here, tsc compiler immediately showed us the tooltip with utility methods for the string type. 
// 2. Declaration of variable on the first line and then initialization on the second line. 
var username;
username = "Anil";
// let endsWithL = (<String>username).endsWith('l'); // Type Assertion - This is mostly used
// let startsWithA = (username as String).startsWith('A'); // Type Assertion - Another way
// This way we specify the type of variable to let the tsc compiler know about the type of a variable. 
