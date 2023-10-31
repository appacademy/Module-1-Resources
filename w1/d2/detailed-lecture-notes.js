
/*

  Intro to JavaScript

  What is Javascript?
    * JavaScript is a programming language that was originally developed to increase user interactivity with websites, and has grown to become a useful programming language in the backend of applications as well. JavaScript is now one of the most popular and widely used programming languages for building web applications today.

  Why is javascript so useful?
    * Perform asynchronous task
    * Render dynamic content
    * Enables more responsive, performant websites
    * Integrates seamlessly with two core languages of web development, HTML and CSS

   * We want to learn JavaScript!

  What is learning?
    * 1. Learning new skills and being able to apply them in the future
    * 2. Retaining useful information

  Active vs Passive Learning
    * Active learning  - lets you engage, get hands on!
    * Passive learning -  watching not applying

  We will be doing both!

  * Passive followed by active learning!
  * Lecture followed by self practice

  Desirable difficulty
    * it's challenging, but not discouraging
    * Possible given proper skill level
    * Hard but not too hard
    * But also not easy
    * Find a Happy Medium

  Spaced Repetition
    * Repeating concepts with time between
    * Rest your brain
    * Pomodoro Method


  What is debugging?
    * Figuring out what is wrong with the code
    * Identifying and solving an error

  How do we debug?
    * console.log() - show them on mdn
    * if you want to see something on the screen use a console.log
    * debugger
    * go line by line
    * developer tools
    * error messages
    * trial and error


  How to style/format?
    * Style Guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Whats the deal with semicolons?
    * JS Automatic semicolon insertion
    * semicolons Js doesn't strictly need semi colons because its smart, it uses something called automatic semicolon insertion, But it is best practice to use them for finishing statements
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion


  Lets write some code!
*/

// single line comment - // - double back slash

/*
this
is
a
multiline
comment
delineated by: - // forward slash + asterisk
*/

// Comments!
// * use comments to explain what your code is doing
// * creating a plan using polya's framework!
// * notes
// * when reviewing; try and write out what each line of code means; if you're unable to explain it; research on mdn! Reach out for help!
// * command  + / - quickly comment out code - mac
// * ctrl + / - windows
// * you can use comments to comment out code you dont want to be ran

// we use console.log whenever we want to see something on screen
console.log("Welcome to app academy! :)");

// Preview on numbers
// * console.logs can be used to see what an expression evaluates too
// * an expression is anything that results in a value
// * a console.log will first evaluate an expression than print its value
// * expression: must first be evaluated/executed to a single value
// * value: data type: number, string, boolean, array, object,
console.log(1 + 2 + 3); //6

// preview on variables
let name = "brandon";
// * variable evaluates to what it holds
// * variables are expressions that are waiting to be evaluated to get the value
console.log(name); //brandon

// ! name is an obsolete property of the Window object. When you see a strikethrough on a variable, VS Code knows that it is deprecated.

// * console.log can also take in additional arguments
// * useful for helping you pin down console.logs
console.log("hey look here this is a name ->", name);

/*

  Numbers and Booleans!
  * Use numbers to run math, calculate values, represent an amount

  Numbers!
    * whole numbers
    * decimals
    * negative numbers
    * few other special cases

  What is PEMDAS?
    * Order of operations
    * parentheses, exponents, multiplication, modulo, division, addition, subtraction

    * Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
    * JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
    * A number literal like 37 in JavaScript code is a floating-point value, not an integer.
    * There is no separate integer type in common everyday use. (JavaScript also has a BigInt type, but it's not designed to replace Number for everyday uses. 37 is still a number, not a BigInt.)
    * The JavaScript Number type is a double-precision 64-bit binary format IEEE 754

*/

// What will these expression evaluate too?
console.log(2 + 3 * 12); // 38
console.log(10 - 8 / 2); // 6
console.log(20 / 2); // 10
console.log(1.11 * 3); // 3.33
console.log((4 + 5) / 2); // 4.5

// Modulo
// * returns a remainder

console.log(13 % 5); // 3
//* we divide 5 into 13 twice, there will be 3 as a remainder

console.log(3 % 7); // 3
//* 3 cant divide by 7, we return 3

console.log(12 % 5); // 2
console.log(25 % 6); // 1
console.log(5 % 18); // 5

/*

  Booleans
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  Logical operators
    ! - not (bang)
    && - and
    || - or

  Order of operators
    * not, and, or

    * Logical operators return a boolean

*/

