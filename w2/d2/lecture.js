/*



    Reference vs Primitive Types

    Reference Data Types: - Mutable - can be changed
      1. Objects
      2. Arrays(which are technically objects)
      3. reference

    Primitive Data Types: - Immutable - cannot be changed
      1. Null
      2. undefined
      3. number
      4. boolean
      5. string
      6. everything that isnt an object

*/


//Primitive example
let age = 27;// were saying point the age variable at the static data type 27 in memory
let newAge = age;//were saying point the newAge variable at whatever age was pointing at in memory, newAge is pointing at 27 now
age++;//i want to point the age variable at whatever it was pointing at, but plus one, so 27 + 1 = 28
//i want to point age now at 28 in memory
//BUT newAge is still pointing at 27
// console.log(age, newAge);//28 27


//Reference example
//when we create reference data types, memory is allocated for these types -  dynamic memory allocation
//it allocate memory as needed, when we are done using the object it will be garbage collected

//lets create a reference in memory
//variable cat that points at a reference to a object in memory
let cat = {
  name: 'mochi',
  age: 1
}
//a different reference memory
//looks the same but is different in memory let cat => <referenceObj> ==> { name:'mochi', age: 1  }
//let cat3 = <differenceReferenceObject> ==> { name:'mochi', age: 1  }
let cat3 = {
  name:'mochi',
  age: 1
}

console.log('look', cat === cat3)//they are different references in memory  <referenceObj> !== <differenceReferenceObject>

//were saying i want to point the cat2 variable at whatever cat is pointing at, its pointing at a reference to the cat object
let cat2 = cat;

//mutate the obj
cat.name = 'celebi';

console.log(cat, cat2);//changing one changed both!!!WHY? because its a reference data types
//both variables are pointing at the same reference in memory

//we have two variable pointing at the same reference, the cat obj
// so when we change one, we change both
// let cat => <referenceObj> ==> { name:'mochi', age: 1  }
// cat2 = cat
// cat2 => <referenceObj> ==> { name:'mochi', age: 1  }
// <referenceObj> === <referenceObj>
