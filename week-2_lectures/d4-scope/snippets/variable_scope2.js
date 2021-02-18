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
What will print to the console from line 10? 
Answer:
What will print to the console from line 12?
Answer:
What error will occur if we comment in line 6?
Answer:
What will print to the console from line 12 if we comment in line 7?
Answer:
*/
/*********** Problem 2 ***********/
function constBlockScoped() {
    let test = 'upper scope';
    //let test = "whoops";
    //test = "whoops";
    if (true) {
        let test = 'lower scope';
        console.log(test);
    }
    console.log(test);
}
constBlockScoped();
/* 
What will print to the console from line 32? 
Answer:
What will print to the console from line 34?
Answer:
What error will occur if we comment in line 28?
Answer:
What error will occur if we comment in line 29?
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
What will print to the console from line 52? 
Answer:
What will print to the console from line 24?
Answer:
What error will occur if we comment in line 50?
Answer:
What will print to the console from line 56 if we comment in line 51?
Answer:
*/
/*********** Problem 4 ***********/
function hoistVar() {
    console.log(dog);
    var dog = 'dog';
}
/* 
What will print to the console from line 71? 
Answer:
*/
/*********** Problem 5 ***********/
function hoistLetAndConst() {
    // console.log(cat);
    let cat = 'cat';
}
/* 
What error will occur if we comment in line 80?
Answer:
*/
