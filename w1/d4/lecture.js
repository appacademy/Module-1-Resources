/*
HELPER FUNCTIONS

What are Helper Functions?
    * Function that we use inside of another function
    * Handles a part of that main function

Why are they important?
    * Helps make the main function look simpler by breaking into smaller pieces
    * Helps keep the code clean
    * Debugging!! - Allows you to isolate where the problem may be coming from
    * Reusability
    * Abstraction - Hides some of the unneeded details

Where do we use them?
    * Nested Loop - Loop through in the main function, and then call the helper for each element
    * When the problem is really complicated

One example: ATM
1) Check our balance - "Check Balance"
2) Withdraw money - "Withdraw"
3) Deposit money - "Deposit"

*/

let balance = 10;

// main function
function ATM(transaction, amount){
    if (transaction === "Check Balance"){
        return checkBalance(balance);
    } else if (transaction === "Withdraw") {
        return balance = withdraw(balance, amount);
    } else if (transaction === "Deposit") {
        return balance = deposit(balance, amount);
    } else {
        console.log("That ain't it chief")
    }
};

// helper functions

function checkBalance(userBalance){
    console.log('Your balance is $' + userBalance);
};

function withdraw(initialBalance, requestedAmount){
    if (requestedAmount > initialBalance) {
        console.log('Insufficient Funds')
    } else {
        console.log('Withdrawing: ', requestedAmount);
        // balance -= requestedAmount;
        // return balance;
        initialBalance = initialBalance - requestedAmount; // initialBalance -= requestedAmount
        return initialBalance;
    };
};

function deposit(initialBalance, depositAmount){
    console.log('Depositing: ', depositAmount);
    initialBalance += depositAmount;
    return initialBalance;
};

ATM("banana", 2); //?????
ATM("Check Balance")