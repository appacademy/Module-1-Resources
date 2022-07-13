// Array Destructing
// let studentIds = [8, 23, 16, 2]
               //    0  1   2   3

// let valedictorian = studentIds[0]
// let salutatorian = studentIds[1]

// let [valedictorian, salutatorian] = studentIds
//          0              1            0  1   2   3

// Object Destructing
// let studentIds = {
//     valedictorian: 8, 
//     2: 16, 
//     salutatorian: 23, 
//     3: 2
// }
// let {valedictorian, salutatorian} = studentIds

// let valedictorian = studentIds["valedictorian"]
// let salutatorian = studentIds["salutatorian"]

// let valedictorian = studentIds.valedictorian.gpa]
// let salutatorian = studentIds.salutatorian]

// console.log("Valedictorian", valedictorian)
// console.log("Salutatorian", salutatorian)


















let currency = {
    "bitcoin": {
        "name": "Bitcoin",
        "price": 19847.70
    },
    "dogecoin": {
        "name": "Doge",
        "price": 0.062
    },
    "euro": {
        "name": "euro",
        "price": 1
    }
}

currency["yen"] = {
    "name": "yen",
    "price": .1
}

// get the price
function getPrice({name, price}){
    let string = name + " is priced at " + price
    console.log(string)
    return price
}

getPrice({ name: 'Bitcoin', price: 19847.7 })
getPrice(currency["euro"])
console.log(currency)




