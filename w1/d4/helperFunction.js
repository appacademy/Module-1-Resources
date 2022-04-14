// function firstFunction(){
//     return "Hello World!"
// }

// console.log(firstFunction())

// Given a balance, that exists outside of our function
// Build a function that takes in an action as well as an amount
// Should be able to handle both deposits and withrdaws
// 1. Make sure balance has enough to cover our withdraw
// 2. Make sure we cannot deposit more than 10000 in a given transaction
// 3. Handle situations where we don't provide a valid action

let balance = 10 // starting amount

let banking = function(action, amount){ // parent function
    if (typeof amount !== 'number'){ // edge case check, don't run function if not passed valid number for amount
        console.log(amount, "is not a valid number")
        return balance
    }
    if (action === 'withdraw'){ // begin logic for allowing withdraw
    //    let newBalance = withdraw(balance, amount)
    //    return newBalance
        balance = withdraw(balance, amount) // reassign balance to what comes back from withdraw helper function
        return balance;
    } else if (action === 'deposit'){ // begin logic for deposit
        balance = deposit(balance, amount)
        return balance
    } else {
        console.log(action, "is not a valid action, please try again.")
        return balance
    }
}

let deposit = function(initialBalance, amount){ // begin deposit definition
    if (amount < 10000){ // check to see if amount is legitimate
        console.log("Depositing", amount)
        let newBalance = initialBalance + amount // create new variable to hold new amount
        return newBalance; // return newBalance to point where deposit function was invoked
        // initialBalance += amount // reassign parameter to itself plus the amount
        // return initialBalance; // return initialBalance parameter that now holds new value
    } else {
        console.log("Cannot deposit more 10000 or more in a single transaction, please see banker")
        return initialBalance
    }
}

function withdraw(initialBalance, amount){ // begin withdraw definition
    if (amount > initialBalance){ // check to see if funds cover amount
        console.log("Unable to withdraw, not enough funds available")
        return initialBalance // if not, return initial balance
    }
    console.log("Withdrawing", amount)
    let newBalance = initialBalance - amount // create new variable to hold balance after withdraw
    return newBalance; // return this new balance to where function was invoked
}



console.log(banking("test", "test"))
console.log(banking("test", 42))
console.log(banking("withdraw", 100))
console.log(banking("withdraw", 1))
console.log(banking("withdraw", 1))
console.log(banking("deposit", 1500))
console.log(banking("deposit", 100000))