/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * 
 * Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

I             1
V             5
X             10
L             50
C             100
D             500
M             1000

 */
debugger
var romanToInt = function(s) {
  s = s.split('');
  s.push(' ');

  let map = {' ':0, 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
  let number = 0;
  let j = 0;
  for(let i=0; i<s.length-1; i++) {
    j = i+1;
    if(map[s[i]]<map[s[j]]) {
      number+=map[s[j]]-map[s[i]];
      i++;
    } else {
      number+=map[s[i]];
    }
  }

  return number;
};

romanToInt("MCMXCIV");