// * What will these expression evaluate too?
console.log(false); // false
console.log(!true); // false
console.log(true || false); // true
console.log(true && false); // false

// DeMorgan's law
// * distribute the sign, and flip the symbol
console.log(!true || !false); //true
console.log(!(true && false)); //true

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// This is not only useful for boolean simplification, but also for general problem solving
// * https://erikmhsiao.github.io/de-morgans-laws/

// can we store a boolean in a variable? YES
let a = true;
let b = false;

// expression will be evaluated then printed to the terminal
console.log(a || b); //true


/*

  Comparison Operators
  * used to compare values, to perform an action

  What are the comparison operators?
    * <, <=, ==, ===, >=, >

  What do they return?
     * A boolean

    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too

*/

console.log(2 < 3); // true
console.log(10 > 5); // true
console.log(10 === 10); // true
console.log(10 == "10"); // true - check just the value
console.log(10 === "10"); // false - check data type and value

// Lexicographically a > b
// 0 1 2 3 4 5...
// a b c d e f...

// type in node man ascii
// https://www.asciitable.com/

// let a = 'a';
// let Z = 'Z'

console.log(a < Z.toLowerCase());
console.log("the value of a: ", a);
console.log("the value of Z: ", Z);
console.log("the value of Z.toLowerCase(): ", Z.toLowerCase());

// How it compares all letters?
// * it loops through the string by index and performs a comparison at each one

/*

  Variables!
    * A variable is a named reference to a value.
    * That way an unpredictable value can be accessed through a predetermined name.
    * Can be used to store the result of an expression
    * Think of it like placing an item in a box

  Value could be
    * string
    * numbers
    * boolean
    * function
    * and more!

  Variable naming guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Variable initialization
    * both declaring and assignment
  Variable declaration
    * declaring the variable
  Variable assignment
    * assigning a value to a variable

  = - is the assignment operator
  * Used to assign and save a value to a variable

  When should you use a variable?
  * When you want to alias data through a specific name
  * Make code more readable
  Cons
  * Uses up the global name space; decide if we want to do that or not

  If we don't assign a variable a value it will default to undefined.

*/

// camelCase
// * variables name descriptive
let variableName; //variable declaration
console.log(variableName);// undefined
variableName = "hello"; //variable assignment

// use the let keyword,
// * followed by variable name,
// * then assignment operator - =
// * then the value to assign to the variable
let variableName2 = "hello 2"; // variable initialization

// * we can store many data types in a variable
let firstName = "brandon"; // string
let age = 27; // number
let isSoftwareEngineer = true; // boolean

// we can store expressions
// * the variable will hold the result of the expression being executed
let math = 1 + 2 + 3;
console.log(math); // 6
console.log("hello " + firstName + "!"); // hello brandon

// If we want to see what a variables holds
// * use console.log
// * use them often!
console.log(firstName); //brandon
console.log(age); //27
console.log(isSoftwareEngineer); //true

// variable reassignment
console.log(age);
// * we can reassign the = assignment operator
age = 300; // no let keyword
console.log(age);

// Assignment shorthand
let num = 0;
// console.log(num);
num++;
console.log(num); //1

// num++ is shorthand for
num += 1;
console.log(num); //2

// num += 1 shorthand for
num = num + 1;
console.log(num); //3

num + 1;
// What will print?
console.log(num); // 3 - no assignment operator

console.log(num + "hey"); // 1hey

/*
  Know your data types!
  * The plus operators doubles as addition and concatenation
  * if we use the + operator with a string it will type cast the other data type even if its not a string

*/

//We can check our data types using typeof operator
let number = "1";
console.log(typeof number);
console.log(typeof 1 === "number");
console.log(typeof true === "boolean");
// * can typecase using + or Number
console.log(typeof +number === "number"); // type cast this  string using the + into a number
console.log(typeof 1);


/*

  Strings
  * Strings are delineated with "", or '' or `` which we learn next week

  Wrapper objects
  * When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.

  * https://programmingwithmosh.com/javascript/javascript-wrapper-objects/

*/

// printing a string to the terminal
console.log("What is the most used language in programming?"); // profanity
console.log("What did the router say to the doctor?"); // it hurts when ip

// strings can be stored in variables
// strings can be letter, word, sentences
let newString = "Cool strings!";
let newString2 = "Another cool string!";

