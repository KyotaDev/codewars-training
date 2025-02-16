/* 
    Description:
    Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

    Examples

    "Hi!" --> "H!!"
    "!Hi! Hi!" --> "!H!! H!!"
    "aeiou" --> "!!!!!"
    "ABCDE" --> "!BCD!"
*/


/*** My solution ***/

function replace(s) {
    let letrasSeparadas = s.split('');
    let nuevaPalabra = '';
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    letrasSeparadas.forEach((element, index, letrasSeparadas) => {
      if(vocales.includes(letrasSeparadas[index])){
        nuevaPalabra = nuevaPalabra + '!';
      }
      else{
        nuevaPalabra = nuevaPalabra + letrasSeparadas[index];
      }
    });
    return nuevaPalabra;
}

/*** Another solution ***/

/** 1 **/

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
}

/** 2 **/
const replace = s => s.replace(/[aeiou]/gi, '!');

/** 3 **/
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');