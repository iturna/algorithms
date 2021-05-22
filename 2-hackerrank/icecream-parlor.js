// Complete the icecreamParlor function below.
// https://www.hackerrank.com/challenges/icecream-parlor/problem
function icecreamParlor(m, arr) {
  let cache = {};
  for(let i=0; i<arr.length; i++) {
    let num = arr[i];
    let remain = m - num;
    if(cache[num]) {
      return [cache[num], i+1];
    }
    else cache[remain] = i+1;
  }
}

icecreamParlor(6, [1,3,4,5,6])