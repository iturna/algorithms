/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 * 
 Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
 */
debugger
var longestPalindrome = function(s) {
    s=s.split('');
    
    let max = {count:0, left:null, right:null};
    for(let i=0; i<s.length-1; i++) {
      palindromeHelper(s, 0, max, i, i+1);
      palindromeHelper(s, 0, max, i, i);
    }
    return s.slice(max.left, max.right+1).join('');
};

function palindromeHelper(s, count, max, left, right) {
  if(left<0 || right>s.length-1 || s[left]!==s[right]){
    return;
  }

  if(s[left]===s[right]) {
    if(left===right) count++;
    else count +=2;
    if(count>=max.count) {
      max.count=count;
      max.left=left;
      max.right=right;
    }
    palindromeHelper(s, count, max, left-1, right+1);
  } 
}

longestPalindrome('babad');