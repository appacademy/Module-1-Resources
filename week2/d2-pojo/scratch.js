/* 
Ordered VS Unordered 
Array - ordered
Objects - unordered
*/
let arr = [0, 1, 2, 3]; // arrays have indexes, array have elements
let obj = { name: 'Mylo', age: 1000, thingToCheck: 'new value' }; // objects have keys, object have values
// ALL KEYS ARE STINGS (or symbols)
// console.log(arr[2]);
// console.log(obj['name']);

// arr[2] = 4;
// console.log(arr);
// obj.name = 'Warren';
// console.log(obj);
// arr[4] = 12;
// console.log(arr);
// obj.taco = 'al pastor';
// console.log(obj);

// console.log(arr[5]); // undefined
// console.log(obj['taco']); // undefined

// console.log(obj.name); // Mylo
// let thingToCheck = 'age';
// console.log(obj[thingToCheck]); // 1000
// console.log(obj.thingToCheck); // new value
// console.log(obj);

// let contestants = [
//     'Kelly Clarkson',
//     'Rubben Studdard',
//     'Fantasia Barrino',
//     'Carrie Underwood',
// ];
// // contestant 3 please step forward
// console.log(contestants[3]); //Carrie Underwood

// let roomOfRichPeople = {
//     Importantpersonson: "That's me!",
//     Bezos: 'Yes?',
//     Gates: "That's my hat!",
// };

// let thePersonWhoLostTheirHat = 'Gates';

// // Mr. Importantpersonson, are you here?
// console.log(roomOfRichPeople['Importantpersonson']); // That's me!
// console.log(roomOfRichPeople.Importantpersonson); // That's me!

// // Excuse me, someone lost their hat...
// console.log(roomOfRichPeople[thePersonWhoLostTheirHat]); // That's my hat!

// let story = {
//     beginning: 'Once upon a time...',

//     end: 'And they lived happily every after',
// };

// let makeAStory = function () {
//     console.log(story);
//     if (!('middle' in story)) {
//         story.middle = 'drama';
//         console.log('added middle');
//     } else {
//         console.log('story complete');
//     }
// };
// makeAStory(); // added middle
// makeAStory(); // story complete

// let age = 10; // point directly to the number 10
// let numberOfFingers = age; // also points directly to the number 10
// age = numberOfFingers + 1; // points to 11
// console.log(age);

// let Biff = {
//     type: 'dog',
//     age: 10,
// };

// let Buster = Biff;

// Buster.age = 0;

// console.log(Biff, Buster);

/* 
Write a function called reduceCalc that intakes two numbers and uses the
.reduce method to sum them up.

console.log(reduceCalc(1, 2)) //3
console.log(reduceCalc(1, 5)) //6
*/

// let reduceCalc = function (op, ...nums) {
//     // [1, 2, 3, 4, 5, 6,7 ,8]
//     // console.log(nums);
//     return nums.reduce(function (accum, num) {
//         if (op === '-') {
//             return accum - num;
//         }
//         return accum + num;
//     });
// };

// console.log(reduceCalc('+', 1, 2, 3, 4, 5, 6, 7, 8)); // 36
// console.log(reduceCalc('-', 1, 5, 6)); // -10

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr1, ...arr2]

// console.log(arr3)

// let Biff = {
//     type: 'dog',
//     age: 10,
// };

// let Buster = { ...Biff };

// Buster.age = 0;

// console.log(Biff, Buster);

let nestedArr1 = [
    [1, 2, 3],
    [4, 5, 6],
];

let nestedArr2 = [...nestedArr1];
nestedArr2[0] = [...nestedArr2[0]]
nestedArr2[0][0] = 0;
console.log(nestedArr1, '|||||', nestedArr2);

console.log(nestedArr1[0] === nestedArr2[0]); //
