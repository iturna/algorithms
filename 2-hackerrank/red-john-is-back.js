/*
https://www.hackerrank.com/challenges/red-john-is-back/problem

 * Complete the 'redJohn' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function redJohn(n) {
  // Write your code here
  const bricks = [1, 4];
  const set = new Set();

  const trackback = function(arr, visit) {
    // let key = arr.join(':');
    // if(visit[key]) return;
    // visit[key] = 1;

    if(n === 0) {
      set.add(arr.toString());
      return;
    }
    if(n<0) return;

    for(let i=0; i<bricks.length; i++) {
      let brick = bricks[i];
      if(n-brick<0) continue;
      n -= brick;
      arr.push(brick);
      trackback(arr, visit);
      n += brick;
      arr.pop();
    }
  }

  trackback([], {});

  let countPrime = 0;
  for(let i=1; i<=set.size; i++) {
    if(isPrime(i)) {
      countPrime++;
    }
  }

  return countPrime;
}

function isPrime(num) {
  if(num === 2 || num ===3 || num === 5 || num ===7 ) return true;
  else if(num === 1) return false;
  else {
    let max = 2;
    while(max*max<=num) {
      max++;
    }
    for(let i=2; i<max; i++) {
      if(num%i===0) return false;
    }

    return true;
  }
}

redJohn(40);