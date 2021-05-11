# W3 D4

## [Morning Boost]

## Objects

`Video Lectures`: 18 minutes

- [Object Lecture]
- [Primitive vs Reference]

`Discussion`

- Arrays are contestants for American Idol
  - I can go down the line of contestants, I can get a specific
  contestant out of line by knowing their number.
- Objects are a room full of people at some social benefit
  - I can go on the intercom and ask for 'Mr. Importantpersonson' to come
  to reception.
  - We can use dot notation if we are LITERALLY referring to the sting
  - We can use bracket notation for whatever
    - strings
    - variables

```js
let contestants = [
    'Kelly Clarkson',
    'Rubben Studdard',
    'Fantasia Barrino',
    'Carrie Underwood',
];
// contestant 3 please step forward
console.log(contestants[3]); //Carrie Underwood

let roomOfRichPeople = {
    Importantpersonson: "That's me!",
    Bezos: 'Yes?',
    Gates: "That's my hat!",
};

let thePersonWhoLostTheirHat = 'Gates';

// Mr. Importantpersonson, are you here?
console.log(roomOfRichPeople['Importantpersonson']); 
console.log(roomOfRichPeople.Importantpersonson); 

// Excuse me, someone lost their hat...
console.log(roomOfRichPeople[thePersonWhoLostTheirHat]); 
```

- We can assigned key-value pairs in JS much like we would reassigning array indices

  ```js
  let obj = {}

  obj.name = 'Mylo';
  obj['age'] = 7000;
  obj.name = 'Gandalf';

  console.log(obj.name);
  console.log(obj.location);
  console.log(obj.age);
  ```

- You can check if a key exists by seeing if it's undefined.

  ```js
  let story = {
    beginning: 'Once upon a time...',
    end: 'And they lived happily every after',
  };

  let makeAStory = function () {
      if (story.middle === undefined) {
          story.middle = 'drama';
          console.log('added middle');
      } else {
          console.log('story complete');
      }
  };
  makeAStory();
  makeAStory();
  ```

- Why objects?
  - Instant look up time.
  - Allows us a term/definition (key-value)

    ```js
    let arrUser = ['Mylo', 7000, 'Module Instructor', 'Rural America'];

    let arrAge;

    for (let i = 0; i < arrUser.length; i++) {
        let ele = arrUser[i];
        if (typeof ele === 'number') {
            arrAge = ele;
        }
    }
    console.log(arrAge);

    let user = {
        name: 'Mylo',
        age: 7000,
        job: 'Module Instructor',
        address: 'Rural America',
    };

    console.log(user.age);
      ```

  - Primitive

    ```js
    let age = 10;
    let numberOfFingers = age;
    age = numberOfFingers + 1;
    console.log(age, numberOfFingers);
    ```

  - Reference

      ```js
      let Biff = {
          type: 'dog',
          age: 10,
      };

      let Buster = Biff;
      Biff.age = 0;

      console.log(Biff, Buster);
      ```

## Destructuring

`Video Lectures`: 18 minutes

- [Object Destructuring]

`Discussion`

- Destructuring is just matching a pattern.

  ```js
  let {person, animal} = {person: "Mylo", animal: "elephant"}
  // let person = (the Object).person
  // let animal = (the Object).animal
  console.log(person, animal)

  let [game, player] = ["Dota 2", "Austin"];
  // let game = (the Array)[0]
  // let player = (the Array)[1]
  console.log(game, player)

  let music = {tempo: 120, genre: "March"}
  let {tempo, genre} = music;
  console.log(tempo, genre);
  ```

## Rest and Spread

`Video Lectures`: 18 minutes

- [Spread and Rest]

`Discussion`

- The same side of very different coins.
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
  - reset the staging area and the working directory to match the most recent commit ( or specified commit )
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
[Morning Boost]: https://open.appacademy.io/learn/js-py---may-2021-cohort-1-online/week-2-may-2021-cohort-1-online/tuesday-morning-boost
[Object Lecture]: https://open.appacademy.io/learn/js-py---may-2021-cohort-1-online/week-2-may-2021-cohort-1-online/object-lecture
[Primitive vs Reference]: https://open.appacademy.io/learn/js-py---may-2021-cohort-1-online/week-2-may-2021-cohort-1-online/primitive-vs-reference
[Object Destructuring]: https://open.appacademy.io/learn/js-py---may-2021-cohort-1-online/week-2-may-2021-cohort-1-online/object-destructuring
[Spread and Rest]: https://open.appacademy.io/learn/js-py---may-2021-cohort-1-online/week-2-may-2021-cohort-1-online/spread-and-rest
