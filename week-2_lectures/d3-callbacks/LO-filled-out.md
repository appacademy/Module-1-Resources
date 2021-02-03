## Review of Week 2 Day 3 Learning Objectives

### 1. Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.

Here are some of the reasons:

* A function is an instance of the Object type
* A function can have properties and has a link back to its constructor method
* You can store the function in a variable
* You can pass the function as a parameter to another function
* You can return the function from a function


### 2. Given a code snippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed

```js
function foo(callback) {
	console.log('grape');
	callback();
}

function bar() {
	console.log('banana');
}

const fruitBasket = function() {
	console.log('apple');
	bar();
	foo(bar);
	foo(function() {
		console.log('orange');
	});
	console.log('pear');
};

fruitBasket();
```
You should be able to predict what is going to be logged when we call fruitBasket.

### 3. Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.

```js
function greaterValue(value, cb1, cb2) {
	// compare cb1 invoked with value to cb2 invoked with value
	// return the greater result

	let res1 = cb1(value);
	let res2 = cb2(value);
	if (res1 > res2) {
		// if this is false, we move out of if statement
		return res1;
	}
	return res2;
}

let negate = function(num) {
	return num * -1;
};

let addOne = function(num) {
	return num + 1;
};

console.log(greaterValue(3, negate, addOne));
console.log(greaterValue(-2, negate, addOne));
```
Note: we do not invoke `negate` or `addOne` (by using `()` to call them), we are passing the function itself.

### 4. Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#map.

```js
function myMap(arr, callback) {
	// iterate through the array, perform the cb on each element
	// return a new array with those new values

	let mapped = [];

	for (let i = 0; i < arr.length; i++) {
		// remember that map passes three args with each element.
		let val = callback(arr[i], i, arr); 
		mapped.push(val);
	}

	return mapped;
}

let double = function(num) {
	return num * 2;
};

console.log(myMap([ 1, 2, 3 ], double));
```
### 5. Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#filter.

```js
function myFilter(arr, callback) {
  let filtered = [];

  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (callback(element, i, arr)) {
      filtered.push(element);
    }
  }

  return filtered;
}
```
### 6. Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#every.

```js
function myEvery(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (callback(element, i , arr) === false) {
    	return false;
    }
  }
  return true;
}
```