var count = 5;
// count = 'a';  // this code is perfect in javascript but in typescript due to the strict type nature it's giving compile time error
/** Note: Code like this is very likely that is going to break at somepoint in the future because chances are we're
 *        going to use this count variable inside a for block. So, our program is going to break at runtime.
 *        we dont want this to happen right? that's one of the reason it's better to write the same code in the
 *        typescript so at least we can get a warning during the compilation step.
 *
 *        If you hover the mouse pointer over the count variable you can see the tooltip with :(colon) and number.
 *        So, this indicates the type of count variable in our program. So, here the typescript compiler inferred the
 *        type of this variable that it should be a number because we set it to number 5.
 *
 *        What if we declare the type without initializing it? - It's type is 'any'
 */
var a; // variable of type any
a = 1; // Fine 
a = true; // Fine
a = 'a'; // Fine
// Type Annotations: Means declaring a variable by mentioning it's data type
var age; // variable of type number only. Explicitely specified the type to avoid 'any' type of variable.
var isYoung;
var firstName;
var anyValue;
var arrayVariable = [1, 2, 3]; // initialized an array with numeric values
var anyArray = [1, true, 'a'];
/* Related Variables with Fixed Values : Replaced this with enum types
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;*/
/** In terms of the values the first element here automatically gets the value 0(zero) & each subsequent element
 *  gets an incremented value. So we dont have to explicitely set this. But as a best practice, it's better to do so.
 *  Because, chances are sometime in the future, someone may come here and add a new color here like Purple before Blue
 *  and then Purple will automatically become 2 and the Blue become 3. So, it may break parts of our application. */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log('Background Color: ', backgroundColor);
