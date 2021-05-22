/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 * 
 * @param {string} s
 * @return {number}
 */
debugger
var myAtoi = function(s) {
    let sign = 1;
    let signSetted = false;
    let numberSetted = false;
    let number = 0;
    let max = Math.pow(2, 31) - 1;
    let min = -1 * Math.pow(2, 31);

    for(let i=0; i<s.length; i++) {
      if(!numberSetted && s[i] === ' ') {
        continue;
      } else if(!numberSetted && !signSetted && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        signSetted = true;
        numberSetted = true;
      } else if(s[i] !== ' ' && s[i]*10/10 + number>= number) {
        numberSetted = true;
        number = number*10 + s[i]*10/10;
      } else {
        break;
      }
    }

    number = number!==0? number*sign : 0;
    if(number>0) number = Math.min(max, number);
    if(number<0) number = Math.max(min, number);
    return number;
};
 

function tester() {
  return myAtoi("42") === 42 
  && myAtoi("   -42") === -42
  && myAtoi("4193 with words") === 4193
  && myAtoi("words and 987") === 0
  && myAtoi("-91283472332") === -2147483648
  && myAtoi("00000-42a1234") === 0
  && myAtoi("  +  413") === 0
}

tester();