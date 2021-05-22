/**
 * https://leetcode.com/problems/n-queens/
 * 
 * @param {number} n
 * @return {string[][]}
 * 
 * Constraints:

1 <= n <= 9

 */
debugger
var solveNQueens = function(n) {
  if(n===2) return [];
  let matrix = [];
  let maxCount = 0;
  let retMatrix = [];
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      buildMatrix(matrix, n);
      let count = putAndCountQueens(matrix, i, j);
      if(count > maxCount) {
        retMatrix = [renderMatrix(matrix)];
        maxCount = count;
      } else if(count === maxCount) {
        retMatrix.push(renderMatrix(matrix));
      }
    }
  }
  return retMatrix;
};

function renderMatrix(matrix) {
  let retVal = [];
  for(let i=0; i<matrix.length; i++) {
    let rowStr = "";
    for(let j=0; j<matrix.length; j++) {
      if(matrix[i][j]==='Q') {
        rowStr += "Q";
      } else {
        rowStr += "."
      }
    }
    retVal.push(rowStr);
  }
  return retVal;
}

function putAndCountQueens(matrix, k, m) {
  let count=0;
  let initial=true;
  //put queen at the squares
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix.length; j++) {
      if(initial) {
        i+=k;
        j+=m;
        initial=false;
      }
      if(putQueen(matrix, true, i, j, 1, 0)) {
        count++;
        putQueen(matrix, false, i, j, -1, 0);
        putQueen(matrix, false, i, j, 0, 1);
        putQueen(matrix, false, i, j, 0, -1);
        putQueen(matrix, false, i, j, 1, 1);
        putQueen(matrix, false, i, j, -1, -1);
        putQueen(matrix, false, i, j, 1, -1);
        putQueen(matrix, false, i, j, -1, 1);
      }
    }
  }
  
  return count;
}


function putQueen(matrix, initial, i, j, i_a, j_a) {
  if((i)<0 || (j)<0 || (i)>matrix.length-1 || (j)>matrix.length-1) {
    return 0;
  }

  if(initial && matrix[i][j]) {
    return 0;
  } else if(initial && !matrix[i][j]) {
    matrix[i][j]='Q';
  } else if(!initial && matrix[i][j]!=="Q") matrix[i][j]=1;

  putQueen(matrix, false, i+i_a, j+j_a, i_a, j_a);

  return 1;
}

function buildMatrix(matrix, n) {
    //build matrix
  for(let i=0; i<n; i++) {
    matrix[i]=[];
    for(let j=0; j<n; j++) {
      matrix[i][j]=0;
    }
  }
}

solveNQueens(5);