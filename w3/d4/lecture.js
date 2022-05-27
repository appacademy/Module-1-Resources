// function somethingSlow(n) {
//     if (n === 1 || n === 2) return 1
//     return somethingSlow(n - 1) + somethingSlow(n - 2)
// }

// function foo(){
//     debugger
//     console.log("food")
// }

// function bar(){
//     debugger
//     console.log("bark")
//     baz()
// }

// function baz(){
//     debugger
//     console.log("bazaar")
// }

// // console.log(Date.now())
// // setTimeout(somethingSlow, 0, 42)
// // console.log(Date.now())

// setTimeout(foo, 0)
// console.log(setTimeout(bar, -500))
// // console.log(Date.now())
// // console.log(somethingSlow(42))


// const foo = () => console.log("The time is up");

// setTimeout(foo, 5000)
//
// setTimeout(()=>{
//     foo()
// }, 500)
// console.log("end")

const food = (...foods) => {
    console.log(`I love ${foods.length > 2 ? "all the foods" : "some of the foods"}`)
}

function myIntervalFunc(numIntervals){ //define function
    const myInterval = setInterval(()=>{ //define timeout, with anon function
        numIntervals-- // decrement param (closure)
        food("gyros","pizza","hoagies") // run food function with these set params
        if (numIntervals <= 0){ //check to see if we have iterations left
           clearInterval(myInterval) // if not, clear interval
        }
        console.log("intervals remaining:", numIntervals)
    }, 375) // run interval on 375ms period
}
// myIntervalFunc(6)
// console.log(myTimeout)
// setTimeout(clearTimeout, 249, myTimeout)
// console.log(myTimeout)


const delays = [200, 300, 400, 500, 600, 800, 900, 1000, 1100]

function recursiveTimeout(delaysArr){
    if (!delaysArr.length) return
    const first = delaysArr[0]
    console.log(`Waiting ${first}ms`)
    return setTimeout(recursiveTimeout, first, delaysArr.slice(1))
}

recursiveTimeout(delays)