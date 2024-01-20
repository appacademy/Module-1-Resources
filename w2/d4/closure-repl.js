
/*
	<sundaeOrder>: {
     	sentence: 'A bowl of ice cream with hot fudge',
        anonFunc: [function]
        <anonFunction>: {
        	sentence: 'A bowl of ice cream with hot fudge and nuts and caramel',
            topping: caramel
        }
    }

    	<sundaeOrder>: {
     	sentence: 'A bowl of ice cream with hot fudge',
        anonFunc: [function]
        <anonFunction>: {
        	sentence: 'A bowl of ice cream with hot fudge and nuts',
            newSentence: 'A bowl of ice cream with hot fudge and nuts and caramel'
            topping: caramel
        }
    }
*/
function sundaeOrder(topping2) {
  // your code here
let sentence = 'A bowl of ice cream with hot fudge'

return function (topping, topping2) {
    // your code here
  let newSentence = sentence += ` and ${topping}`;
return newSentence;
};
};

let sundae = sundaeOrder(); // => returns a function
// console.log(sundaeOrder('nuts')('caramel'))
// console.log(sundae('nuts', 'caramel'))
// console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
// console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

// let sundae2 = sundaeOrder(); // => returns a function
// console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"
