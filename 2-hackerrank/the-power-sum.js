/*
https://www.hackerrank.com/challenges/the-power-sum/problem

 * Complete the 'powerSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER X
 *  2. INTEGER N
 */

function powerSum(X, N) {
    // Write your code here
    const arr = [];
    let num = 1;
    let count = 0;
    let visit = [0];

    const backtrack = function(index, sum) {
      if(sum === X) {
        count++;
        console.log(visit);
        return;
      }

      for(let i=index; i<arr.length; i++) {
        if(visit[visit.length-1] >= arr[i]) {
          continue;
        }

        if(sum + arr[i] <= X) {
          visit.push(arr[i]);
          sum += Math.pow(arr[i], N);
          backtrack(index+1, sum);
          sum -= Math.pow(arr[i], N);
          visit.pop();
        } else {
          break;
        }
      }
    }

    while(Math.pow(num, N) <= X) {
      arr.push(num);
      num++;
    }

    console.log(arr)
    
    backtrack(0, 0);

    return count;
}


// powerSum(100, 3); //1
powerSum(100, 2); //1
