/*
Using Object.entries
Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of the owners whose names are strictly longer than 5 characters and who own a "Honda".

Note: Use Object.entries to make your life easier!
*/

const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {
    // Write your solution here.

  let entries = Object.entries(obj)

  // console.log(entries)

  for (let entry of entries){
  	// console.log(entry)
    let name = entry[0]
    let car = entry[1]

    if(name.length > 5 && car === "Honda") console.log(entry[0])
  }
}

printOwners(obj);               // Bradley
