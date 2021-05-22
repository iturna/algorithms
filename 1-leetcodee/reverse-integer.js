/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 * 
 * Constraints:

-231 <= x <= 231 - 1
 */
debugger
var reverse = function(x) {
    if(x.length<2) return x;
    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31) -1;
    x=x.toString().split('');
    let sign = '+1';
    if(x[0]==='-') {
      x.shift();
      sign='-1';
    } 
    let reversed=sign*parseInt(reverseArray(x).join(''));

    if(reversed<=min || reversed>=max) return 0;

    return reversed;

};

function reverseArray(array) {
  let len=array.length;
  let mid=Math.floor(len/2-0.5);
  for(let i=0; i<=mid; i++) {
    [array[i], array[len-i-1]]=[array[len-i-1], array[i]];
  }

  return array;
}

reverse('123');