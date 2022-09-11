/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/


function recVolume(height) {
  let dimensions = [height];
  const _measure = (num) => {
    if (dimensions.length < 3) {
      dimensions.push(num);
    }
    if (dimensions.length === 3) {
      let sum = dimensions.reduce((acc, el) => (acc *= el));
      return sum;
    } else {
      return _measure;
    }
  };
  return _measure;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
