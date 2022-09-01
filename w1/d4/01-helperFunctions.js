// Helper Functions

// Sometimes we'll need to solve problems that can be broken down into smaller
// problems.  Consider the transactions a person may make with their bank
// account.  Rather than encapsulating all of the activities within a single
// function, we can instead write some helper functions to handle individual 
// actions.


// Here's an example based around how an automated teller machine might operate:
let balance = 10;

let transaction = function(type, amount) {
  if (type === 'withdraw') {
    balance = withdraw(balance, amount);
  } else if (type === 'deposit') {
    balance = deposit(balance, amount);
  } else {
    console.log("You did not choose a valid transaction type")
  }

  return "Balance: "+ balance;
};

let withdraw = function(initialBalance, amount) {
  if (initialBalance - amount > 0) {
    console.log("Withdrawing:", amount)
    initialBalance -= amount;
  } else {
      console.log("Unable to complete transaction, not enough funds")
  }
  return initialBalance;
};


let deposit = function(initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing:", amount)
    initialBalance += amount;
  } else {
      console.log("UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY")
  }
  return initialBalance;
};

// console.log(transaction("ASDFASD", 100));
// console.log(transaction('withdraw', 9));
// console.log(transaction('withdraw', 6));
// console.log(transaction('deposit', 96));
// console.log(transaction('deposit', 1000000000000000));

// Let's create another example, this time thinking about how we might add or 
// remove things from a to-do list

function toDo(action, list, task){
  if (action === "print"){
    printList(list)
  } else if (action === "add"){
    addTask(list, task)
  } else if (action === "complete"){
    completeTask(list, task)
  } else if (action === "prioritize"){
    prioritize(list, task)
  } else console.log("Action not found, please try again")
}

function printList(list) {
  console.log("Here's what we're working on:")
  for (let i = 0; i < list.length; i++){
    let currentTask = list[i]
    let string = "Task number " + (i + 1) + ": ";
    string += currentTask
    console.log(string)
  }
}
function addTask(list, task){
  list.push(task)
  return list
}

function completeTask(list, task){
  if(!list.includes(task)) {
    console.log("Task", task,"not found!")
    printList(list)
    return
  }
  console.log("You have completed a task!")
  console.log(task, "is now completed.")
  console.log("Congratulations, you should be proud of you.")
  let index = list.indexOf(task)
  list.splice(index, 1)
  printList(list)
  return list
}

function prioritize(list, task){
  if (list.indexOf(task) < 0){
    console.log("Could not find task", task,", unable to prioritize.")
    printList(list)
    return list
  }
  console.log("Prioritizing", task)
  let index = list.indexOf(task)
  let temp = list.splice(index, 1)
  list.unshift(temp[0])
  printList(list)
  return list
}

let myList = [] 
toDo("add", myList, "walk the dog")
toDo("add", myList, "go shopping")
toDo("add", myList, "defeat enemies")
toDo("print", myList)
toDo("prioritize", myList, "defeat enemies")
toDo("complete", myList, "walk the dog")

