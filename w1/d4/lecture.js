// PROMPT:
// Write functions that will mimic the behavior of the ATM machine
// Write a function for withdraw
//      -- args amount
// Write a function for deposit
//      -- args amount
// Write a function to show current balance
//      -- no args?
// Write a function to bind it all together
//       -- args: type, amount

let balance = 500000


function transaction(type, amount){
    if (typeof type !== "string" || typeof amount !== "number"){
        console.log("BAD INPUT")
        return;
    }
    if (type === "deposit"){
        showBalance()
        deposit(amount)
    } else if (type === "withdraw"){
        showBalance()
        withdraw(amount)
    } else if (type === "showBalance"){
        showBalance()
    } else {
        console.log("INVALID TRANSACTION TYPE")
    }
}

function deposit(amount){
    if (amount > 50000){
        console.log("PLEASE SEE A TELLER")
        return endTransaction()
    }
    console.log("DEPOSITING", amount)
    balance += amount;
    showBalance();
    return endTransaction()
}

function withdraw(amount){
    if (amount > balance){
        console.log("CURRENT BALANCE OF", balance,"CANNOT SUPPORT TRANSACTION")
        // TODO: Replace with anotherTransaction        
        return endTransaction(); 
    } else if (amount > 2000){
        console.log("WITHDRAW LIMIT EXCEEDED, CANNOT SUPPORT TRANSACTION")
        // TODO: Replace with anotherTransaction        
        return endTransaction();
    }
    console.log("WITHDRAWING", amount)
    balance -= amount;
    showBalance();
    return endTransaction()
}

function showBalance(){
    console.log("CURRENT BALANCE:", balance)
}

function endTransaction(){
    // make ATM machine return member's card (looking at you hw team)
    console.log("PLEASE TAKE YOUR CARD")
    console.log("PLEASE HAVE A NICE DAY 😊")
}

function anotherTransaction(){
    // TODO:
    // get user input, if yes -> take amount and type
    // if no, call endTransaction
}

function depositType(type){
    // TODO:
    // get user input, determining type of tender to be
    // deposited (check, cash, etc?)
}

function authorize(pin){
    //TODO:
    //check pin against customer record
}

// Balance starts at 500000
transaction("deposit", 1) // 500001
transaction("deposit", 5001) // warn that transaction cannot be completed,
                             // balance is unchanged
transaction("withdraw", 1001) // 499000
transaction("withdraw", 2001) // warn that transaction cannot be completed,
                              // no change to balance
transaction("withdraw", 500000) // warn with different message, no change
transaction("showBalance", []) // balance 499000 ??