// what if you need to use quotes
let sentence3 = ' "You\'re great!!" said Tony! ';
let sentence4 =
  '  "You miss 100% of the shots you don\'t take." -Wayne Gretzky  - Micheal Scott ';

// String methods!
// * all strings have a length property
// * tell us how many characters their are
// * lets evaluate an expression
console.log("brandon".length); // 7
let lastName = "laursen";
let lastNameLength = lastName.length;
console.log(lastNameLength); // 7
// * track the variable names, find the value they hold!

// Indexing
// * Strings have indexes
// * indexes in programming start at 0!

/*
length of 4
VALUE - c a t s undefined undefined
INDEX - 0 1 2 3     4         5
*/

let animal = "cats";
console.log(animal.length); //4

// we can index a string to get the value at that index
console.log(animal[0]); // c
console.log(animal[1]); // a
console.log(animal[2]); // t
console.log(animal[3]); // s
console.log(animal[4]); // undefined

// we can access the last value of a string using
console.log(animal[animal.length - 1]); // s
// * were basically saying, hey whats the length of the animal string, whatever it is subtract 1 and index and give me that value
// * we are evaluating an expression and logging it the terminal

// cant index a index that does not exist
console.log(animals[10]); // undefined

// String methods
// * .indexOf method returns the first index at which a given element can be found an array, -1 if it is not present
// ! always go to mdn

let animal2 = "rhino";

console.log(animal2.indexOf("r")); // 0
console.log(animal2.indexOf("o")); // 4
console.log(animal2.indexOf("z")); // -1

// concatenation
let word1 = "Whiteboards";
let word2 = "remarkable.";

let res = word1 + " are " + word2;
console.log(res);

// alternative - concatenation
console.log(word1.concat(" are ", word2));

// concatenation
let greeting = "Hello " + firstName + " " + lastName + "!";
// console.log(greeting);

// lets do the same things with string interpolation
let newGreeting = `Hello ${firstName} ${lastName}!`;
console.log(newGreeting); // Hello brandon laursen!


/*

  Functions

  What is a function?
    * A function is a procedure of code that will run when called.
    * Writing a function is known as a function declaration or function definition
    * create reusable logic - do not have to repeat the same line of code
    * Logic to be ran to output a value

  * Javascript reads top to bottom
  * Function is not read till its called/invoked

  So the three things to remember about return statements are:
    * Every function call evaluates to its return value.
    * Every function in JavaScript returns undefined unless a return is specified.
    * Once a return statement is encountered, the function will immediately stop and return the value, ignoring any code below the return statement.

  Function naming convention
    * camelCase => functionTest
    * descriptive names
    * verb followed by a noun, CRUD getInfo, deleteInfo, editInfo
    * If the return value is a Boolean, the name should be isValue where Value is whatever we are checking

  * Declaring/Defining the function
  * Where parameters are used to represent the arguments passed
   function functionName(param1, param2){
    return undefined;
   }

  * Calling/invoking the function and passing arguments
   functionName(argument1, argument2)
   console.log(functionName())// undefined
    * we are logging what the function evaluates too
    * which is its return value


*/

// Introduce a basic function
function myFunc() {
  // the return is what the function will evaluate too
  return "im returning a string";

  // * can return any data type
  // return 12
  // return true
  // * but can only return once
  // * anything below in scope of the return; will be ignored
}

// Here we are calling/invoking our function
// * a function will not be read unless its called/invoked
// * note we also wont see anything in the terminal unless we console.log
myFunc();

// A function evaluates to its return
// * if we want to see what a function evaluates too we can wrap it in a console.log like so
console.log("Return value of myFunc:", myFunc());

// we can call a function multiple times
console.log("Return value of myFunc:", myFunc());
console.log("Return value of myFunc:", myFunc());

// What happens if we don't invoke our function?
console.log(myFunc); // [function]
// * we will get a function object

// Lets talk about parameters and arguments
// * function myFunc2(param1, param2){};
// * () - hold the parameters
// * parameters are used to represent the arguments passed
// * think of assigning a value to a variable, but the function does it for you

// * our parameters are name1 and banana2
// * they are used to represent the arguments passed
// * the arguments passed are brandon and anthony
// * name1 = 'brandon'
// * banana2 = 'anthony;
// * this can change depending on what we pass; its dynamic
// * parameters can be named anything; they are bananable

