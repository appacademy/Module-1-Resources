/***********************************************************************
Write a RECURSIVE function, called `bottlesOfBeerOnTheWall` that accepts a
number (of beers on the wall) The function should count down from that number,
to 0 😞, printing the following out each time/round...

"4 bottles of beer on the wall...🍻"
"4 bottles of beer...🍻"
"Take one down and pass it around...🍺"
"3 bottles of beer on the wall...🍺"

The lines of song/text should print 1 line every 1 second to simulate the song
being sung...

When we reach 0, the following should print out:

"No more bottles of beer on the wall... 🥲"

Example:

bottlesOfBeerOnTheWall(2) // should print the following to the console:
2 bottles of beer on the wall...🍻
2 bottles of beer...🍻

Take one down and pass it around...🍺
1 bottles of beer on the wall...🍺
1 bottles of beer on the wall...🍻
1 bottles of beer...🍻

Take one down and pass it around...🍺
0 bottles of beer on the wall...🍺
No more bottles of beer on the wall... 🥲

Note the new line after each "round"...

Helper functions are a totally cool idea...

Understanding the problem~!
1. Recursive function. Input will be a number
2. For each num, print out the song lines at a 1 second delay
3. After each round there should be a new line
4. Repeat the pattern until we run out beer :(
5. When there is no more beer, print No more bottles of beer on the wall... 🥲

// Plan it out!
1. Identify the base case: num === 0;
    a. console.log("No more bottles of beer on the wall... 😢")
    b. return / stop recursing
2. The Recursive Step: decrement num || num -= 1
    a. console.log('num bottles of beers on the wall')
    b. 1 second need to pass between each line
    c. an empty line after each round

3. Recursive call
    a. setTimeout(bottlesOfBeerOnTheWall, delay, num)

*/

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('How many bottles of beer?? ', bottlesOfBeerOnTheWall);

function bottlesOfBeerOnTheWall(num){

    if (typeof num === "string") num = +num
    // console.log(typeof num)

    if (num === 0) {
        console.log("No more bottles of beer on the wall... 😢")
        rl.close();
        return;
    };

    if (num === 1) {
        // opening statement
    console.log(`${num} bottle of beer on the wall...🍺`);

    // follow up
    setTimeout(console.log, 1000, `${num} bottle of beer... 🍺`);
    } else {
        // opening statement
        console.log(`${num} bottles of beer on the wall...🍻`);

        // follow up
        setTimeout(console.log, 1000, `${num} bottles of beer... 🍻`);
    }


    // creating empty line
    setTimeout(console.log, 1000, "");

    //start a new round
    setTimeout(console.log, 1000, "Take one down and pass it around... 🍻")


    if (num === 2) {
    //decrement the num
    setTimeout(console.log, 4000, `${num -= 1} bottle of beer on the wall... 🍻`)
    } else {
        //decrement the num
        setTimeout(console.log, 4000, `${num -= 1} bottles of beer on the wall... 🍻`)
    }

    // recursive call
    setTimeout(bottlesOfBeerOnTheWall, 5000, num)



}


// one liner!
const bottlesOfBeer = (num) =>
  num === 0
    ? (console.log('go get more beer'), rl.close())
    : num < 0
    ? console.log('cant have negative beer')
    : (console.log(`${num} bottles of beer on the wall...:beers:`),
      setTimeout(console.log, 1000, `${num} bottles of beer...:beers:`),
      setTimeout(console.log, 2000, `Take one down and pass it around...:beer:`),
      setTimeout(console.log, 3000, `${num - 1} bottles of beer on the wall`),
      setTimeout(bottlesOfBeer, 4000, num - 1));
