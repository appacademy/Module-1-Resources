/* first example */
const alphabet = ['a','b','c','d','e','f','g','h','i','j']
const numbers = [1,2,3,4,5,6,7,8,9,10]

// const a = alphabet[0];
// const b = alphabet[1];

// const [a] = alphabet; // what is the result of this destructuring?
// const [a,, c] = alphabet; // what about this?
// console.log(alphabet);

// const newArr = [...alphabet, ...numbers]; // this is the same as alphabet.concat(numbers)
// const newArr = alphabet.concat(numbers);

// console.log(newArr);
// console.log(a);
// console.log(b);
// console.log(rest);

/* second example */
// let sumMultiply = (a,b) => {
//     return [a+b, a*b];
// }

// console.log(sumMultiply(2,3)); // What is the result of this function?

// const [sum, multiply] = sumMultiply(2, 3);

// console.log(sum); //  What will the result of this be?
// console.log(multiply);

/* POJO counting-scores destructuring EXAMPLE */
/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.
***********************************************************************/

// function countScores(people) {
    // let playerScores = {};

    // for (let player of people) {
    //     console.log(player);
    //     // [playerName, score] = [player.name, player.score] // destructuring with an array
    //     let { playerName, score } = player; // destructuring with an object
    //     if (playerScores[playerName]) playerScores[playerName] += score;
    //     else playerScores[playerName] = score;
    // }

    // for (let i = 0; i < people.length; i += 1) {
    //     let personObj = people[i];
    //     let name = personObj.name;
    //     let score = personObj.score;

    //     if (scoresObj[name]) {
    //     scoresObj[name] += score;
    //     } else {
    //     scoresObj[name] = score;
    //     }
    // }
//     return playerScores;
// }

// Example 1:
// let ppl = [
//     {name: "Anthony", score: 10},
//     {name: "Fred", score : 10},
//     {name: "Anthony", score: -8},
//     {name: "Winnie", score: 12}
// ];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

/* Object destructuring example */
// let person = {
//     firstName: 'Braxton',
//     lastName: 'Kappes',
//     age: '29',
//     favoriteHobby: 'hiking',
//     address: {
//         city: 'Somewhere',
//         state: 'Wisconsin'
//     }
// }

// person.address['street'] = 'Somewhere else' // this adds a key and value to our person object.
// const { firstName, address: { street = 'Somewhere else' } } = person;

// console.log(street);
// console.log(person);

// let printPerson = (person) => {
//     console.log(`Name is: ${person.firstName} ${person.lastName}. Age is ${person.age}. Favorite food is ${person.favoriteHobby}`);
// }

// console.log(printPerson(person));
