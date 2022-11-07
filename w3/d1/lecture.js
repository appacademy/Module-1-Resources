/*

  String interpolation!

  - Alternative way to include values in our strings
  - So that we dont have to conctenating

 */

  //old way
  let firstName = 'brandon';
  let lastName = 'laursen';

  //concatenation
  let greeting = 'Hello ' + firstName + ' ' + lastName + '!';
  // console.log(greeting);

  //lets do the same things with string interpolation
  let newGreeting = `Hello ${firstName} ${lastName}!`
  // console.log(newGreeting)//Hello brandon laursen!

  let hello = () =>'hello'

  let names = ['brandon', 'jojo', 'braxton', 'charlie', 'jesse']
  for(let i = 0; i < names.length; i++){
    let name = names[i];
    console.log(`${names[i]} ${hello()}`);

  }
