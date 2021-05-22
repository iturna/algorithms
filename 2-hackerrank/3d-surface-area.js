/*
https://www.hackerrank.com/challenges/3d-surface-area/problem
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A) {
    // Write your code here
  A.push(new Array(A[0].length).fill(0));
  A.unshift(new Array(A[0].length).fill(0));

  let sum = 0;

  for(let i=0; i<A.length; i++) {
    A[i].push(0); A[i].unshift(0);
  }
console.log(A)
  for(let i=1; i<A.length; i++) {
    let prev = A[i-1];
    let curr = A[i];

    for(let j=1; j<curr.length; j++) {
      sum += Math.abs(curr[j-1] - curr[j]); //front
      sum += Math.abs(prev[j] - curr[j]); //left
      sum += curr[j]?1:0; //up
      sum += curr[j]?1:0; //buttom
    }
  }

  return sum; 
}


// surfaceArea([ [ 1, 3, 4 ], [ 2, 2, 3 ], [ 1, 2, 4 ] ]);
surfaceArea([ [ 1 ]]);
