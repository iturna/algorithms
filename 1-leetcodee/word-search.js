/**
 * https://leetcode.com/problems/word-search/
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

 */
debugger
var exist = function(board, word) {

  for(let i=0; i<board.length; i++) {
    for(let j=0; j<board[i].length; j++) {
      if(existHelper(board, word.split(''), 0, i, j, {})) {
        return true;
      }
    }
  }
  return false;
};

function existHelper(board, word, index, i, j, cache) {
  if(i===1 && j===0) {
    let str = `test`;
  }

  if(i<0 || j<0 || i>=board.length || j>=board[i].length || board[i][j]!==word[index]) {
    return false;
  } else {
    // if(word.length <= index) {
    //   return true;
    // }
    if(board[i][j]===word[index]) {
      if(cache[[i,j]]) return false;
      if(word.length-1===index) return true;
      cache[[i,j]]=board[i][j];
      index++;
    }
  }

  let ret0 = existHelper(board, word, index, i-1, j, cache);
  let ret1 = existHelper(board, word, index, i+1, j, cache);
  let ret2 = existHelper(board, word, index, i, j+1, cache);
  let ret3 = existHelper(board, word, index, i, j-1, cache);

  if(ret0 || ret1 || ret2 || ret3) {
    return true;
  }
  if(cache[[i,j]]) cache[[i,j]]=undefined;
  return false;
}
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED");
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE");
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB");
// exist([["a","b"],["c","d"]], "cdba");
// exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS");



