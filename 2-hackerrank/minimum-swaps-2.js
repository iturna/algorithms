// Complete the minimumSwaps function below.
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
function minimumSwaps(arr) {

    if(!arr) return 0;
    if(!arr.length) return 0;
    let total = 0;
    let map = {};

    for(let i = 0; i < arr.length; i++) {
      total += search(arr, i, map, 0)-1;
    }

    return total;
}

function search(arr, i, map, cycle) {
  while(!map[arr[i]]) {
    map[arr[i]] = true;
    ++cycle;
    i = arr[i] - 1;
  }

  return cycle === 0? 1 : cycle;
}


minimumSwaps([4,1,2,5,6,3]);