/* Scope Lecture */

/*********** Problem 1 ***********/
const bear = { sound: 'rawr' };
/* 
What is the scope?
Answer: 

*/
/*********** Problem 2 ***********/
function bearMaker(name) {
    return "I'm " + name + 'the bear Rawr!';
}
/* 
What is the scope? 
Answer:
*/
/*********** Problem 3 ***********/
if (true) {
    let candle = 'fire!';
    console.log(fire);
}
/* 
What is the scope?
Answer:
*/
/*********** Problem 4 ***********/
let newBear = 'Lewis';
function bearMaker(name) {
    let bearMaker = "I'm " + name + 'the bear Rawr!';
    return bearMaker;
}
console.log(bearMaker('Miley'));
/* 
What variables does `bearMaker` func have access to? 
Answer:
*/
/*********** Problem 5 ***********/
function garden() {
    let flower = 'lily';

    function flowerBed() {
        console.log(flower);
    }
    flowerBed();
}
garden();
/* 
What will print to the console? 
Answer:
*/
/*********** Problem 6 ***********/
function garden2() {
    let flower = 'lily';

    function flowerBed() {
        let flower = 'rose';
        console.log(flower);
    }
    flowerBed();
}
garden2();
/* 
What will print to the console? 
Answer:
*/
