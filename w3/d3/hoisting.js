

/*
  Hoisting!
    let, const, and var
      - var - hoist the declaration not the assignment, but has a default value of undefined
      -const/let - hoist the only declaration but does not have a value, therefore throws an error when trying to access before initialization
    Hosting with Functions!
*/


function hoistVar(){
  console.log(name); //undefined
  var name = 'brandon'
};

// hoistVar()

function hoistConstAndLet() {
  console.log(name);//Cannot access 'name' before initialization
  let name = 'brandon';
  // const name = 'brandon';
}

// hoistConstAndLet()

//hoist the function declaration but not the assignment
notHoisted(); //Cannot access 'notHoisted' before initialization
let notHoisted = () => console.log('function will not get hoisted')


hoisted();//hoisted!
//function declaration
function hoisted() {
  console.log('hoisted!')
}
