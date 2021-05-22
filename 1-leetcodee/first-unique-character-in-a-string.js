/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
debugger
var firstUniqChar = function(s) {
  if(s.length===1) return 0;
  
  s=s.split('');
  let map=s.reduce(function(agg, val) {
    if(!agg[val]) agg[val]=1;
    else agg[val]++;
    return agg;
  }, {})

  for(let i=0; i<s.length; i++) {
    if(map[s[i]]===1) return i;
  }

  return -1;  
};

firstUniqChar("leetcode");