//https://www.hackerrank.com/challenges/picking-numbers/problem?h_r=next-challenge&h_v=zen

function pickingNumbers(a) {
  // Write your code here
  if(a.length===0) return 0;

  a.sort((a, b)=>a-b);

  let left = 0; 
  let right = 0; 
  let sum = 0;
  let max = 0;

  while(right < a.length) {
    let leftNum = a[left];
    let rightNum = a[right];

    if(rightNum-leftNum<2) {
      sum++;
      max = Math.max(max, sum);
      right++;
    } else {
      left++;
      sum--;
    }
  }

  return max;
}

//1 2 2 2 3
//1 |
//1


pickingNumbers([1, 2, 2, 3, 1, 2]);







 