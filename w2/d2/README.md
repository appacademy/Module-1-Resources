# W2 D2

## [Morning Boost]

## Primitive VS Reference

`Primitive vs Reference Quiz`: 7 Minutes

- [Primitive vs Reference]

`Primitive`

  ```js
  let age = 10;
  let numberOfFingers = age;
  age = numberOfFingers + 1;
  console.log(age, numberOfFingers);
  ```

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

|RAM|VAR|VAL|
|--|--|--|
|#001|age|10|
|#002|NOF|10|

</td><td>

|RAM|VAR|VAL|
|--|--|--|
|#001|age|11|
|#002|NOF|10|

</td></tr> </table>

`Reference`

  ```js
  let biff = {
      type: 'dog',
      age: 10,
  };

  let buster = biff;
  buster.age = 0;

  console.log(biff, buster);
  ```

  <table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

|RAM|VAR|VAL|
|--|--|--|
|#003|biff|--|
|\||type|'dog'|
|\||age|10
|#004|buster|#003|

</td><td>

|RAM|VAR|VAL|
|--|--|--|
|#003|biff|--|
|\||type|'dog'|
|\||age|0
|#004|buster|#003|

</td></tr> </table>

## POJO Practice
`REPL Practices`: 45 minutes
- We'll go into breakout rooms to work on these practices, remember to hit the
Ask a Question button on Progress Tracker if you're stuck on anything for more
than 15 minutes. Feel free to consult the others in your breakout room and work
together

## Rest, Spread and Destructuring

`Discussion`

- Destructuring is just matching a pattern.

  ```js
    let person = "Emily";
    let { person: person2, animal } = { person: "Caleb", animal: "elephant" };
    // let person = (the Object).person
    // let animal = (the Object).animal
    console.log(person, person2, animal);

    let [game, player] = ["Dota 2", "Mylo"];
    // let game = (the Array)[0]
    // let player = (the Array)[1]
    console.log(game, player);

    [player, game] = [game, player];
    console.log(game, player);
  ```

- Rest and Spread are the same side of very different coins.
  - Rest gathers up the 'rest' of the parameters into an array

  ```js
  let makeThemBig = function (...strings) {
      //console.log(Array.isArray(strings));
      let result = strings.map(function (string) {
          return string.toUpperCase();
      });
      return result.join(' ');
  };

  console.log(makeThemBig('hello', 'world'));
  console.log(makeThemBig('hello'));
  console.log(makeThemBig('Hello', 'world,', "how's", 'it', 'going', 'today?'));
  ```

- Spread takes some data and 'spreads' it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);

  let obj1 = { name: 'Mylo' };
  let obj2 = { animal: 'elephant', game: 'Dota 2' };
  let obj3 = { obj1, obj2, movie: 'Fantastic Mr. Fox' };
  let obj4 = { ...obj1, ...obj2, movie: 'Fantastic Mr. Fox' };
  console.log(obj3);
  console.log(obj4);
  ```
`Quiz`: 5 minutes
- [Destructuring Quiz]
`REPL Practices`: 50 minutes
- We'll go back to breakout rooms to work on these practices, remember to hit the
Ask a Question button on Progress Tracker if you're stuck on anything for more
than 15 minutes. Feel free to consult the others in your breakout room and work
together

## Advanced Array Methods

- Breakdown:
  - All of the advanced array methods are expecting a function as their argument
  - That function will be invoked with each element of the array.
    - The function will be passed the current element, its index and the calling
      array as arguments.
  - forEach does not expect a return from the function it is provided
  - map will "map" the returned data into the current position in the result 
  array
    - map will always return a new array of the same length with new elements
  - filter is expecting true or false as an indicator of whether or not the 
  current element should be including in the new array
    - filter will always return a new array filled with items that passed our
    argument function
  - find is expecting true or false and will return the first element that 
  returns true from the provided function
    - find will only ever return a single item, the first element where the
    argument function returns true
  - reduce is expecting the value of the accumulator for the next iteration.
    - reduce will return anything we want it to. if we manage our accumulator
    correctly, we get to determine its data type.
    
`forEach`

- Hey there `forEach` method who's attached to an array.
- Here's a function.
- For each element that is in your array
- I'd like you to run this function giving it the element, index, and array.
- You don't have to give me anything back.

  ```js
  /* 
  Write a function called hello that intakes an 
  array of names and prints "Hello," plus the name, for
  each name. Must use .forEach()

  hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'
  */
  ```
  `map`

- Hey there `map` method who's attached to an array.
- Here's a function.
- First, I'd like you to create a new array.
- Then, for each element that is in your array\
I'd like you to run this function giving it the element, index, and array,\
and push the return value of that function into the new array you created.
- Finally, you can give me the new array back.

  ```js
  /* 
  Write a function called timesTwo that intakes an
  array of numbers and returns a new array where all 
  of the numbers are multiplied by 2. You must use .map()

  timesTwo([1, 2, 3]) => [2, 4, 6]
  timesTwo([-1, 6, 0]) => [-2, 12, 0]
  */
  ```

`filter`

- Hey there `filter` method who's attached to an array.
- Here's a function.
- First, I'd like you to create a new array.
- Then, for each element that is in your array\
I'd like you to run this function giving it the element, index, and array.
  - If the `return` value of that function is true,\
  you should push it onto the new array you created.
- Finally, you can give me the new array back.

  ```js
  /* 
  Write a function called evens that intakes an
  array of numbers and returns a new array of only the
  even numbers from the original array. You must use
  .filter()

  evens([1, 2, 3]) => [2]
  evens([42, 44, 45]) => [42, 44]
  */
  ```

`reduce`

### No Default Accumulator

- Hey there `reduce` method who's attached to an array.
- Here's a function.
- First, assign the first element of your array as the accumulator.
- Then, starting at the second element of the array,\
I'd like you to run the function giving it the accumulator, element, index, and array,\
and make the `return` value of the function the new accumulator.
- Finally, you can give me the accumulator.

### Default Accumulator

- Hey there `reduce` method who's attached to an array.
- Here's a function. And what I'd like the accumulator to start with\
- First, assign what I gave you as the accumulator\
- Then, for each element that is in your array\
I'd like you to run the function giving it the accumulator, element, index, and array,\
and make the `return` value of the function the new accumulator.
`return` value of this function the new accumulator.
- Finally, you can give me the accumulator.

  ```js
  /* 
  Write a function called sum that intakes an
  array of names and returns a string of "Names: " with
  all of the names attached after. Must use the .reduce()

  reduce(['Mylo']) => Names: Mylo 
  reduce(['Rick', 'Morty']) => Names: Rick Morty 
  */
  ```

## Git

---

## What is Git

- Git is a version control system (VCS)
- Created by Linus Torvalds in 2005 for the Linux Kernel

## Why Git?

- Versioning
- Collaboration

---

## How does Git work

- Files are saved in a _commit_
- Does *NOT* store entire project in each commit
- Each commit is a snapshot of what changed since the last commit
- Cloning or downloading a repository grabs the entire commit history

## Git's Internal System

- working directory
  - all files and folders on your local machine
- staging area
  - tracks specified changes to working directory
- commit history
  - snapshots of project stored in `.git`

---

## Local Repositories

- "local" repository = on your machine
- "remote" repository = online code hosting service like Github

---

## Local Repo Commands 1

- `git init`
  - creates local Git repository
    - run `ONCE`
    - Do not run if you just cloned
- `git status`
  - see current changes from last commit
- `git log`
  - see list of commits

---

```diff

