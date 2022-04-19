/*
Mocha is the testing suite that we'll make use of for many of our projects at
appAcademy. We should have it installed globally (we can verify by typing which
mocha in our terminals) and can make use of it for anything that has tests.

Yesterday's advanced array methods project had some mocha tests for us to run to
check that our work was done correctly. We have a few ways of getting mocha to
look at our code and check it against the tests.

Common operations:
  -  mocha
        this will run all test suites and give output as to their statuses. When
        submitting assessments we _must_ be able to run this command and get
        output in order to award any points.
  -  mocha path/to/test.js
        this will run a specific test. Usually you'll have a problems directory
        and a corresponding tests directory. More often than not the names of
        the test files will be identical to the names of the problem files.
  - mocha -b
        this tells mocha to run all tests, but break operation as soon as it
        hits a test that fails. When working from top to bottom, this is a handy
        way to have mocha only test what you've worked on so far
  - mocha -g functionName
        this makes use of a unix function called grep to find any test that
        satisfies your search criteria. Usually you can put in the name of your
        function and it will find and run the associated tests for it.

Let us know if you run into any trouble or have any questions making use of the
Mocha testing library.
*/