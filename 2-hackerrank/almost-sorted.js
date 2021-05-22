/*
https://www.hackerrank.com/challenges/almost-sorted/problem

 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function almostSorted(arr) {
    // Write your code here
  let arrOrj = [...arr];
  arr.sort((a, b) => a-b);
  let ans = {'start':-1, 'end':-1, 'type':'swap'};
  if(!arrayIdentical(arr, arrOrj, ans)) {
    // console.log(ans)
    if(ans.type === 'reverse' && !isReverseSorted(arrOrj, ans.start, ans.end)) {
      console.log('no');
      return;
    } 
  }
  
  console.log('yes');
  console.log(ans.type + ' ' + ++ans.start + ' ' + ++ans.end);
}

function arrayIdentical(array1, array2, ans) {
  if(array1.length !== array2.length) {
    return false;
  } 

  let ret = true;

  let diffCount = 0; 

  for(let i=0; i<array1.length; i++) {
    
    if(array1[i] !== array2[i]) {
      diffCount++;

      if(diffCount>2) ans.type = 'reverse';

      if(ans.start === -1) {
        ans.start = i;
      } else {
        ans.end = i;
      }

      ret = false;
    }
  } 

  return ret;
}

function isReverseSorted(array, start, end) {
  for(let i=end; i>start; i--) {
    if(array[i] > array[i-1]) {
      return false;
    }
  }

  return true;
}


// almostSorted([1, 5, 4, 3, 2, 6]); //yes reverse 2 5
almostSorted([3, 1, 2]);
// almostSorted([4, 2]) //yes 
// almostSorted([43, 65, 1, 98, 99, 101]); //no

