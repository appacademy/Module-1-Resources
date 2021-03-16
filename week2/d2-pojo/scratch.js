let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
let arr4 = [0, ...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

let obj1 = { name: 'Mylo' };
let obj2 = { animal: 'elephant', game: 'Dota 2' };
let obj3 = { obj1, obj2, movie: 'Fantastic Mr. Fox' };
let obj4 = { ...obj1, ...obj2, movie: 'Fantastic Mr. Fox' };
console.log(obj3);
console.log(obj4);
