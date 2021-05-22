// Complete the getMinimumCost function below.
// https://www.hackerrank.com/challenges/greedy-florist/problem
function getMinimumCost(k, c) {
    // console.log(k,c);
    c.sort((a,b) => b-a);
    let sum = 0;
    for(let i = 0; i < c.length; i++) {
        sum += c[i]*(Math.floor(i/k)+1);
    }
    return sum;
}