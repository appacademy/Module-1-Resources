// let car = 'vroom';

// function makeSounds(dogSound) {
//     let cow = 'moo';

//     if (true) {
//         let turkey = 'gobble';

//         for (let i = 0; i < 2; i++) {
//             //this is a block
//         }
//     }
// }

// console.log(car);
// makeSounds('woof');

// const hungry = false;

// function sayHungry() {
//     const hungry = true;
//     if (hungry) {
//         const hungry = 'potato';
//         console.log(hungry); // potato
//     }
//     console.log(hungry); // true
// }

// console.log(hungry); // false

// sayHungry();

// function hoist() {
//     console.log(dog); //
//     var dog = 'Rosie';
// }

// hoist();

// let sentenceCreator = function (start) {
//     let string = start + ' ';
//     return function (name) {
//         return (string = string + name + ' ');
//     };
// };

// let helloSentence = sentenceCreator('Hello');
// let goodbyeSentence = sentenceCreator('Goodbye');

// console.log(helloSentence('Mylo')); // Hello Mylo
// console.log(goodbyeSentence('Mylo')); // Goodbye Mylo

// console.log(helloSentence('Autumn')); // Hello Mylo Autumn
// console.log(goodbyeSentence('Autumn')); // Goodbye Mylo Autumn

// let firstArrow = function (num) {
//     return num + 1;
// };

// let firstArrow = (num) => num + 1;

// console.log(firstArrow(1));

let arr = [1, 2, 3];

// let arrPlusOne = function (arr) {
//     return arr.map(function (el) {
//         return el + 1
//     })
// }

let arrPlusOne = (arr) => arr.map((el) => el + 1);

console.log(arrPlusOne(arr));

let arr2 = [1, 1, 3, 2, 2, 1];

const result = arr2.reduce((acc, value) => {
    if (value in acc) {
        acc[value]++;
    } else {
        acc[value] = 1;
    }
    return acc;
}, {});

console.log(result);
