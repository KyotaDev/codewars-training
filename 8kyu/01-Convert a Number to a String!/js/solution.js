/*

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

*/

/**** My solution ****/

function numberToString(num) {
  let number = String(num);
  return number;
}


/**** Other solutions ****/

/** 1 **/
function numberToString(num) {
  return num.toString();
}

/** 2 **/
function numberToString(num) {
  return String(num);
}

/** 3 **/
const numberToString = num => `${num}`;

/** 4 **/
const numberToString = num => num.toString();


