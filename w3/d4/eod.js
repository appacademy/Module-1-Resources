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

Understand the problem
1. recursive function takes in number as an argument
2. for each number, print out the song lines required with a 1 second delay
3. new lines after each round
4. repeat until we hit 0 bottles of beer on the wall
5. once at zero, :( no mas beer - No more bottles of beer on the wall... 🥲
    Take one down and pass it around...🍺
    num? bottles of beer on the wall...🍺
    num? bottles of beer on the wall...🍻
    num? bottles of beer...🍻
    No more bottles of beer on the wall... 🥲
  * helper functions for each line from the song?

Make a plan1
1. identify base case - n === 0
  a. console.log(go get more beer!)
  b. return;
2. recursive step -     n - 1
3. console.log("num bottles of beer on the wall...🍻")
4. lets make helper functions to handle maybe the console.logs
  a. () => console.log(num bottles of beer...🍻)
    pass our helper func to the settimeout for 1 second
  b. () => Take one down and pass it around...🍺
    pass our helper func to the settimeout for 1 second
  c. () => console.log(`${num - 1} bottles of beer on the wall`)
    pass our helper func to the settimeout for 1 second
5. setTimeout(bottlesOfBeer, 1000, num - 1);

***********************************************************************/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number of beers', bottlesOfBeer);

function bottlesOfBeer(num) {
  if (num === 0) {
    console.log(`go get more beer!`);
    rl.close();
    return;
  }

  if (num < 0) {
    console.log("cant have negative beer");
  } else {
    console.log(`${num} bottles of beer on the wall...🍻`);

    setTimeout(() => {
      console.log(`${num} bottles of beer...🍻`);
    }, 1000);
    setTimeout(() => {
      console.log(`Take one down and pass it around...🍺`);
    }, 2000);
    setTimeout(() => {
      console.log(`${num - 1} bottles of beer on the wall`);
      console.log(``);
    }, 3000);

    setTimeout(bottlesOfBeer, 4000, num - 1);
  }
}

// bottlesOfBeer(4);
