# W2 D3

## [Morning Boost]

___

## Callbacks

`Video Lectures`: 30 mins

- [Using Callback Functions 1]
  - [Code from Lecture](./code-it-out/using_callback_functions_demo1.js)
- [Using Callback Functions 2]
  - [Code from Lecture](./code-it-out/using_callback_functions_demo2.js)
- [Multiple Callbacks]
  - [Code from Lecture](./code-it-out/multiple_callbacks_demo.js)

`Vocabulary`

- First Class Function | MDN: [First-class Function]

  1. Stored in a variable (last week)
  2. Passed as an argument to a function (today)
  3. Returned from a function (today/more tomorrow)

- Higher Order Function
  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

`First Class Objects`

- Stored in a variable

  ```js
  let func1 = function(){
    console.log('I\'m stored in a variable');
  };

  console.log(func1());
  ```

- Passed as an argument to a function

  ```js
  let higherOrderFunction = function(callback){
    callback();
  };

  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };

  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }

  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);
  ```

- Returned from a function

  ```js
  function HOF(){
    return function(){
      console.log('I\'m being returned from a function');
    }
  }

  console.log(HOF()); // this will be the inner function

  HOF()(); // this will invoke the inner function

  let returnFromFunc = HOF(); // we could also save it to a variable

  console.log(returnFromFunc); // this will be the inner function

  returnFromFunc(); // then call the variable
  ```

`Code it out`

- [useACallback]

___

## My Array Methods

`Video Lectures`: 12 mins

- [My .forEach]

(Save these for the project)

- [My .map]
- [My .filter]
- [My .every]

___

## Pair Programming Demo

`Video Lectures`: 7 mins

- [Pair Programming]

`My Thoughts`

- FAQ
  - What if my pair is struggling with the material?
    - Pay it forward! Try to explain concepts they struggle with.\
      Play it like you're the Senior Dev and you're helping a\
      Junior Dev understand a new concept. It'll be slow, but you can\
      flex those 'explaining muscles'.
  - What if I'M struggling with the material?
    - Be honest. Let your pair know that you're unsure of the material.\
      Be okay with trying things and being wrong.\
      Don't be embarrassed, it's normal.
  - What if BOTH of us are struggling with the material?!?
    - This WILL happen, and that's fine! The point of projects are to\
      actively LEARN, not to already know. Code until you're stuck for\
      15 mins, then call a TA in for help.
- Some important notes
  - Set up your switching system and STICK TO IT. Set alarms so you're\
    always switching between driver and navigator. Even when a TA comes in\
    makes sure you're sticking to the system.
  - If you're more experienced, don't leave your partner in the dust.\
    When you go into a job interview, you're going to be asked to explain code,\
    so get your practice in now! If you can't say, out-loud, and explain a\
    concept to your pair, maybe you don't know it as deeply as you think.
  - Be honest in your pair reports.

`Pairing Git Flow`

- [Git Flow]

___

<!-- Links per cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/wednesday-morning-boost
[Using Callback Functions 1]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/using-callback-functions-demo-1
[Using Callback Functions 2]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/using-callback-functions-demo-1
[Multiple Callbacks]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/using-callback-functions-demo-1
[My .forEach]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/my-for-each-demo
[My .map]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/my-map-demo
[My .filter]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/my-filter-demo
[My .every]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/my-every-demo
[Pair Programming]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-2-feb-2022-cohort-1-online/my-every-demo

<!-- Constant Links -->
[First-class Function]: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
[useACallback]: ./code-it-out/useACallback.js
[myForEach]: ./code-it-out/myForEach.js
[myMap]: ./code-it-out/myMap.js
[myFilter]: ./code-it-out/myFilter.js
[myEvery]: ./code-it-out/myEvery.js
[Git Flow]: https://github.com/appacademy/Module-1-Resources/tree/main/additional_resources/week2/gitflow
