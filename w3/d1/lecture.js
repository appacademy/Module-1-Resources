// let firstName = "Bill"
// let lastName = "Adams"

// let greeting = "Hello " + firstName + " " + lastName
// // console.log(greeting)

// let newGreeting = `Hello ${firstName} ${lastName}`
// // console.log(newGreeting)

// const firstArr = [`Jojo`, "Cam", 'Peter', `Cody`, `${firstName}`]
// const lastArr = ["Yih", "Whiteside", 'Shin', `Lavene`, `${lastName}`]

// for (let i = 0; i<firstArr.length; i++){
//     console.log(`Firstname: ${firstArr[i]} ----- Lastname: ${lastArr[i]}`)
// }

// let obj = {}
// obj[firstName] = `${firstName}`
// console.log(obj)

function foo(word){
    debugger;
    console.log(word)
    bar("barber")
}

function bar(word){
    
    console.log(word)
    baz("bazaar")
}

function baz(word){
    debugger;
    console.log(word)
}

foo("food")