    // initialization:
    //   - declaration, creating the space for the variable
    //   - assignment, giving a value to the variable

    let state;  // declaration using javascript 'let'
    console.log(state);
    state = 'California'; // assignment
    console.log(state);

    let city = 'Sacramento'; // both (i.e. initialized in one line)
    console.log(city);

    // more assignment
    let age = 5;
    console.log(age); // 5
    age + 5;          // no assignment used, i.e. change not permanent
    console.log(age); // 5
    age = age + 5;    // assignment is used, change is permanent
    console.log(age); // 10
    age += 5;         // assignment is used, this is shorthand
    console.log(age); // 15

    // Using ++ and -- 
    age++;
    console.log(age); // 16
    age--;
    console.log(age); // 15