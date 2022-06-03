Write a function named smoothieMachine that accepts any number of parameters, and a function. The return function will also accept any number of parameters and will return a string including all of the parameters of smoothieMachine and the return function.

```js
let smoothie1 = smoothieMachine(); // returns a function
smoothie1("milk"); // returns "I'm having a smoothie with milk"
smoothie1("kale", "spinach"); // returns "I'm having a smoothie with milk and kale and spinach"
smoothie1("honey", "pears", "berries"); // returns "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"


let smoothie2 = smoothieMachine("apples", "bananas", "berries"); // returns a function
smoothie2("pineapple"); // returns "I'm having a smoothie with apples and bananas and berries and pineapple"


let smoothie3 = smoothieMachine(); // returns a function
smoothie3(); // returns "There are no ingredients in the smoothie!"
```


We are going to be creating a funciton, called ```smoothieMachine()``` and we want to be able to provide as many ingredients as we can to this function. Then using closure, we want to return a new function that also takes in as many ingredients as we want. We will use all of the ingredients to print out what type of smoothie we are consuming.


Edge Case:
  1. No Input
  2. Empty String

  ```js
  let smoothie4 = smoothieMachine("");
  smoothie4("apples") // "I'm having a smoothie with apples."
  ```


Plan:
  1. Create our ```smoothieMachine()``` function. That to take in an unlimited amount of ingredients (strings).
    1. Check if all the ingredients are strings with a length (not empty strings).
    2. Return a function that will once again take in an unlimited aount of ingredients.
      1. Check is all the new ingredients are strings with a length.
      2. Add the new ingredients to the original list of ingredients. 
      3. Check to see if there are ingredients, and if not return "There are no ingredeints..."
      4. return "Im having a smoothie with..." all of the ingredients provided.


  1. Create a function ```stringCheck``` that will filter out strings that dont have a length.


Code:

```js
const smoothieMachine = (...ingredients) => {
  ingredients = stringCheck(ingredients);

  return (...moreIngredients) => {
    moreIngredients = stringCheck(moreIngredients);

    ingredients.push(...moreIngredients);

    if (!ingredients.length) return "There are no ingredients in the smoothie!";

    return "I'm having a smoothie with" + ingredients.join(" and ");
  };
};
```

