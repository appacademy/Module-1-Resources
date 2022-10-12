/*
  Hoising
    - let, const, var
      -var - hoist the variable declaration to the top, but not assignment
            var will be undefined
      -let/const - cannot hoist to the top, stuck in temporarl dead zone
            let/const not hoist and throw an error
    - functions
      -function declarations are hoisted
      -function expression are not /referenceError
        -similar to how let and const are hoisted


  Global variables
    default variable of let and var are undefined
    const has to be defined at initialization
*/


function hoistVar() {
  console.log(name);//undefined
  var name = 'brandon';
  return;
}
// hoistVar();


//test seperatly with const and let
function hoistConstAndLet() {
  // console.log(name);//with let ReferenceError: Cannot access 'name' before initialization
  console.log(name)//with const ReferenceError: Cannot access 'name' before initialization
  // let name = 'brandon';
  const name = 'brandon'
}

// console.log(hoistConstAndLet())

// console.log(hoisted())//hoisted!

function hoisted() {
  console.log('hoisted!')
}


// console.log(notHoisted())//not hoisted
let notHoisted = () => console.log('not gonna get hoisted!')


//if we use var, it will hoist undefined and well try to invoke undefined