function printNames(name1, banana2) {
  // we can use console.log inside oue functions to test logic and see what variables and expressions evaluate too
  // * first use console.log to confirm this is what we want to return
  // * console.log('Hello ' + name1 + " and " + name2)
  // * Looks good! lets return it then comment out the console.log
  return "Hello " + name1 + " and " + banana2;
}

// this is where we are calling our function
// this is also where we pass our arguments
printNames("brandon", "anthony");

// wrap function invocation in a console.log if you want to see the return value
console.log("Return value of printNames: ", printNames("anabel", "anthony"));

// we can pass different arguments to different function calls
// we can see multiple function evaluations
console.log("Return value of printNames: ", printNames("charles", "trevor"));
console.log("Return value of printNames: ", printNames("student1", "student2"));

// lets do another example
// * this is a function that will take in a number and add 2 to it
// * the parameter 'num' is being used to represent the argument passed '5'

function addTwo(num) {
  // we can use console.logs to see what variables are
  console.log(num); // 5

  // we can also use console.logs to test logic
  console.log(num + 2); // 7

  return num + 2; // this is what our function will evaluate too

  console.log("Will not be reached");
}

// calling/invoking our function
addTwo(5);

// want to see what function evaluates too
// * wrap in console.log
console.log(addTwo(5)); // 7

// can see what happens when other numbers are passed
console.log(addTwo(3)); // 5
console.log(addTwo(4)); // 6

// we can store the return value of a function in a variable
let returnOfAddTwo = addTwo(5);
// * we can see what the variable holds
console.log(returnOfAddTwo);
// * it holds what addTwo passed the argument 5 evaluates too

// * we can do it with other function calls
let result = addTwo(10);
console.log(result); // 12

// can use the return value of a function stored in a variable
console.log(result === 12); //true


// * Finding last index of word
function lastIndex(word) {
  console.log(word);
  console.log(word[0]);
  console.log(word[word.length - 1]);
  return word[word.length - 1];
  console.log(word); // never reaches due to? return
}

console.log("return value of lastIndex", lastIndex("cats")); // s

// * multiples two number together and returns the product
function multiply(num1, num2) {
  // use console.logs to visualize your data and how it change or can change
  console.log("num1", num1);
  console.log("num2", num2);
  console.log(num1 * num2);
  return num1 * num2;
}

console.log("return value of mutiply", multiply(10, 5)); // 50
// * can compare return value
console.log(50 === multiply(10, 5)); //true


/*

 Conditionals
 * let us control what we decide to do, creates a decision making tree for our code

  Talk about truthy and falsy values
  * https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.

  * Conditional statements will act as control for the flow of our apps and functions.
  * The basic structure of a conditional statement looks like:
      if (condition or comparison){
        <run this code>
      } else if (other condition or comparison) {
        <run this code>
      } else {
        <do this code if none of the conditions are met>
      }

  Mutually exclusive condition
   * A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should  use an if/else statement.
   * You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

*/

// Conditionals cans be used to control the flow of our program
// * by providing conditions, and commands on what to do if conditions are met or not
// * there are many types of conditions we can check

// * The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range

// generate random number between 0 and 1
let randomNumber = Math.random();

// mutually exclusive - can only be one or the other

// if number is greater than .5 log heads
// * we cannot ever see both console.logs, its one or the other
if (randomNumber > 0.5) {
  console.log("heads");
} else {
  // else log tails
  console.log("tails");
}

// non mutually exclusive
// * it can fulfil both conditions, not exclusive
// * we will see both console.logs
if (randomNumber > 0.5) {
  console.log("heads");
}

if (randomNumber > 0.1) {
  console.log("tails");
}

// many things we can compare in a conditional
if (10 > 1) {
  console.log("do this if is greater than 1");
} else {
  console.log("else do this");
}

if ("string".length > 4) {
  console.log("if the length of this string is longer than 4; do this");
} else if ("string".length < 4) {
  console.log("else if the string length is less than 4 do this");
} else {
  console.log("if neither condition is fulfilled, and all else fails; do this");
}

// truthy and falsy values
// * we can pass anything to a if statement, it will either evaluate to truthy or falsy
// * truthy - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// * falsy - https://developer.mozilla.org/en-US/docs/Glossary/Falsy

if (true) {
  console.log("this code will always execute");
}

if (0) {
  console.log("this will not run, 0 is a falsey value");
}

// * Dragon ball prompt
console.log("VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL?");

let powerLevel = 9001;

