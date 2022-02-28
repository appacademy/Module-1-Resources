// function hello1 (num1, num2) {
//   return num1 + num2
// }

// let hello2 = function (hello) {
//   console.log(hello)
// }

// let hello3 = (num1, num2) => ( num1 + num2 )

// // implicit -> the function implies what to return
//  - ()
//  - nothing

// // explicit -> tell the function what to return
//  - { return }

// let total = hello3(3, 5)
// console.log(total)

// hello2('Chase')
// hello3('Chase')


/*

cosnt let and var

let and const block scoped and throw an error if used
before initialized

var is function scoped or globally scoped
does not throw an error if used before initialized
hoists to undefined

*/

// const aang = { title: 'avatar' };

// aang = []
// let katara = 'waterbender';
// var sokka = 'boomerang';

// aang['tagline'] = 'the last airbender'
// // katara += ' and OP'
// sokka += ' and sword'

// var sokka = 'and suki'

// console.log(aang)
// console.log(katara)
// console.log(sokka)
/*
const mutator = () => {
  console.log(aang)

  if (true) {

    var aang = 'avatar'
    let zuko = 'firelord'
    const momo = 'flying lemur'
  }
  // console.log(zuko)
}
*/

// Closure

/*
  we can assign functions to variables
  const doubleNum = (num) => num * 2 
  
  when we assign a variable to a function call, that variable 
  becomes the return value of that function call. Even if 
  that value is another function.
  
  An inner scope has access to the variables of an outer scope
*/
 
const creditCard = () => {
  let limit = 5000;

  const returnFunc = (type, amount) => {
    if (type === 'payment') {
      limit += amount
    } else if (type === 'purchase') {
      limit -= amount
    }
    console.log('thanks for your ' + type + ' your balance is ' + limit)
    return limit
  }
  return returnFunc
}

console.log(creditCard())

const coltonCredit = creditCard();

coltonCredit('purchase', 30000)
coltonCredit('payment', 500)


const jojoCredit = creditCard();

const calebCredit = creditCard();

const wesCredit = creditCard();

console.log(jojoCredit('purchase', 500))















