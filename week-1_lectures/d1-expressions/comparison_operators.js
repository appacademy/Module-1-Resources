    // Less than/Greater than
    console.log(5 < 9);      // true
    console.log(5 > 9);      // false
    console.log('a' < 'b');  // true (dictionary order)
    console.log('cat' < 'cats'); // true (dictionary order)

    // Inclusive comparison
    console.log(7 <= 10);    // true
    console.log(10 >= 10);   // true 

    // Equality === and !==
    console.log(2 === 2);    // true
    console.log(2 === 2.1);  // false
    console.log(2 !== 2.1);  // true

    // Two equality operators, === and ==
    console.log(5 === '5'); // false
    console.log(5 == '5');  // true (types are coerced)
    console.log([] == 0);   // true (can be unpredictable)