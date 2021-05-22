/*
https://www.hackerrank.com/challenges/unbounded-knapsack/problem

 * Complete the 'unboundedKnapsack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function unboundedKnapsack(k, arr) {
  // Write your code here
  console.log(k, arr);
  arr.sort((a, b) => b-a);
  let near = 0;
  let sum = 0;
  let stopExecuting = false;

  const backtrack = function() {
    if(sum <= k) near = Math.max(near, sum);
    if(sum === k) stopExecuting = true;
    if(sum >= k) return;

    for(let i=0; i<arr.length; i++) {
      if(stopExecuting) return;
      sum+=arr[i];
      backtrack();
      sum-=arr[i];
    }
  }

  backtrack();

  return near;
}

// unboundedKnapsack(10, [2, 3, 4]);
// unboundedKnapsack(12, [ 1, 6, 9 ]);
// unboundedKnapsack(11, [ 3, 7, 9 ]);
