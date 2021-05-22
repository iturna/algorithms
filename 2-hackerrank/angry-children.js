// Complete the maxMin function below.
// https://www.hackerrank.com/challenges/angry-children/problem
function maxMin(k, arr) {
  arr.sort((a,b) => a-b);
  return Math.min(...arr.slice(k-1).map((n, i)=> n-arr[i]));
}

maxMin(3, [ 10, 100, 300, 200, 1000, 20, 30 ]);