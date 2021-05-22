// Complete the pairs function below.
// https://www.hackerrank.com/challenges/pairs/problem
function pairs(k, arr) {
debugger
  if(arr.length === 0) return 0;

  let numbers = {}; 
  let remains = {};
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let remain = number - k;
    
    if(!numbers[number]) {
      numbers[number] = true;
    }

    if(!remains[remain]) {
      remains[remain] = true;
    }

    if(remains[number]) {
      count++;
    }

    if(numbers[remain]) {
      count++;
    }
  }

  return count;
}

pairs(2, [1, 5, 3, 4, 2 ]);