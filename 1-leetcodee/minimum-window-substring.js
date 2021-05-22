/**
 * https://leetcode.com/problems/minimum-window-substring/submissions/
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
debugger
var minWindow = function(s, t) {
  t = t.split('');
  let len = t.length;

  if(len===0) return '';

  let map = t.reduce(function(agg, val) {
    if(!agg[val]) agg[val] = 1;
    else agg[val]++;
    return agg;
  }, {});

  let left = 0;
  let right = 0;

  let min = Number.MAX_SAFE_INTEGER;
  let coordinates = null;

  while(right<s.length) {
    let charR = s[right];

    if(map[charR]>0) { //found a match
      map[charR]--;
      len--;
      if(len===0) { //satisfies
        if((right-left) < min) {
          min = right - left;
          coordinates = [left, right];
        }

        while(left<=right) {
          let charL = s[left];
          left++;
          if(map[charL]>=0) { 
            len++;
            map[charL]++;
            break;
          } else if(map[charL]<0) {
            map[charL]++;
          }

          if((right-left) < min) {
            min = right - left;
            coordinates = [left, right];
          }
        }
      }
    } else if(map[charR]<=0) {
      map[charR]--;
    } 
    right++;
  }

  return coordinates? s.substring(coordinates[0], coordinates[1]+1) : '';
};



function tester() { 
  return minWindow("ADOBECODEBANC", "ABC") === 'BANC'
  && minWindow('a', 'a') === 'a'
  && minWindow("aaaaaaaaaaaabbbbbcdd", "abcd") === 'abbbbbcd'
}

tester();