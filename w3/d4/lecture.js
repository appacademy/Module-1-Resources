let foo = (char, timeout) => {
    console.log(char)
    // clearTimeout(timeout)
}
​
​
console.log("a")
setTimeout(foo, 10, "b") // no delay!
setTimeout(foo, 0, "c") // no delay!
console.log("d")
// console.time("testLoop")
for(let i = 0; i < 1000000000; i++){
​
}
// console.timeEnd("testLoop")
​
​
// // setTimeout
// // setInterval
​
​
​
​
// Destructive
// for (let i = 0; i < 1000000000; i++) {
//     let id = setTimeout(console.log, 1000, "a");
//     console.log(`${id} added to event loop`)
//     clearTimeout(id) // remove destruction
// }
​
​
// let myFunc = (obj, cb) => {
//     console.log(obj.id)
//     cb()
//     setTimeout(myFunc, 1000, obj, cb)
//     obj.id++
// }
​
// let callback = () => {
//     console.log("Hello, I'm a callback function")
// }
​
// let counter = { id: 1 }
// setTimeout(myFunc, 1000, counter, callback);
