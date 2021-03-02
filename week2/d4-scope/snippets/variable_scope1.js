/* Variables & Scope Code Demo Part 1 */

/*********** Problem 1 ***********/
let apple = 'apple';
console.log(apple);
/* 
What will print to the console?
Answer:
*/
/*********** Problem 2 ***********/
function sayPotato() {
    let potato = 'hello this is potato';
    console.log(potato);
}
sayPotato();
// console.log(potato);
/* 
What will print to the console?
Answer:
What error will occur if we comment in console.log(potato);
Answer:
*/
/*********** Problem 3 ***********/
let apple2 = 'apple';
function sayApple() {
    console.log(apple2);
}
sayApple();
/* 
What will print to the console?
Answer:
*/
/*********** Problem 4 ***********/
let carrot = 'snake';
if (true) {
    let carrot = 'carrot';
    console.log(carrot);
}
console.log(carrot);
/* 
What will print to the console from the first console.log?
Answer:
What will print to the console from the second console.log?
Answer:
*/
