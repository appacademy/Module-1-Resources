```js
console.log('hello'[2]);
```

<quiz>
  <question>
    <p>What will the code above print out?</p>
    <answer>h</answer>
    <answer>e</answer>
    <answer correct>l</answer>
    <answer>he</answer>
    <explanation>The first char of a string is at index 0, the second char is at index 1, etc..</explanation>
  </question>
</quiz>

```js
console.log(24 % 6);
```

<quiz>
  <question>
    <p>What will the code above print out?</p>
    <answer>1</answer>
    <answer correct>0</answer>
    <answer>5</answer>
    <answer>6</answer>
    <explanation>This modulo operation results in the remainder of 24 divided by 6.</explanation>
  </question>
</quiz>

```js
console.log((false || true) && !true);
```

<quiz>
  <question>
    <p>What will the code above print out?</p>
    <answer correct>false</answer>
    <answer>true</answer>
    <explanation>Since the right side evaluates to false, the expression will always be false.</explanation>
  </question>
</quiz>


```js
let num = 100;
let isBig = num >= 100;
let isSmall = num < 100;
console.log(isBig || isSmall);
```

<quiz>
  <question>
    <p>What will the code above print?</p>
    <answer correct>true</answer>
    <answer>false</answer>
    <answer>1</answer>
    <answer>NaN</answer>
    <explanation>`>=` means greater-than-or-equal-to, so it will return true since 100 equals 100. Since `isBig` is `true`, the or will evaluate to true.</explanation>
  </question>
</quiz>

```js

```

<quiz>
  <question>
    <p>Which of the following is NOT true?</p>
    <answer>!(A && B) === !A || !B</answer>
    <answer>!A && !B === !(A || B)</answer>
    <answer correct>A && B === !A || !B</answer>
    <answer> !(!A && !B) === A || B</answer>
    <explanation>DeMorgan's law states that when distributing NOT across an OR, we must flip the OR to an AND. All three correct answers are variations on this law and can be verified with truth tables.</explanation>
  </question>
</quiz>

```js
console.log(1 + 2 * 3);
```

<quiz>
  <question>
    <p>What will the code above print out?</p>
    <answer>9</answer>
    <answer correct>7</answer>
    <answer>123</answer>
    <answer>6</answer>
    <explanation>multiplication has a higher precedence than addition</explanation>
  </question>
</quiz>

```js
console.log(1 == "1.0");
```

<quiz>
  <question>
    <p>What will the code above print out?</p>
    <answer>false</answer>
    <answer correct>true</answer>
    <answer>undefined</answer>
    <answer>NaN</answer>
    <explanation>The `==` operator will match numbers to their string representations.</explanation>
  </question>
</quiz>

```js
let x = 1;
x++;
x + 2;
console.log(x);
```

<quiz>
  <question>
    <p>What will the code above print out?</p>
    <answer>4</answer>
    <answer correct>2</answer>
    <answer>1</answer>
    <answer>undefined</answer>
    <explanation>`++` will increase a variable by 1, changing it's value. `x + 2` does not change the value of x.</explanation>
  </question>
</quiz>

```js
let name = "Brian";
```

<quiz>
  <question>
    <p>What type is the above `name` variable?</p>
    <answer correct>String</answer>
    <answer>Function</answer>
    <answer>Stack</answer>
    <answer>Array</answer>
    <explanation>A word surrounded by quotes is a string.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following types is mutable?</p>
    <answer>Boolean</answer>
    <answer>Number</answer>
    <answer>String</answer>
    <answer correct>Array</answer>
    <explanation>Arrays are mutable. Booleans, Numbers, and Strings are immutable.</explanation>
  </question>
</quiz>


<quiz>
  <question>
    <p>What is the best description of the string `slice()` function?</p>
    <answer>Divides a string into two</answer>
    <answer correct>Extracts a section of a string and returns a new string</answer>
    <answer>Removes the first character from a string</answer>
    <answer>Divides a string sentence into an array containing each word</answer>
    <explanation>`string.slice()` takes an index and an optional ending index and returns a new string containing that slice.</explanation>
  </question>
</quiz>