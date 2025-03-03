/* 
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
    You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

/*** My solution ***/

function removeChar(str){
    return str.slice(1,-1); // Toma desde el segundo caracter hasta el penúltimo 
};
 
/*** Another solution ***/

/** 1 **/
function removeChar(str){
    return str.substring(1, str.length-1);
};

/** 2 **/
function removeChar(str){
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
};
   
  
  