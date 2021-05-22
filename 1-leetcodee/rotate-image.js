/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
 */
debugger
var rotate = function(matrix) {
    let len = matrix.length;
    //transpose matrix
    for(let i=0; i<len-1; i++) {
      for(let j=i+1; j<len; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }


    //swap horizantally
    for(let i=0; i<=Math.floor(len/2-0.5); i++) {
      for(let j=0; j<len; j++) {
        [matrix[j][i], matrix[j][len-i-1]] = [matrix[j][len-i-1], matrix[j][i]];
      }
    }
    return matrix;

};

rotate([[1,2,3],[4,5,6],[7,8,9]]);