# W3D4 - JavaScript Runtime

## [Morning Boost]

`Vocabulary`

- Thread of execution
  - A sequence of commands
- Single-threaded execution
  - Only ONE command can be processed at a time
- Multi-threaded execution
  - Multiple commands can be process at a time
- Event Loop
  - The model of execution that JavaScript uses
  - Two parts in JS
    - Call Stack
      - Tracks the 'current task in progress'
    - Message Queue
      - Tracks the order in which handle 'to-do' tasks.

## Threading, Event Loop, Async

`Video Lectures`

- [Threading Lecture]
  - _[Code Along](./snippets/threading.js)_
- [Event Loop Lecture]
  - _[Code Along](./snippets/event_loop.js)_
- [Synchronous vs Asynchronous]
  - _[Code Along](./snippets/async_sync.js)_

`Threading`

![threading]

`Async vs. Sync`

- What does Synchronous mean?
  - Doing one task at a time
    - Think of it like driving. When you're driving you are doing one thing,\
    getting from point A to point B. Your car is either moving or not moving.\
    Let's say you come across a train. You stop your car, you wait for the\
    train to pass, then head for point B.

- What does Asynchronous mean?
  - Leaving a process to finish and run more code while you're waiting.
    - Think of it like doing chores. You wouldn't put your clothes in the\
    wash and just stand there to wait for the clothes to finish before doing\
    anything else. You'd vacuum, do dishes, maybe take a nap... me... then,\
    when your clothes have finished, you'd move them to the dryer\
    or clothes line.
    - Can you think of other asynchronous processes you've experience in your\
    life?

## setTimeout & setInterval

`Video Lectures`

- [setTimeout Lecture]
- [setInterval Lecture]

<!-- Links per cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---mar-2021-cohort-1-online/week-3-mar-2021-cohort-1-online/thursday-morning-boost
[Threading Lecture]: https://open.appacademy.io/learn/js-py---mar-2021-cohort-1-online/week-3-mar-2021-cohort-1-online/threading-lecture
[Event Loop Lecture]: https://open.appacademy.io/learn/js-py---mar-2021-cohort-1-online/week-3-mar-2021-cohort-1-online/event-loop-lecture
[Synchronous vs Asynchronous]: https://open.appacademy.io/learn/js-py---mar-2021-cohort-1-online/week-3-mar-2021-cohort-1-online/synchronous-vs-asynchronous-lecture
<!-- constant links -->
[threading]: /threading.png
