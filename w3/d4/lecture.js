// // code runs top down

// function somethingSlow(n) {
//     if (n === 1 || n === 2) return 1

//     return somethingSlow(n - 1) + somethingSlow(n - 2)
// }

// function foo(){
//     console.log("food")
// }

// function bar(){
//     console.log("bark")
// }

// function baz(){
//     console.log("bazaar")
// }

// setTimeout(foo, 20)
// const thing = setTimeout(bar, 10)
// // console.log(thing)
// baz()
// somethingSlow(45)

// function bigTime(sentence, delay, count){
//     for (let i = 0; i < 100000; i++){
//         console.log(sentence)
//     }
//     //          cb          delay, ...args
//     debugger
//     setTimeout(console.log, delay, count)
// }
// bigTime("first run", 60, 1)
// debugger
// setTimeout((...args)=>{
//     bigTime(...args) 
// }, 50, "second run", 0, 2)
// setTimeout(bigTime, 0, "third run", 500, 3)

// const foo = () => console.log("The time is up!")
// const timer = setTimeout(foo, -5000)
// console.log(timer)
// clearTimeout(timer)
// console.log(timer)

// const food = (...foods) => console.log(`I love ${foods.join(" ")}!`)

// // console.log(setTimeout(food, 0, "zucchini", "tomatoes", "peppers", "oregano", "eggplant", "cucumbers"))

// function waiter(cb, delay = Math.random() * 10000) {
//     console.log(`waiting for ${delay}ms!`)
//     setTimeout(cb, delay)
// }
// waiter(() => {
//     food("zucchini", "tomatoes", "peppers", "oregano", "eggplant", "cucumbers")
// },)

// const food = (...foods) => console.log(`I love ${foods.join(" ")}!`)
// const int = setInterval(food, 5000, "bbq", "calzone", "pierogi")
// console.log(int)
// clearInterval(int)
// console.log(int)

// function intervalFunc(number){
//     const myInterval = setInterval(()=>{
//         console.log("Hello there!")
//         number--
//         console.log("Here's my num!", number)
//         if (number === 0) clearInterval(myInterval)
//     }, 500)
// }

// intervalFunc(50)

const delays = [1500, 1250, 1000, 750, 500, 250, 0,]

const timeoutFunc = (delayArr) => {
    // delayArr.forEach(delay => setTimeout(console.log, delay, `Waited for ${delay}ms`))
    if (!delayArr.length) return
    const currentDelay = delayArr[0]
    console.log(`waiting for ${currentDelay}ms`)
    setTimeout(timeoutFunc, currentDelay, delayArr.slice(1))
}

console.log(timeoutFunc(delays))