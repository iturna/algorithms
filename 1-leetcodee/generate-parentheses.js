/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
debugger
var generateParenthesis = function(n) {
  let array=[];
  generateParanthesisHelper(n, "", array, 0, 0);
  return array;
};

function generateParanthesisHelper(n, current_string, array, open, close) {
  if(current_string.length===n*2) {
    array.push(current_string);
    return;
  }

  if(open<n) generateParanthesisHelper(n, current_string + "(", array, open+1, close);
  if(close<open) generateParanthesisHelper(n, current_string + ")", array, open, close+1);
}

generateParenthesis(3);


