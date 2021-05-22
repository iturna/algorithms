
/*
https://www.hackerrank.com/challenges/lego-blocks/problem
 * Complete the 'legoBlocks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function legoBlocks(n, m) {
    // Write your code here
    let height = n;
    let width = m;
    let mod = 10**9 + 7;
    let ans = 0;
    let diff = 0;
    let cache = {};

    const permutation = function(remain, cache) {
      if(remain < 0) return 0;
      if(remain === 0) return 1;
      if(cache[remain]) return cache[remain];
      else {
        let ret = permutation(remain-4, cache) + permutation(remain-3, cache) + permutation(remain-2, cache) + permutation(remain-1, cache);
        cache[remain] = ret;
        return cache[remain];
      }
    }

    const calcVerticalSplits = function(max, cache, total=0) {
      let mid = Math.floor(max/2+0.5);
      for(let i=1; i<=mid; i++) {
        let diff = i-1===0?0:(permutation(i-1, cache)**height);
        total += (permutation(i, cache)**height-diff)*(permutation(max-i, cache)**height-diff)+diff;
        console.log(i, diff, (permutation(i, cache)**height-diff), (permutation(max-i, cache)**height-diff), total)
      }
      return total
    }

    ans = permutation(width, cache)**height;
    let add = permutation(width-2, cache)**height;
    diff = calcVerticalSplits(width, cache);

    console.log(ans, add, diff, ans-diff-3375)
    return ans + add - diff;
}

// legoBlocks(4, 4);
// legoBlocks(3, 2);
// legoBlocks(2, 3);
// legoBlocks(3, 3);
// legoBlocks(2, 2);
// legoBlocks(1, 1)
legoBlocks(2, 4)