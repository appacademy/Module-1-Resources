// Objects

// Objects (or plain old javascript objects, to get more specific) give us a way
// of creating collections of values that can be accessed with a given key.
// We'll use syntax similar to what we've seen with arrays, accessing properties
// whose names with know with .property or by using standin-variables with 
// [bracket] notation. Let's take a look:

let series = {
  name: "Stormlight Archives",
  books: {
    first: "The Way of Kings",
    second: "Words of Radiance",
    third: "Oathbringer",
    fourth: "Rhythm of War"
  },
  author: "Brandon Sanderson",
  numberOfNovellas: 1,
  worthReading: false,
  qualityOrder: ["third", "first", "fourth", "second"], 
}

// access name
console.log(series["name"]);
console.log(series.name);

// access the books
console.log(series["books"]["first"]);
console.log(series["books"].second);
console.log(series.books.third);
console.log(series.books["fourth"])

// change worthReading to true
series.worthReading = true;
console.log(series);

// incremement numberOfNovellas to include Dawnshard
series.numberOfNovellas++;
console.log(series);




// add in Bill's favorite line as a new key/value pair
series.favortieQuote = "Journey before destination.";
console.log(series); 


// using variables
// make use of the quality order array:
console.log("If I had to rank them by favorites, it might go:", series.qualityOrder.map(function(element){
    return series.books[element]
}));

// Let's see it with another example
let obj = {
  city: "Pittsburgh",
  hockeyTeam: "Penguins",
  footballTeam: "Steelers",
  baseballTeam: "Pirates",
}

let someVariable = "hockeyTeam";
let thing = "baseballTeam";
let first = "football";
let second = "Team";
let place = "CIty";

console.log(obj[someVariable]);
console.log(obj[thing]);
console.log(obj[first + second])
console.log(obj[place.toLowerCase()]);

// check to see if some property/key exists within an object:
if (obj.city !== undefined) console.log("This is in the object");
if (someVariable in obj) console.log("This is in the object");


// Iterating through objects:
let show = {
  name: "Star Trek",
  series: ["TOS", "TNG", "DS9", "VOY"],
  captains: {
    TOS: "Kirk",
    TNG: "Picard",
    DS9: "Sisko",
    VOY: "Janeway"
  },
}

// for in loop
for (let key in show) {
  console.log(key);
  console.log(show[key]);
}

// // Getting All of the Keys
let keyArray = Object.keys(show);
console.log(keyArray);

// Getting All of the Values
let valueArray = Object.values(show);
console.log(valueArray);

// Getting all the entries
let entryArray = Object.entries(show);
console.log(entryArray);
console.log(show)
