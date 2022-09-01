// helper functions

// let isFactorOfFour = function(num){
//     return num % 4 === 0;
// }

// let factorsOfFour = function(max){
//     let factors = []
//     // for(let currentNum = 4; currentNum <= max; currentNum++){
//     //     let result = isFactorOfFour(currentNum)
//     //     if (result){
//     //         console.log(factors)
//     //         factors.push(currentNum)
//     //         console.log(factors)
//     //     }
//     // }
//     let currentNum = 1;
//     while (currentNum <= max){
//         if (isFactorOfFour(currentNum)){
//             factors.push(currentNum)
//         }
//         currentNum++
//     }
//     return factors
// }

// let isFactorOfFour = function(num){
//     return num % 4 === 0;
// }
// console.log(isFactorOfFour(4)) // true
// // console.log(isFactorOfFour(2)) // false
// // console.log(isFactorOfFour(8)) // true
// // console.log(isFactorOfFour(12)) // true
// // console.log(isFactorOfFour(15)) // false
// console.log(factorsOfFour(16)) // [4,8,12,16]
// console.log(factorsOfFour)
// factorsOfFour = "banana"
// console.log(factorsOfFour)

// automatedTeller("deposit", 500)
// automatedTeller("withdraw", 500)
// automatedTeller("show", 500)

function automatedTeller(transactionType, amount) {
    // let newBalance = transactionType(amount)
    if (transactionType === "deposit") {
        let newBalance = deposit(amount)
        showBalance(newBalance)
    } else if (transactionType === "withdraw") {
        let newBalance = withdraw(amount)
        showBalance(newBalance)
    } else if (transactionType === "show") {
        showBalance(balance)
    } else {
        console.log("Unknown transaction type, please try again")
    }
}

let deposit = (number) => {
    if (number >= 5000) {
        console.log("Unable to deposit this amount, please see teller")
    } else {
        balance += number
    }
    return balance
}

let withdraw = function (number) {
    if (balance > number && balance >= 0) {
        balance -= number
    } else {
        console.log("Unable to complete transation")
    }
    return balance
}

function showBalance(balance) {
    console.log("Current balance is:", balance)
}

// showBalance(balance)
// showBalance(withdraw(450))
// showBalance(withdraw(500000))
// showBalance(deposit(1))
// showBalance(deposit(5001))
let balance = 150000
console.log("BEGIN TESTS")
automatedTeller("show")
automatedTeller("withdraw", 450)
automatedTeller("withdraw", 1000000000)
automatedTeller("deposit", 1)
automatedTeller("deposit", 5001)
automatedTeller("show", 5001)
automatedTeller("show")
automatedTeller("bad transaction type")
automatedTeller("")
console.log("END TESTS")