// mutually exclusive
if (powerLevel > 9000) {
  // check to see if our powerLevel is greater than 5
  console.log("It's over 9000!!!!!");
  console.log("WHAT 9000!?");
} else if (powerLevel < 9000) {
  // check to see if our powerLevel is less than 5
  console.log(
    "“Are you ready now to witness a power not seen for thousands of years?”"
  );
} else {
  // if neither of the above are true, then it might not be a number or the number is 9000
  console.log("Scouter must be malfunctioning...");
}

// not mutually exclusive
// * will trigger both console.logs
if (powerLevel > 9000) {
  // check to see if our number2 is greater than 5
  console.log("It's over 9000!!!!!");
}

if (number > 1000) {
  console.log("It's over 1000 too..., also hit this log as well");
}

// ternarys
let darkMode = false;
//* condition ? <if condition is true> : <if condition is not true>

darkMode ? console.log("turn on darkmode") : console.log("turn off darkmode");

const coinSide = Math.random() < 0.5 ? "heads" : "tails";
console.log(coinSide);

/*
 Read/Watch/Code: 12min
  - Conditionals Lecture REPL
*/

/*

  Loops

  Loops provide us a way to repeat behavior a set number of times.
  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  With loops we control the boundaries!
  There are may use cases of loops!
    * counting numbers
    * progressing through strings/arrays
      * we loop through these data types to get information
      * arrays can hold user information that we may need to access to print to the string

*/

// While loops
// * When would we use a while loop over a for loop?
// * Whenever we don't know how many times we need to iterate
// * If you want an action to repeat itself until a certain condition is met or while a condition is met

// While loops will execute while their condition is true.
// * You'll want to make sure the expression that steps your loop towards completion is embedded within the body of your loop.

// Components of a loop
let i = 0; // A condition where to start
// * we can start anywhere

while (i <= 5) {
  // while this is condition is true, execute the code in this block
  console.log(i); // print the value to the console
  i++; // step towards meeting the condition
  // increment our i variable by 1 after each iteration
  // same thing as, i += 1, i = i + 1
}

// for loop
// * let i = 0; initial expression, where to start
// * i <= 5; condition to be met
// * i++; increment i by 1, step to completing the loop
// ! remember index's start at 0
// print every number between 0 up to 5 an increments of 1
for (let i = 0; i <= 5; i++) {
  console.log(i); // 0 1 2 3 4 5
}

// We control the boundaries
// * we control where to start, where to end, how much we increment
// * we just need to think of those these three things and how can we fill in the blanks to traverse the data type we need or run something an arbitrary amount of times

// Lets iterate through a word;
// * we need to get every letter in a word
// * we have to think of the boundaries that we can control using a loop and what we need to access
// * logically a word's first letter is at its firstIndex, so we could start there which is 0
// * if we wanted to get through every letter in a word; wed need to go the length of it
// * if we get the length of the word, we can stop at end of that length; word.length
// * we need to decide how we want to increment through, we want each letter so well go one by one
// * well start at 0, go up the length of the word.length; in increments of 1

// function takes in a parameter 'umbrella' represented by the variable word
function iterateThroughWord(word) {
  // * were saying start from the first index
  // * iterate as long as i < word.length
  // * word.length evaluates to 8
  // * so as long as i is less than 8 keep going
  // * increment i by one each time
  for (let i = 0; i < word.length; i++) {
    // * word[i] changes as i changes
    // * each iteration i is changed by 1
    // console.log(word[0]);
    // word[0] = u
    // word[1] = m
    // word[2] = b
    let letter = word[i];
    // * for clarities sake, be descriptive in your variable names
    // * what is the variable at i?
    // * using i as a variable is more dynamic than indexing one by one
    console.log("value at index: ", word[i], "index: ", i); // can access current value at word[i]
    console.log("letter variable: ", letter); // or through variable that holds word[i]
  }
}

// call the function
// pass an arguments umbrella
iterateThroughWord("umbrella");
// * function has no return

// reverse a name
// * show them iterating backwards
function reverseName(name) {
  // concatenate on to reversedName string
  let reversedName = "";
  // start at name variables last index - 1
  // * we subtract account for the zeroth index
  // b r a n d o n
  // 0 1 2 3 4 5 6
  // brandon.length = 7
  // if we started at 7; there is no 7th index; so we subtract 1
  // we iterate while i is greater than the index if the first letter which is 0
  // we want to start from 6 and iterate down to 0 in increments of 1
  // 3 > 0 => 2 > 0 => 1 > 0 => 0 > 0 - STOP
  for (let i = name.length - 1; i >= 0; i--) {
    // console.log(name[i]);
    // name[name.length - 1]
    // name[name.length - 1 - 1]
    // name[name.length - 1 - 2]
    let letter = name[i];
    reversedName += letter;
    console.log("reversedName: ", reverseName);
  }
  return reversedName;
}

