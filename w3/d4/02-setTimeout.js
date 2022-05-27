// setTimeout
// setTimeout will take in some function (or in-line function definition) that 
// will be invoked after the optional has pased. In our setTimeout call, we can
// also specify any number of arguments that should be pased to the specified 
// function. The syntax looks like:
//                cb             delay in ms         ...args
// setTimeout(callBackFunction, delayGoesHere, args, for, callback, go, here)

const foo = () => console.log('The time is up');

setTimeout(foo, 5000);
// Before running the above code, what do we think will happen?


setTimeout(() => console.log('time is up'), 2000);
console.log('end');
// Notice we're mixing synchronous and asynchronous code. What do we think will
// happen?


// Let's try and make use of setTimeout's ability to pass args to our callback:
const food = (food1, food2, food3) => { // define func with 3 params
  console.log(`I love ${food1} and ${food2} and ${food3}`);
}

setTimeout(food, 1000, "pizza", "taco", "ramen");
// After waiting 1000ms, our function will run with the provided args

// When called, setTimeout will return a timeout object. Once our timeout has
// expired, our function will be called. But! Should we need to, we can clear
// that timeout object and prevent our function from being called.
const res = setTimeout(food, 1000, "pad kee mao", "gnocchi", "gyro");
console.log(res);
clearTimeout(res);
// Without running the above code, let's try to predict the results
