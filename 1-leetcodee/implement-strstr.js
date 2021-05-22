/**
 * https://leetcode.com/problems/implement-strstr/description/
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
 */
var strStr = function(haystack, needle) {
  if(needle==='') return 0;
  if(needle===haystack) return 0;
  if(needle.length>haystack.length) return -1;
  let foundIndex = -1;
  for(let i=0; i<=haystack.length-needle.length; i++) {
    if(foundIndex!==-1) return foundIndex;
    if(haystack.charAt(i)===needle.charAt(0)) {
      foundIndex = i;
      if(needle.length===1) return foundIndex;
      for(let j=1; j<needle.length; j++) {
        if(haystack.charAt(i+j)!==needle.charAt(j)) {
          foundIndex=-1;
        }
      }
    }
  }
  return foundIndex;
};


strStr("hello", "ll");