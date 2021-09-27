console.log("Hello")
console.log('Hello')

let firstName= 'Doctor'
let lastName = 'Who';

let greeting = "Hello " + firstName + " " +lastName +"!"

let newGreeting = `Hello ${firstName} ${lastName}!`
console.log(newGreeting)

let firstArr = ["Adam", "Autumn", "Bill", "Hector", "Jeff", "Schuler", "Zaviar"]
let lastArr = ["Lovett", "Wiggins", "Adams", "Crespo", "Granof", "Small", "Brown"]

for (let i =0; i < firstArr.length; i++) {
    console.log(`${firstArr[i]} ${lastArr[i]} is one of my instructors.`)
}

const madLib = (verb, adjective, noun, noun2) => {
    console.log(`I ${verb} a ${adjective} ${noun} at the ${noun2}`)
}


mad