match2memory
├── .git
├── players
│   ├── computer.rb
│   └── human.rb
├── parts
│   ├── board.rb
│   └── tile.rb
└── game.rb

```

---

## Local Repo Vocab

- un-tracked
  - any newly introduced file (not in previous snapshot of repo)
- un-staged
  - file that exists in .git but has been changed since last commit
- staged
  - files added to staging area, awaiting commit
- commit
  - files that have been committed to .git

---

## Local Repo Commands 2

- `git add <file-name>`
  - add a single file to the staging area
- `git add .`
  - add all files from current directory (and all child directories)
- `git add -A`
  - add all files in the entire working tree
- `git commit -m <message>`
  - moves updates from staging area to `.git`
  - Start with a verb; imperative mood; _no_ emoji; no ending punctuation
- `git diff`
  - show what changed from last commit to staged changes

---

## Git Reset

- powerful command used to undo local changes to the state of a Git repository

---

## Local Reset Commands

- `git reset <filename>`
  - remove a file from staging area
  - doesn't affect working directory
- `git reset`
  - un-stage everything
  - doesn't affect working directory
- `git reset --hard`
  - reset the staging area and the working directory to match the most recent\
  commit (or specified commit)
  - affects working directory

## Remote Commands / terminology

- `origin`
  - keyword referring to default remote repo
- `git remote`
  - command to list remotes
- `git remote add <remote> <remote-url>`
  - Adds a remote
- `git push <remote> <branch-name>`
  - moves updates from `.git` to remote repository
- `git push -u <remote> <branch-name>`
  - moves updates from `.git` to remote repository, sets upstream branch

---

## Remote Commands 2

- `git clone <remote-url>`
  - copies the remote repo to your local machine
- `git pull <remote> <branch-name>`
  - gets updates AND merges from remote repository

## Foundation

- Your future company will teach you their Git workflow
- You won't be expected to know any more than this
- Focus on mastering the fundamentals; building on top of those will be easy

## Today

- Learn Git *today*
- Push the days projects
- Push your nightly homework from now on

## No nested repos

```diff
 └── nest_stuff
     ├── home_for_a_bird
     │   ├── bluejays.rb
-    │   └── .git
     ├── nest_free
     │   ├── bunnies.rb
     │   └── turtles.rb
     └── .git
```
<!-- Links -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/tuesday-morning-boost
[Object Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/object-lecture
[Primitive vs Reference]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---objects--callbacks--scope--and-closure/primitive-vs-reference-quiz
[Object Destructuring]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/object-destructuring
[Spread and Rest]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/spread-and-rest
[Destructuring Quiz]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---objects--callbacks--scope--and-closure/destructuring-quiz