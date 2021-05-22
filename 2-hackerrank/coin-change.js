/*
https://www.hackerrank.com/challenges/coin-change/problem

 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(n, c) {
    // Write your code here
    let start = new Date().getTime();
    let visit = {};

    const backtrack = function(index, totalCoins, debug) {
      // console.log(debug, totalCoins)
      let key = totalCoins + ':' + index;
      if(visit[key]) return visit[key];
      if(totalCoins === n) {
        // console.log('match', debug);
        return 1;
      } else if(c[index] === undefined) {
        return  0;
      } else  {
        let count = 0;
        while(totalCoins <= n) {
          count += backtrack(index+1, totalCoins, debug);
          totalCoins += c[index];
          debug += '-' + c[index];
          visit[key] = count;
        }

        return count;
      }
    }

    let ret = backtrack(0, 0, '');
    let end = new Date().getTime();
    console.log('execution time ' + (end-start) + ' ms');

    return ret;
}

// getWays(3, [8, 3, 1, 2])
// getWays(4, [1,2,3])
// getWays(10, [2, 5, 3, 6]);
getWays(245, [16, 30, 9, 17, 40, 13, 42, 5, 25, 49, 7, 23, 1, 44, 4, 11, 33, 12, 27, 2, 38, 24, 28, 32, 14, 50])




