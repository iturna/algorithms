/*
https://www.hackerrank.com/challenges/non-divisible-subset/problem
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Writce your code here
    let arr = [];
    let mapCount = {};
    for(let i=0; i<s.length; i++) {
      s[i] = s[i]%k;
      let val = s[i];

      if(mapCount[val]) mapCount[val]++;
      else {
        mapCount[val] = 1;
        arr.push(val);
      }
    }

    // console.log(mapCount);

    s = [];
    let count = 0;

    for(let i=0; i<arr.length; i++) {
      if(arr[i]===0 && mapCount[arr[i]]) {count++; mapCount[arr[i]]=0;}
      else if(arr[i]+arr[i]===k && mapCount[arr[i]]>1) {count++; mapCount[arr[i]]=0;}
      else { 
        count += Math.max(mapCount[arr[i]], mapCount[k-arr[i]]?mapCount[k-arr[i]]:0);
        mapCount[arr[i]] = 0;
        mapCount[k-arr[i]] = 0;
      }
    }

    return count;
}

// nonDivisibleSubset(3, [1, 7, 2, 4]); //3

nonDivisibleSubset(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //5

// nonDivisibleSubset(7, [
//   278, 576, 496, 727,
//   410, 124, 338, 149,
//   209, 702, 282, 718,
//   771, 575, 436
// ]); //11