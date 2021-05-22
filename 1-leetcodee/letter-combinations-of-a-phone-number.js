/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * 
 * @param {string} digits
 * @return {string[]}
 * 
 * Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
 */

debugger
var letterCombinations = function(digits) {
    if(digits.length===0) return [];

    let map={'2': ['a','b','c'], '3': ['d','e','f'], '4': ['g','h','i'], '5': ['j','k','l'], '6': ['m','n','o'], '7': ['p','r','q','s'], '8': ['t','u','v'], '9': ['w','x','y','z']};

    return letterCombinationRecursive(map, digits, 0);
};

function letterCombinationRecursive(map, digits, index) {
  if(index===digits.length) {
    return [];
  }
  
  return mixTwoLetters(map[digits.charAt(index)], letterCombinationRecursive(map, digits, ++index));
}

function mixTwoLetters(array1, array2) {
  let ret=[];

  if(array1.length===0 && array2.length===0) return [];
  if(array1.length===0) return array2;
  if(array2.length===0) return array1;
  for(let i=0; i<array1.length; i++) {
    for(let j=0; j<array2.length; j++) {
      ret.push(array1[i] + array2[j]);
    }
  }
  return ret;
}

letterCombinations("476245");
// letterCombinations("23");

