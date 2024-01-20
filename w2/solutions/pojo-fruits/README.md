# POJO Data Manipulation Practice

In this practice, you will write functions that access and manipulate data from
a real data set on fruit types. The data set is in the __fruit-data.js__ file.

The data set is structured as an array, including 31 objects. Each object
represents the data for a single fruit. The example below shows the data
structure for each object:

```javascript
// fruit-data.js file

const fruits = [        // large array of 31 different fruits
    {                       // each fruit represented by an object
        "genus": "Malus",
        "name": "Apple",
        "id": 6,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {         // nested object contains nutrition information
            "carbohydrates": 11.4,
            "protein": 0.3,
            "fat": 0.4,
            "calories": 52,
            "sugar": 10.3
        }
    },
    // ...followed by 30 more fruit objects with the same structure
];
```

You will need to use many of the POJO methods that you have already learned to
complete each task.

## Phase 0: Setup

To get started, use the following commands:

1. Clone the starter repository
2. `cd` into the project directory
3. `npm install` to install dependencies

The `npm test` command will run all the tests. If you have any trouble with this
don't hesitate to ask a TA for help!

To test only one of the test files at a time, you can run the command,
`npm test test/<test file name>` (e.g.
`npm test test/01-fruit-data-structure-spec.js`), where `test` is the name of
the test folder. You must run this command one directory above the `test`
directory.

_You may notice the `package.json`/`package-lock.json` files and
`node_modules` directory. You do not need to edit any of those contents. Those
files are what we use to package the project and create the test cases._

## Phase 1: Understanding the Data Structure

Start in the __problems/01-fruit-data-structure.js__ file. Write out six
functions according to the directions. The return values of these functions will
help you understand the structure of the data within the `fruits` array.

Complete each function in order, because you may be able to use some of your
functions as helper functions in later problems.

Run `npm test test/01-fruit-data-structure-spec.js` to run all the test specs
for this phase. When all of the tests pass, you can move on to Phase 2.

## Phase 2: Manipulating Data within Objects

In this phase, you will practice manipulating the data within the data objects;
adding keys and values, updating key names and values, and deleting key-value
pairs.

Run `npm test test/02-manipulate-fruit-objects-spec.js` to run all the test
specs for this phase. There are multiple test specs for each problem. Run the
tests often, as the error messages for the failed tests will help you to debug
your code.
