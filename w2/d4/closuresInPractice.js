
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        return count;
    }

    function decrement(){
        count--;
        return count;
    }

    function getValue(){
        return count;
    }

    return {
        increment,
        decrement,
        getValue
    };
    // return [increment, decrement]
}

let counter1 = createCounter()
let counter2 = createCounter()
counter2.increment()

// counter1(counter1[0]())

counter1.increment()
counter1.increment()
counter1.increment()
console.log("Count1:", counter1.getValue())
console.log("Count2:", counter2.getValue())

counter1.decrement()
counter1.decrement()
counter1.decrement()
console.log("Count1:", counter1.getValue())

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())