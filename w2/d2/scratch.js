








// function sentenceMaker(...restOfWords){
//   console.log(restOfWords);

//   // return word1 + ' '+ word2;
//   let sentence = '';
//   for(let word of restOfWords) {
//     sentence += ' ' + word;
//   };

//   return sentence;
// }


// console.log(sentenceMaker('hello', 'world'));
// console.log(sentenceMaker('taking','in','three arguemnts'));
// console.log(sentenceMaker('hello'));

// num1 = 10
// num2 = 10

//num1 = 10
//restOfNumbers = [10]

//num1 = 10
//restOfNumbers = [2, 3]
// function product(num1, ...restOfNumbers) {
//   // console.log(num1,restOfNumbers)
//   // return num1 * num2;
//   return restOfNumbers.reduce((acc, num) => acc *= num ,num1)
// }


// console.log(product(10, 10));//100
// console.log(product(10, 2, 3));//






let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [arr1, arr2, 7,8,9];
// console.log(arr3);// [ [ 1, 2, 3 ], [ 4, 5, 6 ], 7, 8, 9 ]

let arr4 = [0, ...arr1, 'middle',...arr2, 7,8,9, ...arr1.reverse()];
// console.log(arr4);
// [
  // 1, 2, 3, 4, 5,
  // 6, 7, 8, 9
// ]
//[ 1, 2, 3 , 4, 5, 6 , 7, 8, 9 ]

// use spread to make a copy
let copy = arr4.slice();
// console.log(copy);
copy[0] = true;

// console.log(arr4);
// console.log(copy);

// let copy1 = [...arr4]
// console.log(copy1);



// let obj1 = {name: 'brandon'}
// let obj2 = {age: 27, favColor:'red'};
// let obj3 = {obj1, obj2, city:'tampa'}
// // console.log(obj3)

// let obj4 = {...obj1, ...obj2, city:'tampa'};
// console.log(obj4);
// // { name: 'brandon', age: 27, favColor: 'red', city: 'tampa' }
// // { name: 'brandon', age: 27, favColor: 'red', city:'tampa' };

// let copyObj = {...obj4};
// // console.log(copyObj);

// // let example = [...obj4];
// // console.log(example)

// let arr = [1,2,3];
// let example = {...arr};
// console.log(example);
// // { '0': 1, '1': 2, '2': 3 }









let array = [1, true, 'hello world'];

// let num = array[0];
// let bool = array[1];
// let string = array[2];

// let [num, bool, string] = array
// console.log(num, bool, string);


let [num, , string] = array
// console.log(num, string);// 1 hello world

let firstName = 'laursen';
let lastName = 'brandon';

// let temp = firstName;
// firstName = lastName;
// lastName = temp;

// console.log(firstName, lastName);// laursen brandon

// [firstName, lastName] = [lastName, firstName];
// console.log(firstName, lastName);// brandon laursen

let arr = [10, 20, 30];
// console.log(arr);// [ 10, 20, 30 ]

// let temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
// console.log(arr);

// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);// [ 20, 10, 30 ]

let numbers = [1,2,3];

// [num1, ...restOfNumbers] = numbers;

// console.log(num1, restOfNumbers);// 1 [ 2, 3 ]

[num1, ...restOfNumbers] = [...numbers, 4]
// [1, [2,3,4]] = [1,2,3,4]
//num1 = 1
//restOfNumbers
// Would …rest always have to be on the left side of the equation and …spread on the right? YES!



let user = {
  name: 'john',
  address: {
    street: '123 broad st',
    city:'orlando'
  },
  age: 30
}

let { name, address: { street, city }, age } = user;
console.log(street, city);


// console.log(user);
// let name = user.name;
// let address = user.address;
// let age = user.age;
// let { name, address, age } = user;

// console.log(name, address, age);
// john { street: '123 broad st', city: 'orlando' } 30

// let { name, ...restOfObj } = user;
// console.log(name, restOfObj);
//john { address: { street: '123 broad st', city: 'orlando' }, age: 30 }
// console.log(user);

/*
{
  name: 'john',
  address: { street: '123 broad st', city: 'orlando' },
  age: 30
}
*/
