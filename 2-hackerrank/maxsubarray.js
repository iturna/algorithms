/*
https://www.hackerrank.com/challenges/maxsubarray/problem

 * Complete the 'maxSubarray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function maxSubarray(arr) {
    // Write your code here
    console.log(arr)
  const subArray = function() {
    let global = Number.MIN_SAFE_INTEGER;
    let local = 0;

    for(let num of arr){
      local = Math.max(num, local+num);
      global = Math.max(local, global);
    }

    return global;
  }

  const subSequence = function() {
    let global = Number.MIN_SAFE_INTEGER;
    for(let num of arr) {
      console.log(num, global+num, global)
      global = Math.max(num, global+num, global);
    }

    return global;
  }

  return [subArray(), subSequence()];

}

// maxSubarray([ 1, 2, -3, 4 ]) 
// maxSubarray([ 2, -1, 2, 3, 4, -5 ])
maxSubarray([-2, -3, -1, -4, -6]);