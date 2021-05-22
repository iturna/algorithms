/*
https://www.hackerrank.com/challenges/absolute-permutation/problem
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
    // Write your code here

  let i = 1;
  let ret = [];
  let visit = {};
  let numbers = {};
  for(let i=1; i<=n; i++) {
    numbers[i] = 1;
  }


  while(i <= n) {
    if(i-k > 0 && !visit[i-k] && numbers[i-k]) {
      ret.push(i-k);
      visit[i-k] = 1;
      i++;
    } else if(!visit[i+k] && numbers[i+k]) {
      ret.push(i+k);
      visit[i+k] = 1;
      i++;
    } else {
      if(!ret.length) return [-1];
      delete visit[ret.pop()];
    }

  }

  return ret.length!==n?[-1]:ret;
}
// absolutePermutation(2, 1);
// absolutePermutation(3, 0);
absolutePermutation(10,3);
