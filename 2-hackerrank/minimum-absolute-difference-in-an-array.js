// Complete the minimumAbsoluteDifference function below.
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
function minimumAbsoluteDifference(arr) {
  arr.sort((a,b)=>a-b);
  
  return Math.min(...arr.slice(1).map((n,i)=>n-arr[i]));
}

minimumAbsoluteDifference([ -59, -36, -13, 1, -53, -92, -2, -96, -54, 75 ]);