console.log("return value of reverseName", reverseName("brandon")); // nodnarb

// log numbers between
// * show them iterating using parameters in loop
function logBetween(num1, num2) {
  // for(let i = num1; i <= num2; i++) {
  //   console.log(i)

  // show only even numbers
  // can change i++ to i+=2 as well
  // if(i % 2 === 0) {
  //     console.log(i)
  //   }

  // }

  let i = num1;
  while (i < num2) {
    console.log(i);
    i++;
  }
}

logBetween(1, 10); //1,2,3,4,5,6,7,8,9,10

// ! easy skip just showing variable names can be anything
// Write a function that accepts a string as an input and logs every character in that string.
// show them that variable names can be anything
function characterLogger(string) {
  let end = string.length;
  for (let start = 0; start < end; start++) {
    let letter = string[start];
    console.log("letter", letter);
    console.log("index", i);
  }
  return "loop is done";
}

console.log("return value of characterLogger", characterLogger("motorcycle"));// loop is done
// * function evaluates to its return

/*
 Read/Watch/Code: 12min
  - Loops Lecture REPL
*/

/*

  Arrays
    * Arrays are useful when you need to hold more than just value;
    * Arrays are ordered collections of values.
    * Similar to strings; arrays have indices
    * We can access the value by using the index
    * We can use loops to iterate through arrays

*/

// Maybe we want to return more than one value
// * we can do so by using an array
// we can hold more than one value - numbers
let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// Arrays can hold strings
let stringArr = ["sunshine", "hope", "light"];
console.log(stringArr);

// arrays can hold different data types at the same time
// * dynamically typed language
let variousData = [1, "two", true, ["no way is that another", "array"]];
console.log(variousData);// [1, "two", true, ["no way is that another", "array"]]

// can index an array like a string
// * remember
let animal3 = "cats";
// console.log(animal3[0]);// c
// console.log(animal3[animal3.length - 1]);// s
// console.log(animal3.length);// 3

// we are accessing the value at a specific index in an array
let animalArr = ["c", "a", "t", "s"];
// console.log(animalArr[0]);// c
// console.log(animalArr[animalArr.length - 1]);// s
// console.log(animalArr.length);// 3

// * you can index a nested array
let twoDimensionalArr = [[0,1,2], [3,4,5], [6,7,8]];
console.log(twoDimensionalArr[0]);// [0,1,2];
// * Expressions!
console.log(twoDimensionalArr[0][0]);// 0;

// * has a length property
console.log(animalArr.length);// 3

// * can also use the .indexOf method
// what does .indexOf return?
console.log(animalArr.indexOf("c"));// 0

// concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

// unintended
console.log(nums1 + nums2 + nums3);// 1,2,34,5,67,8,9 typecast array into string, than concatenates as strings

// This is much better
// * use .concat
console.log(nums1.concat(nums2, nums3)); //[1,2,3,4,5,6,7,8,9,10]

// * order matters when concatenating
console.log(nums2.concat(nums1, nums3));

// * know your data types if you ever unsure you can use the typeof operator
// * go to mdn

console.log(typeof 12);// number
console.log(typeof "hello");// string
console.log(typeof true); // boolean
console.log(typeof []); // object???? will learn more about it next week, secretly everything is an object

/*
Read/Watch/Code: 12min
  - Arrays Lecture REPL
*/

// If we want to check an array
// * why no typeof? because an array is an object
// * returns a boolean
console.log(Array.isArray([1, 2, 3]));// true

// prompt: SumArray
function sumArray(array) {
  console.log("The input array is:", array);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    console.log("Sum at start of loop:", sum);
    let currentNum = array[i];
    console.log("The current index is", i);
    console.log("The current number is", currentNum);
    sum = sum + currentNum;
    //sum += array[i]
    console.log("Sum at end of loop:", sum);


  }
  return sum;
}

console.log("return value of ", sumArray([5, 6, 4])); // => 15
console.log("return value of ", sumArray([7, 3, 9, 11])); // => 30
