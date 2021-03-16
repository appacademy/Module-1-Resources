// let obj = {};

// obj.name = 'Mylo';
// obj['age'] = 7000;
// obj.name = 'Gandalf';

// let newKey = 'location';

// obj[newKey] = 'MiddleEarth';

// console.log(obj);

// // console.log(obj.name);
// // console.log(obj.location);
// // console.log(obj.age);

// let story = {
//     beginning: 'Once upon a time...',
//     end: 'And they lived happily every after',
// };

// let makeAStory = function () {
//     if (story.middle === undefined) {
//         story.middle = 'drama';
//         console.log('added middle');
//     } else {
//         console.log('story complete');
//     }
// };

// makeAStory();
// makeAStory();

// let arrUser = ['Mylo', 7000, 'Module Instructor', 'Rural America'];

// let arrAge;

// for (let i = 0; i < arrUser.length; i++) {
//     let ele = arrUser[i];
//     if (typeof ele === 'number') {
//         arrAge = ele;
//     }
// }
// console.log(arrAge);

// let user = {
//     name: 'Mylo',
//     age: 7000,
//     job: 'Module Instructor',
//     address: 'Rural America',
// };

// console.log(user.age);

// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

// let Biff = {
//     type: 'dog',
//     age: 10,
// };

// let Buster = Biff;
// Buster.age = 0;

// console.log(Biff, Buster);

// let obj = { person: 'Mylo', animal: 'elephant'};

// let { person, animal, job } = obj;
// // let person = (the Object).person
// // let animal = (the Object).animal
// console.log(person, animal, job);

// let [game, player] = ['Dota 2', 'Austin'];
// // let game = (the Array)[0]
// // let player = (the Array)[1]
// console.log(game, player);

// let music = { tempo: 120, genre: 'March' };
// let { tempo: bpm, genre } = music;
// console.log(bpm, genre);

// let makeThemBig = function (...strings) {
//     console.log(Array.isArray(strings));
//     let result = strings.map(function (string) {
//         return string.toUpperCase();
//     });
//     return result.join(' ');
// };

// console.log(makeThemBig('hello', 'world'));
// console.log(makeThemBig('hello'));
// console.log(makeThemBig('Hello', 'world,', "how's", 'it', 'going', 'today?'));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2]; //
// let arr4 = [0, ...arr1, ...arr2]; // 
// console.log(arr3);
// console.log(arr4);

// let obj1 = { name: 'Mylo' };
// let obj2 = { animal: 'elephant', game: 'Dota 2' };
// let obj3 = { obj1, obj2, movie: 'Fantastic Mr. Fox' };
// let obj4 = { ...obj1, ...obj2, movie: 'Fantastic Mr. Fox' };
// console.log(obj3);
// console.log(obj4);

function sum(...nums) {
  return nums.reduce(function (accum, num) {
    return accum + num
  })
}

// let arr = 1, 2, 3, 4, 5, 6,7, 8, 8

console.log(sum(1))
