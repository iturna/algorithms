// Complete the arrayManipulation function below.
//https://www.hackerrank.com/challenges/crush/
function arrayManipulation(n, queries) {
    const res = Array(n+1).fill(0);

    for(let i=0; i<queries.length; i++) {
      let begin = queries[i][0] - 1;
      let end = queries[i][1];
      let increment = queries[i][2];
      res[begin] += increment;
      res[end] -= increment;
    }

    let max = 0;
    let sum = 0;
    for(let val of res) {
      sum += val;
      max = Math.max(max, sum);
    }

    return max;
}

arrayManipulation(10, [[1,2,100], [2,5,100], [3,4,100]]);

