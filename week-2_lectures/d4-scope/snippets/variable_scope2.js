/* Variables & Scope Code Demo Part 2 */

/*********** Problem 1 ***********/
function blockScope() {
    let test = 'upper scope';
    //let test = "whoops";
    //test = "whoops";
    if (true) {
        let test = 'lower scope';
        console.log(test);
    }
    console.log(test);
}
blockScope();
/* 
What will print to the console from the first console.log?
Answer:
What will print to the console from the second console.log?
Answer:
What error will occur if we comment in the first comment?
Answer:
What will print to the console if we comment in the second comment?
Answer:
*/
/*********** Problem 2 ***********/
function constBlockScoped() {
    const test = 'upper scope';
    //let test = "whoops";
    //test = "whoops";
    if (true) {
        const test = 'lower scope';
        console.log(test);
    }
    console.log(test);
}
constBlockScoped();
/* 
What will print to the console from the first console.log?
Answer:
What will print to the console from the second console.log?
Answer:
What error will occur if we comment in the first comment?
Answer:
What error will occur if we comment in the second comment?
Answer:
*/
/*********** Problem 3 ***********/
function varStringMachine() {
    var string = "I'm function scoped!";
    // var string = "I'm a new string"
    // string = "I'm also a new string"
    if (true) {
        var string = "I've been reassigned from within a block";
        console.log(string);
    }
    console.log(string);
}
varStringMachine();
/* 
What will print to the console from the first console.log?
Answer:
What will print to the console from the second console.log?
Answer:
What will print to the console if we comment in the first comment?
Answer:
What will print to the console from the second console.log if we comment
in the second comment?
Answer:
*/
/*********** Problem 4 ***********/
function hoistVar() {
    console.log(dog);
    var dog = 'dog';
}
/* 
What will print to the console? 
Answer:
*/
/*********** Problem 5 ***********/
function hoistLetAndConst() {
    // console.log(cat);
    let cat = 'cat';
}
/* 
What error will occur if we comment in the first comment?
Answer:
*/
