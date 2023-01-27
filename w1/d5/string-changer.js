
function stringChanger(word, operation) {

  if (operation === 'capitalize') {

    // let firstLetter = word[0];
    // let firstCapitalized = firstLetter.toUpperCase();
    // let chunk = word.slice(1);
    // return firstCapitalized + chunk;

    // We could save things to variables step by step
    // as we did above or we can just do...
    return word[0].toUpperCase() + word.slice(1);

  }

  else if (operation === 'uppercase') {

    return word.toUpperCase();

  }

  else if (operation === 'double') {

    return word + word;

  }

  else if (operation === 'reverse') {

    // Take a string, split it at every letter (the empty '' thing does that)
    // That gives us an array which we can reverse
    // Then we just stick the letters back together, voila!

    return word.split('').reverse().join('')

    // The alternative method below iterates backwords thru
    // the string and "reconstructs" a new string

    // let reversed = '';

    // for (let i = word.length - 1; i >= 0; i--) {

    //   let letter = word[i];
    //   reversed += letter;

    // }

    // return reversed

  } else return word;
}
